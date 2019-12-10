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
        void main () {
            gl_Position = u_projection * a_position;
            v_texCoord = a_texCoord;
        }
        `;

        const fragmentShader = `
        precision mediump float;
        uniform sampler2D u_src_texture;
        uniform sampler2D u_dst_texture;
        uniform float u_blend_type;
        varying vec2 v_texCoord;
        void main () {
            vec4 src_color = texture2D(u_src_texture, v_texCoord);
            vec4 dst_color = texture2D(u_dst_texture, v_texCoord);
            if (u_blend_type == 0.0) {
                // 正常混合模式
                gl_FragColor = vec4(dst_color.rgb * dst_color.a + src_color.rgb * (1.0 - dst_color.a), src_color.a + dst_color.a);
            } else if (u_blend_type == 1.0) {
                
            }
            // gl_FragColor = vec4(0.0, 1.0, 1.0, 1.0);

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

        const u_src_texture = gl.getUniformLocation(program, 'u_src_texture');
        gl.uniform1i(u_src_texture, 1);
        const u_dst_texture = gl.getUniformLocation(program, 'u_dst_texture');
        gl.uniform1i(u_dst_texture, 2);


        const u_blend_type = gl.getUniformLocation(program, 'u_blend_type');
        gl.uniform1f(u_blend_type, 0);
        this.a_position = a_position;
        this.program = program;
        this.u_blend_type = u_blend_type;
        this.u_projection = u_projection;
        this.gl = gl;
    }


    setBlendType(type) {
        if (type === BlendMode.NORMAL) {
            type = 0;
            this.gl.uniform1f(this.u_blend_type, type);
        }
    }



    enableVertexArray(size, stride, offset) {
        this.gl.enableVertexAttribArray(this.a_position);
        this.gl.vertexAttribPointer(this.a_position, size, this.gl.FLOAT, false, stride, offset);
    }

    viewport(projectionMat) {
        this.gl.useProgram(this.program);
        this.gl.uniformMatrix4fv(this.u_projection, false, projectionMat);
    }

} 