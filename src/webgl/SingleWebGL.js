import NormalFilter from './filter/Normal';
import glUtil from './util';
import store from '../store/index';
import BlendFilter from './filter/Blend';



export default class SingleWebGL {
    /**
     * 
     * @param {HTMLCanvasElement} canvas 
     */
    constructor(width, height) {
        let canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        let gl = canvas.getContext('webgl', {
            premultipliedAlpha: false
        });
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1);
        gl.clearColor(0.0, 0.0, 0.0, 0.0);
        gl.clear(gl.COLOR_BUFFER_BIT);

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
        let texture = glUtil.createTexture(gl);
        let projectionMat = glUtil.createProjection(width, height, 1);
        let filters = {
            normal: new NormalFilter(gl, projectionMat),
            blend: new BlendFilter(gl, projectionMat),
        };

        this.gl = gl;
        this.filters = filters;
        this.canvas = canvas;
        this.texture = texture;
        this.cacheImage;
    }

    render(layer) {
        this.gl.bindTexture(this.gl.TEXTURE_2D, this.texture);
        if (this.cacheImage !== layer.image) {
            this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, this.gl.RGBA, this.gl.UNSIGNED_BYTE, layer.image);
            this.cacheImage = layer.image;
        }
        let x1 = layer.style.x1 / store.state.width * this.canvas.width;
        let x2 = layer.style.x2 / store.state.width * this.canvas.width;
        let x3 = layer.style.x3 / store.state.width * this.canvas.width;
        let x4 = layer.style.x4 / store.state.width * this.canvas.width;

        let y1 = layer.style.y1 / store.state.height * this.canvas.height;
        let y2 = layer.style.y2 / store.state.height * this.canvas.height;
        let y3 = layer.style.y3 / store.state.height * this.canvas.height;
        let y4 = layer.style.y4 / store.state.height * this.canvas.height;
        
        let points = [
            x1, y1, 0.0, 0.0,
            x2, y2, 1.0, 0.0,
            x3, y3, 1.0, 1.0,
            x3, y3, 1.0, 1.0,
            x4, y4, 0.0, 1.0,
            x1, y1, 0.0, 0.0
        ];
        points = new Float32Array(points);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, points, this.gl.STATIC_DRAW);
        this.gl.useProgram(this.filters.normal.program);
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
        this.filters.normal.disableFlipY();
        this.gl.clear(this.gl.COLOR_BUFFER_BIT);
        this.gl.drawArrays(this.gl.TRIANGLES, 0, 6);
    }



    viewport(x, y, width, height) {
        this.canvas.width = width;
        this.canvas.height = height;
        this.gl.viewport(x, y, width, height);

        let points = new Float32Array([
            0.0, 0.0, 0.0, 0.0,
            width, 0.0, 1.0, 0.0,
            width, height, 1.0, 1.0,
            width, height, 1.0, 1.0,
            0.0, height, 0.0, 1.0,
            0.0, 0.0, 0.0, 0.0
        ]);

        let projectionMat = glUtil.createProjection(width, height, 1);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, points, this.gl.STATIC_DRAW);
        for (let filter in this.filters) {
            this.filters[filter].viewport(projectionMat);
        }
    }
}