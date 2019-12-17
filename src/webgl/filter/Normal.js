import glUtil from '../util';


export default class NormalFilter {
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
        uniform mat4 u_translate;
        uniform mat4 u_scale;
        uniform mat4 u_rotate;
        void main () {
            gl_Position = u_projection * u_translate * u_scale * u_rotate * a_position;
            v_texCoord = a_texCoord;
        }
        `;

        const fragmentShader = `
        precision mediump float;
        uniform sampler2D u_texture;
        varying vec2 v_texCoord;
        uniform vec2 u_resolution;
        void main () {
            vec2 pos = gl_FragCoord.xy / u_resolution;
            // if (pos.x < 0.5) {
            //     gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
            // } else {
                gl_FragColor = texture2D(u_texture, v_texCoord);
            // }
        }
        `;
        let program = glUtil.initWebGL(gl, vertexShader, fragmentShader);

        gl.useProgram(program);
        let a_position = gl.getAttribLocation(program, 'a_position');
        let a_texCoord = gl.getAttribLocation(program, 'a_texCoord');

        let u_projection = gl.getUniformLocation(program, 'u_projection');
        gl.uniformMatrix4fv(u_projection, false, projectionMat);
        
        let u_resolution = gl.getUniformLocation(program, 'u_resolution');
        gl.uniform2f(u_resolution, gl.canvas.width, gl.canvas.height);

        let u_translate = gl.getUniformLocation(program, 'u_translate');
        let u_scale = gl.getUniformLocation(program, 'u_scale');
        let u_rotate = gl.getUniformLocation(program, 'u_rotate');


        let translateMat = glUtil.createTranslateMatrix(0, 0, 0);
        let scaleMat = glUtil.createScaleMatrix(1, 1, 1, {x: gl.canvas.width / 2, y: gl.canvas.height / 2, z: 1});
        let rotateMat = glUtil.createRotateMatrix({x: gl.canvas.width / 2, y: gl.canvas.height / 2}, 0);

        gl.uniformMatrix4fv(u_translate, false, translateMat);
        gl.uniformMatrix4fv(u_scale, false, scaleMat);
        gl.uniformMatrix4fv(u_rotate, false, rotateMat);
        
        gl.enableVertexAttribArray(a_position);
        gl.vertexAttribPointer(a_position, 2, gl.FLOAT, false, Float32Array.BYTES_PER_ELEMENT * 4, 0);
        
        gl.enableVertexAttribArray(a_texCoord);
        gl.vertexAttribPointer(a_texCoord, 2, gl.FLOAT, false, Float32Array.BYTES_PER_ELEMENT * 4, Float32Array.BYTES_PER_ELEMENT * 2);

        this.a_position = a_position;
        this.u_translate = u_translate;
        this.u_scale = u_scale;
        this.u_rotate = u_rotate;
        this.translateMat = translateMat;
        this.u_projection = u_projection;
        this.u_resolution = u_resolution;
        this.program = program;
        this.gl = gl;
    }


    enableVertexArray(size, stride, offset) {
        this.gl.enableVertexAttribArray(this.a_position);
        this.gl.vertexAttribPointer(this.a_position, size, this.gl.FLOAT, false, stride, offset);
    }


    setTranslate(x, y) {
        let translateMat = glUtil.createTranslateMatrix(x, y, 0);
        this.gl.uniformMatrix4fv(this.u_translate, false, translateMat);
    }

    setRotate(angle, centerX = this.gl.canvas.width / 2, centerY = this.gl.canvas.height / 2) {
        let rotateMat = glUtil.createRotateMatrix({x: centerX, y: centerY}, angle);
        this.gl.uniformMatrix4fv(this.u_rotate, false, rotateMat);
    }

    setScale(sx, sy, centerX = this.gl.canvas.width / 2, centerY = this.gl.canvas.height / 2) {
        let scaleMat = glUtil.createScaleMatrix(sx, sy, 1, {x: centerX, y: centerY, z: 1});
        this.gl.uniformMatrix4fv(this.u_scale, false, scaleMat);
    }

    viewport(projectionMat) {
        this.gl.useProgram(this.program);
        this.gl.uniformMatrix4fv(this.u_projection, false, projectionMat);
        this.gl.uniform2f(this.u_resolution, this.gl.canvas.width, this.gl.canvas.height);
    }



} 