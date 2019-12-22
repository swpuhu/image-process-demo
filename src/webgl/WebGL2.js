import NormalFilter from './filter/Normal';
import glUtil from './util';
import util from '../util/util';
import store from '../store/index';
import StepType from '../Enum/StepType';
import BlendFilter from './filter/Blend';
import { updateStamp } from '../store/action';



export default class RenderContext {
    /**
     * 
     * @param {HTMLCanvasElement} canvas 
     */
    constructor(canvas) {
        let gl = canvas.getContext('webgl2', {
            premultipliedAlpha: false
        });
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

        let projectionMat = glUtil.createProjection(width, height, 1);
        let filters = {
            normal: new NormalFilter(gl, projectionMat),
            blend: new BlendFilter(gl, projectionMat),
        }

        this.textures = [];
        this.gl = gl;
        this.filters = filters;
        this.blendFramebuffers = [];
        this.blendTextures = [];
        this.midFramebuffers = [];
        this.midTextures = [];
        this.canvas = canvas;
        
        
    }


    addLayer(layer) {   
        let texture = glUtil.createTexture(this.gl);
        this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, this.gl.RGBA, this.gl.UNSIGNED_BYTE, layer.image);
        this.textures.push({
            layer,
            texture
        });
    }


    render() {
        let layers = store.state.layers.slice().reverse();
        this.gl.useProgram(this.filters.normal.program);
        
        for (let i = 0; i < layers.length; i++) {
            let framebuffer = this.gl.createFramebuffer();
            this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, framebuffer);
            let texture = glUtil.createTexture(this.gl);
            this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, this.canvas.width, this.canvas.height, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, null);
            this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER, this.gl.COLOR_ATTACHMENT0, this.gl.TEXTURE_2D, texture, 0);
            this.midFramebuffers.push(framebuffer);
            this.midTextures.push(texture);
        }
        for (let i = 0; i < layers.length; i++) {
            let layer = layers[i];
            let _texture = this.textures.find(item => item.layer === layer);
            if (_texture) {
                this.gl.bindTexture(this.gl.TEXTURE_2D, _texture.texture);
                this.renderSingleLayer(layer, this.midFramebuffers[i]);
            }
        }
        let textures = this.midTextures;
        this.blendLayers(textures);
    }

    blendLayers(textures) {
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
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
        // for (let texture of textures) {
        //     this.gl.bindTexture(this.gl.TEXTURE_2D, texture);
        //     this.gl.drawArrays(this.gl.TRIANGLES, 0, 6);    
        // }


        this.gl.useProgram(this.filters.blend.program);
        glUtil.createFramebufferTexture(this.gl, 2, this.blendFramebuffers, this.blendTextures, this.canvas.width, this.canvas.height);
        let count = 0;
        for (let texture of textures) {
            this.gl.activeTexture(this.gl.TEXTURE2);
            this.gl.bindTexture(this.gl.TEXTURE_2D, texture);

            this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.blendFramebuffers[count % 2]);
            this.gl.clear(this.gl.COLOR_BUFFER_BIT);
            this.gl.drawArrays(this.gl.TRIANGLES, 0, 6);

            this.gl.activeTexture(this.gl.TEXTURE1);
            this.gl.bindTexture(this.gl.TEXTURE_2D,  this.blendTextures[count % 2]);
            count++;
        }
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
        this.gl.drawArrays(this.gl.TRIANGLES, 0, 6);


        
        for (let i = 0; i < this.blendFramebuffers.length; i++) {
            this.gl.deleteFramebuffer(this.blendFramebuffers[i]);
            this.gl.deleteTexture(this.blendTextures[i]);
        }

        for (let i = 0; i < this.midTextures.length; i++) {
            this.gl.deleteFramebuffer(this.midFramebuffers[i]);
            this.gl.deleteTexture(this.midTextures[i]);
        }
        this.blendFramebuffers = [];
        this.blendTextures = [];
        this.midFramebuffers = [];
        this.midTextures = [];

    }

    renderSingleLayer(layer, framebuffer = null) {
        let x1 = layer.style.x1;
        let x2 = layer.style.x2;
        let x3 = layer.style.x3;
        let x4 = layer.style.x4;
        let y1 = layer.style.y1;
        let y2 = layer.style.y2;
        let y3 = layer.style.y3;
        let y4 = layer.style.y4;
        let points = [
            x1, y1, 0.0, 0.0,
            x2, y2, 1.0, 0.0,
            x3, y3, 1.0, 1.0,
            x3, y3, 1.0, 1.0,
            x4, y4, 0.0, 1.0,
            x1, y1, 0.0, 0.0
        ]
        points = new Float32Array(points);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, points, this.gl.STATIC_DRAW);
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, framebuffer)
        this.gl.drawArrays(this.gl.TRIANGLES, 0, 6);

    }
}