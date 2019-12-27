import NormalFilter from './filter/Normal';
import glUtil from './util';
import store from '../store/index';
import BlendFilter from './filter/Blend';
import {updateStamp} from '../store/action'
import SingleWebGL from './SingleWebGL';
import util from '../util/util';
import BlendMode from '../Enum/BlendMode';


export default class RenderContext {
    /**
     * 
     * @param {HTMLCanvasElement} canvas 
     */
    constructor(canvas) {
        let gl = canvas.getContext('webgl2', {
            premultipliedAlpha: false
        });
        let offCanvas = new SingleWebGL(80, 50);
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1);
        gl.clearColor(1.0, 1.0, 1.0, 0.0);
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

        let projectionMat = glUtil.createProjection(width, height, 1);
        let filters = {
            normal: new NormalFilter(gl, projectionMat),
            blend: new BlendFilter(gl, projectionMat),
        };

        this.textures = [];
        this.gl = gl;
        this.filters = filters;
        this.blendFramebuffers = [];
        this.blendTextures = [];
        this.midFramebuffers = [];
        this.midTextures = [];
        this.canvas = canvas;
        glUtil.createFramebufferTexture(this.gl, 2, this.blendFramebuffers, this.blendTextures, this.canvas.width, this.canvas.height);
        this.layers = new Map();
        this.offCanvas = offCanvas;
        this.updateStamp = util.debounce(this.updateStamp, 200);
    }


    addLayer(layer) {
        let texture = glUtil.createTexture(this.gl);
        this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, this.gl.RGBA, this.gl.UNSIGNED_BYTE, layer.image);
        layer.firstRender = true;

        let framebuffer = this.gl.createFramebuffer();
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, framebuffer);
        let _texture = glUtil.createTexture(this.gl);
        this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, this.canvas.width, this.canvas.height, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, null);
        this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER, this.gl.COLOR_ATTACHMENT0, this.gl.TEXTURE_2D, _texture, 0);
        this.midFramebuffers.push(framebuffer);
        this.midTextures.push(_texture);
        this.layers.set(layer, JSON.stringify(layer));
        this.textures.push({
            layer,
            texture,
            midFramebuffer: framebuffer,
            midTexture: _texture
        });
    }

    deleteLayer(layer) {
        let index = this.textures.findIndex(item => item.layer === layer);
        if (index >= 0) {
            let deletedLayer = this.textures[index];
            this.layers.delete(deletedLayer);
            this.gl.deleteTexture(deletedLayer.texture);
            this.textures.splice(index, 1);
            let deletedFramebuffer = this.midFramebuffers[index];
            let deletedTexture = this.midTextures[index];
            this.midFramebuffers.splice(index, 1);
            this.midTextures.splice(index, 1);
            this.gl.deleteFramebuffer(deletedFramebuffer);
            this.gl.deleteTexture(deletedTexture);
        }
    }

    render(resolution) {
        let layers = store.state.layers.slice().reverse();
        this.gl.useProgram(this.filters.normal.program);
        let textures = [];
        for (let i = 0; i < layers.length; i++) {
            let layer = layers[i];
            let _texture = this.textures.find(item => item.layer === layer);
            if (_texture) {
                this.gl.bindTexture(this.gl.TEXTURE_2D, _texture.texture);
                this.renderSingleLayer(layer, _texture.texture, _texture.midFramebuffer, resolution);
            }
            textures.push({
                texture: _texture.midTexture,
                blendMode: layer.blendMode
            });
        }
        // let textures = this.midTextures;
        this.blendLayers(textures);
    }

    blendLayers(textures) {
        if (!textures.length) return;
        let points = [
            0.0, 0.0, 0.0, 0.0,
            this.canvas.width, 0, 1.0, 0.0,
            this.canvas.width, this.canvas.height, 1.0, 1.0,
            this.canvas.width, this.canvas.height, 1.0, 1.0,
            0.0, this.canvas.height, 0.0, 1.0,
            0.0, 0.0, 0.0, 0.0
        ];
        points = new Float32Array(points);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, points, this.gl.STATIC_DRAW);

        if (textures.length === 1) {
            this.gl.useProgram(this.filters.normal.program);
            this.gl.activeTexture(this.gl.TEXTURE0);
            this.gl.bindTexture(this.gl.TEXTURE_2D, textures[0].texture);
            this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
            this.filters.normal.enableFlipY();
            this.gl.clear(this.gl.COLOR_BUFFER_BIT);
            this.gl.drawArrays(this.gl.TRIANGLES, 0, 6);
        } else if (textures.length === 2) {
            this.gl.useProgram(this.filters.blend.program);
            this.gl.activeTexture(this.gl.TEXTURE0);
            this.gl.bindTexture(this.gl.TEXTURE_2D, textures[0].texture);

            this.gl.activeTexture(this.gl.TEXTURE1);
            this.gl.bindTexture(this.gl.TEXTURE_2D, textures[1].texture);

            this.filters.blend.enableFlipY();
            this.filters.blend.setBlendType(textures[1].blendMode);
            this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
            this.gl.clear(this.gl.COLOR_BUFFER_BIT);
            this.gl.drawArrays(this.gl.TRIANGLES, 0, 6);
        } else if (textures.length >= 3) {
            let _textures = textures.slice();
            this.gl.useProgram(this.filters.blend.program);
            this.filters.blend.disableFlipY();
            let count = 0;
            this.gl.activeTexture(this.gl.TEXTURE0);
            this.gl.bindTexture(this.gl.TEXTURE_2D, _textures[0].texture);

            this.gl.activeTexture(this.gl.TEXTURE1);
            this.gl.bindTexture(this.gl.TEXTURE_2D, _textures[1].texture);

            this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.blendFramebuffers[count]);

            this.filters.blend.setBlendType(_textures[1].blendMode);
            this.gl.drawArrays(this.gl.TRIANGLES, 0, 6);
            this.gl.activeTexture(this.gl.TEXTURE0);
            this.gl.bindTexture(this.gl.TEXTURE_2D, this.blendTextures[count]);
            count++;
            _textures.shift();
            _textures.shift();

            for (let i = 0; i < _textures.length; i++) {
                this.gl.activeTexture(this.gl.TEXTURE1);
                this.gl.bindTexture(this.gl.TEXTURE_2D, _textures[i].texture);
                this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.blendFramebuffers[count % 2]);
                this.gl.clear(this.gl.COLOR_BUFFER_BIT);
                this.filters.blend.setBlendType(_textures[i].blendMode);
                this.gl.drawArrays(this.gl.TRIANGLES, 0, 6);
                this.gl.activeTexture(this.gl.TEXTURE0);
                this.gl.bindTexture(this.gl.TEXTURE_2D, this.blendTextures[count % 2]);
                count++;
            }

            this.gl.useProgram(this.filters.normal.program);
            this.filters.normal.enableFlipY();
            this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
            this.gl.clear(this.gl.COLOR_BUFFER_BIT);
            this.gl.drawArrays(this.gl.TRIANGLES, 0, 6);
        }
    }

    renderSingleLayer(layer, texture, framebuffer = null, resolution) {
        let params = this.layers.get(layer);
        if (params === JSON.stringify(layer) && !layer.firstRender) {
            return;
        } else {
            layer.firstRender = false;
            this.layers.set(layer, JSON.stringify(layer));
        }

        let x1 = layer.style.x1;
        let x2 = layer.style.x2;
        let x3 = layer.style.x3;
        let x4 = layer.style.x4;
        let y1 = layer.style.y1;
        let y2 = layer.style.y2;
        let y3 = layer.style.y3;
        let y4 = layer.style.y4;
        if (resolution) {
            x1 = x1 / store.state.width * resolution.width;
            x2 = x2 / store.state.width * resolution.width;
            x3 = x3 / store.state.width * resolution.width;
            x4 = x4 / store.state.width * resolution.width;

            y1 = y1 / store.state.height * resolution.height;
            y2 = y2 / store.state.height * resolution.height;
            y3 = y3 / store.state.height * resolution.height;
            y4 = y4 / store.state.height * resolution.height;
        }
        let points = [
            x1, y1, 0.0, 0.0,
            x2, y2, 1.0, 0.0,
            x3, y3, 1.0, 1.0,
            x3, y3, 1.0, 1.0,
            x4, y4, 0.0, 1.0,
            x1, y1, 0.0, 0.0
        ];
        if (this.gl.CURRENT_PROGRAM !== this.filters.normal.program) {
            this.gl.useProgram(this.filters.normal.program);
        }
        points = new Float32Array(points);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, points, this.gl.STATIC_DRAW);
        this.gl.activeTexture(this.gl.TEXTURE0);
        this.gl.bindTexture(this.gl.TEXTURE_2D, texture);
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, framebuffer);
        this.filters.normal.disableFlipY();
        this.gl.clear(this.gl.COLOR_BUFFER_BIT);
        this.gl.drawArrays(this.gl.TRIANGLES, 0, 6);
        this.updateStamp(layer);

    }

    updateStamp(layer) {
        this.offCanvas.render(layer);
        store.dispatch(updateStamp(layer, this.offCanvas.canvas));
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

        for (let i = 0; i < this.blendFramebuffers.length; i++) {
            this.gl.deleteFramebuffer(this.blendFramebuffers[i]);
            this.gl.deleteTexture(this.blendTextures[i]);
        }
        this.blendFramebuffers= [];
        this.blendTextures = [];

        for (let i = 0; i < this.midFramebuffers.length; i++) {
            this.gl.bindFramebuffer(this.gl.FRAMEBUFFER ,this.midFramebuffers[i]);
            this.gl.viewport(x, y, width, height);
            this.gl.bindTexture(this.gl.TEXTURE_2D, this.midTextures[i]);
            this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, this.canvas.width, this.canvas.height, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, null);
        }

        for (let i = 0; i < this.textures.length; i++) {
            this.textures[i].layer.firstRender = true;
        }


        // for (let i = 0; i < this.midFramebuffers.length; i++) {
        //     this.gl.deleteFramebuffer(this.midFramebuffers[i]);
        //     this.gl.deleteTexture(this.midTextures[i]);
        // }
        // this.midFramebuffers = [];
        // this.midTextures = [];

        glUtil.createFramebufferTexture(this.gl, 2, this.blendFramebuffers, this.blendTextures, this.canvas.width, this.canvas.height);
        // glUtil.createFramebufferTexture(this.gl, midNumbers, this.midFramebuffers, this.midTextures, this.canvas.width, this.canvas.height);
        let projectionMat = glUtil.createProjection(width, height, 1);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, points, this.gl.STATIC_DRAW);
        for (let filter in this.filters) {
            this.filters[filter].viewport(projectionMat);
        }

    }
}