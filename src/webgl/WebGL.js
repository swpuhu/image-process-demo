import NormalFilter from './filter/Normal';
import util from './util';
import store from '../store/index';

export default class RenderContext {
    /**
     * 
     * @param {HTMLCanvasElement} canvas 
     */
    constructor(canvas) {
        /**
         * @type {WebGL2RenderingContext | WebGLRenderingContext}
         */
        let gl = canvas.getContext('webgl2');
        if (!gl) {
            gl = canvas.getContext('webgl');
        }
        if (!gl) {
            alert('您的显卡/浏览器不支持WEBGL！无法使用该应用程序！');
            throw new Error('cannot support webgl!');
        }

        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1);

        let width = canvas.width;   
        let height = canvas.height;

        let points = new Float32Array([
            0.0, 0.0, 0.0, 0.0,
            width, 0.0, 1.0, 0.0,
            width, height, 1.0, 1.0,
            width, height, 1.0, 1.0,
            0.0, height, 0.0, 1.0,
            0.0, 0.0, 0.0, 0.0
        ]);


        let buffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.bufferData(gl.ARRAY_BUFFER, points, gl.STATIC_DRAW);

        let projectionMat = util.createProjection(width, height, 1);
        let filters = {
            normal: new NormalFilter(gl, projectionMat)
        }

        let originTexture = util.createTexture(gl);

        this.filters = filters;
        this.gl = gl;
        this.originTexture = originTexture;
    }

    render(layer) {
        let imageWidth = layer.width;
        let imageHeight = layer.height;
        let offsetX = (store.state.width - imageWidth) / 2;
        let offsetY = (store.state.height - imageHeight) / 2;
        let points = [
            0.0, 0.0, 0.0, 0.0,
            imageWidth, 0.0, 1.0, 0.0,
            imageWidth, imageHeight, 1.0, 1.0,
            imageWidth, imageHeight, 1.0, 1.0,
            0.0, imageHeight, 0.0, 1.0,
            0.0, 0.0, 0.0, 0.0,
        ]
        for (let i = 0; i < points.length; i += 4) {
            points[i] += offsetX;
            points[i + 1] += offsetY;
        }
        points = new Float32Array(points);
        this.gl.useProgram(this.filters.normal.program);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, points, this.gl.STATIC_DRAW);
        this.gl.bindTexture(this.gl.TEXTURE_2D, this.originTexture);
        this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, this.gl.RGBA, this.gl.UNSIGNED_BYTE, layer.image);
        for (let step of layer.steps) {

        }

        this.gl.drawArrays(this.gl.TRIANGLES, 0, 6);
    }
}