import glUtil from '../util';
import BlendMode from '../../Enum/BlendMode';

export default class BlendFilter {
    /**
     * 
     * @param {WebGL2RenderingContext|WebGLRenderingContext} gl 
     */
    constructor (gl, projectionMat) {
        const vertexShader = `
        attribute vec4 a_position;
        attribute vec2 a_texCoord;
        varying vec2 v_texCoord;
        uniform mat4 u_projection;
        uniform int u_enableFlipY;
        void main () {
            if (u_enableFlipY == 1) {
                gl_Position = u_projection * a_position * vec4(1.0, -1.0, 1.0, 1.0);
            } else {
                gl_Position = u_projection * a_position;
            }
            
            v_texCoord = a_texCoord;
        }
        `;

        const fragmentShader = `
        precision mediump float;
        uniform sampler2D u_back_texture;
        uniform sampler2D u_front_texture;
        uniform float u_blend_type;
        varying vec2 v_texCoord;
        void main () {
            vec4 back_color = texture2D(u_back_texture, v_texCoord);
            vec4 front_color = texture2D(u_front_texture, v_texCoord);
            if (u_blend_type == 0.0) {
                // 正常混合模式
            } else if (u_blend_type == 1.0) {
                // 正片叠底
                front_color = vec4(front_color.rgb * back_color.rgb, front_color.a);
            } else if (u_blend_type == 2.0) {
                // 变亮
                front_color = vec4(max(front_color.rgb, back_color.rgb), front_color.a);
            } else if (u_blend_type == 3.0) {
                // 变暗
                front_color = vec4(min(front_color.rgb, back_color.rgb), front_color.a);
            } else if (u_blend_type == 4.0) {
                // 滤色
                front_color = vec4(1.0 - (1.0 - front_color.rgb) * (1.0 - back_color.rgb), front_color.a);
            } else if (u_blend_type == 5.0) {
                // 颜色加深
                front_color = vec4(front_color.rgb - (1.0 - front_color.rgb) * (1.0 - back_color.rgb) / back_color.rgb, front_color.a);
            } else if (u_blend_type == 6.0) {
                // 颜色减淡
                front_color = vec4(front_color.rgb + (front_color.rgb) * (back_color.rgb) / (1.0 - back_color.rgb), front_color.a);
            } else if (u_blend_type == 7.0) {
                if (front_color.r <= 0.5) {
                    front_color.r = front_color.r * back_color.r * 2.0;
                } else {
                    front_color.r = 1.0 - (1.0 - front_color.r) * (1.0 - back_color.r) * 2.0;
                }

                
                if (front_color.g <= 0.5) {
                    front_color.g = front_color.g * back_color.g * 2.0;
                } else {
                    front_color.g = 1.0 - (1.0 - front_color.g) * (1.0 - back_color.g) * 2.0;
                }

                
                if (front_color.b <= 0.5) {
                    front_color.b = front_color.b * back_color.b * 2.0;
                } else {
                    front_color.b = 1.0 - (1.0 - front_color.b) * (1.0 - back_color.b) * 2.0;
                }

            }
            gl_FragColor = vec4(front_color.rgb * front_color.a + back_color.rgb * (1.0 - front_color.a), 1.0 - (1.0 - back_color.a) * (1.0 - front_color.a));

        }
        `;
        let program = glUtil.initWebGL(gl, vertexShader, fragmentShader);

        gl.useProgram(program);
        let a_position = gl.getAttribLocation(program, 'a_position');
        let a_texCoord = gl.getAttribLocation(program, 'a_texCoord');

        let u_projection = gl.getUniformLocation(program, 'u_projection');
        gl.uniformMatrix4fv(u_projection, false, projectionMat);

        
        gl.enableVertexAttribArray(a_position);
        gl.vertexAttribPointer(a_position, 2, gl.FLOAT, false, Float32Array.BYTES_PER_ELEMENT * 4, 0);
        
        gl.enableVertexAttribArray(a_texCoord);
        gl.vertexAttribPointer(a_texCoord, 2, gl.FLOAT, false, Float32Array.BYTES_PER_ELEMENT * 4, Float32Array.BYTES_PER_ELEMENT * 2);

        const u_back_texture = gl.getUniformLocation(program, 'u_back_texture');
        gl.uniform1i(u_back_texture, 0);
        const u_front_texture = gl.getUniformLocation(program, 'u_front_texture');
        gl.uniform1i(u_front_texture, 1);

        const u_enableFlipY = gl.getUniformLocation(program, 'u_enableFlipY');
        gl.uniform1i(u_enableFlipY, 0);


        const u_blend_type = gl.getUniformLocation(program, 'u_blend_type');
        gl.uniform1f(u_blend_type, 0);
        this.a_position = a_position;
        this.program = program;
        this.u_blend_type = u_blend_type;
        this.u_projection = u_projection;
        this.u_enableFlipY = u_enableFlipY;
        this.gl = gl;
    }


    setBlendType(type) {
        if (type === BlendMode.NORMAL) {
            type = 0;
            
        } else if (type === BlendMode.MULTIPLY) {
            // 正片叠底
            this.gl.clearColor(1.0, 1.0, 1.0, 0.0);
            type = 1;
        } else if (type === BlendMode.LIGHTEN) {
            // 变亮
            this.gl.clearColor(0.0, 0.0, 0.0, 0.0);
            type = 2;
        } else if (type === BlendMode.DARKEN) {
            // 变暗
            this.gl.clearColor(1.0, 1.0, 1.0, 0.0);
            type = 3;
        } else if (type === BlendMode.COLOR_FILTER) {
            // 滤色
            this.gl.clearColor(0.0, 0.0, 0.0, 0.0);
            type = 4;
        } else if (type === BlendMode.COLOR_BURN) {
            // 颜色加深
            this.gl.clearColor(1.0, 1.0, 1.0, 0.0);
            type = 5;
        } else if (type === BlendMode.COLOR_DODGE) {
            type = 6;
        } else if (type === BlendMode.OVERLAY) {
             // 叠加
             this.gl.clearColor(1.0, 1.0, 1.0, 0.0);
            type = 7;
        }
        this.gl.uniform1f(this.u_blend_type, type);
    }



    enableVertexArray(size, stride, offset) {
        this.gl.enableVertexAttribArray(this.a_position);
        this.gl.vertexAttribPointer(this.a_position, size, this.gl.FLOAT, false, stride, offset);
    }

    viewport(projectionMat) {
        this.gl.useProgram(this.program);
        this.gl.uniformMatrix4fv(this.u_projection, false, projectionMat);
    }
    
    enableFlipY() {
        this.gl.uniform1i(this.u_enableFlipY, 1);
    }

    disableFlipY() {
        this.gl.uniform1i(this.u_enableFlipY, 0);
    }

} 