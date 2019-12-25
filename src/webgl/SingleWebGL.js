import NormalFilter from './filter/Normal';
import glUtil from './util';
import store from '../store/index';
import BlendFilter from './filter/Blend';



export default class RenderContext {
    /**
     * 
     * @param {HTMLCanvasElement} canvas 
     */
    constructor(canvas) {
        let gl = canvas.getContext('webgl2', {
            premultipliedAlpha: false
        });
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1);
        gl.clearColor(0.0, 0.0, 0.0, 0.0);
        gl.clear(gl.COLOR_BUFFER_BIT);

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
    }

    render(layer) {
        let layers = store.state.layers.slice().reverse();
        this.gl.useProgram(this.filters.normal.program);
        for (let i = 0; i < layers.length; i++) {
            let layer = layers[i];
            let _texture = this.textures.find(item => item.layer === layer);
            if (_texture) {
                this.gl.bindTexture(this.gl.TEXTURE_2D, _texture.texture);
                this.renderSingleLayer(layer, _texture.texture, this.midFramebuffers[i], resolution);
            }
        }
        let textures = this.midTextures;
        this.blendLayers(textures);
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