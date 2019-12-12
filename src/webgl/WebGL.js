import NormalFilter from './filter/Normal';
import glUtil from './util';
import util from '../util/util';
import store from '../store/index';
import StepType from '../Enum/StepType';
import BlendFilter from './filter/Blend';


export default class RenderContext {
    /**
     * 
     * @param {HTMLCanvasElement} canvas 
     */
    constructor(canvas) {
        /**
         * @type {WebGL2RenderingContext | WebGLRenderingContext}
         */
        let gl = canvas.getContext('webgl2', {
            premultipliedAlpha: false
        });
        if (!gl) {
            gl = canvas.getContext('webgl', {
                premultipliedAlpha: false
            });
        }
        if (!gl) {
            alert('您的显卡/浏览器不支持WEBGL！无法使用该应用程序！');
            throw new Error('cannot support webgl!');
        }

        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1);
        gl.clearColor(0.0, 0.0, 0.0, 0.0);


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

        let originTexture = glUtil.createTexture(gl);

        this.filters = filters;
        this.gl = gl;
        this.originTexture = originTexture;
        this.cachedImage = false;
        this.blendTextures = [];
        this.blendFramebuffers = [];
        this.blendTargetTexture = glUtil.createTexture(this.gl);
        glUtil.createFramebufferTexture(this.gl, 2, this.blendFramebuffers, this.blendTextures, this.gl.canvas.width, this.gl.canvas.height);
        this.tempFramebuffer = null;
        this.width = width;
        this.height = height;

    }
    renderSingleLayer(layer) {
        let left = layer.style.position_x1 * store.state.width;
        let right = layer.style.position_x2 * store.state.width;
        let top = (1 - layer.style.position_y1) * store.state.height;
        let bottom = (1 - layer.style.position_y2) * store.state.height;
        let points = [
            left, top, 0.0, 0.0,
            right, top, 1.0, 0.0,
            right, bottom, 1.0, 1.0,
            right, bottom, 1.0, 1.0,
            left, bottom, 0.0, 1.0,
            left, top, 0.0, 0.0
        ]
        points = new Float32Array(points);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT);
        this.gl.useProgram(this.filters.normal.program);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, points, this.gl.STATIC_DRAW);
        this.gl.bindTexture(this.gl.TEXTURE_2D, this.originTexture);
        if (!this.cachedImage) {
            this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, this.gl.RGBA, this.gl.UNSIGNED_BYTE, layer.image);
        }
        for (let step of layer.steps) {
            if (step.type === StepType.MOVE) {
                // this.filters.normal.setTranslate(step.offsetX, step.offsetY);
                // this.filters.normal.setRotate(step.rotate);
                // this.filters.normal.setScale(step.scaleX, step.scaleY);
            }
        }
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
        this.gl.drawArrays(this.gl.TRIANGLES, 0, 6);
        this.cachedImage = true;
    }

    render(canvases) {
        for (let i = 0; i < canvases.length; i++) {
            let canvas = canvases[i];
            canvas.canvas.renderContext.renderSingleLayer(canvas.layer);
        }

        let points = [
            0.0, 0.0, 0.0, 0.0,
            this.width, 0, 1.0, 0.0,
            this.width, this.height, 1.0, 1.0,
            this.width, this.height, 1.0, 1.0,
            0.0, this.height, 0.0, 1.0,
            0.0, 0.0, 0.0, 0.0
        ]
        points = new Float32Array(points);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, points, this.gl.STATIC_DRAW);

        let images = canvases.map(item => item.canvas.ref);
        this.blendLayers(images);
    }


    blendLayers(images) {
        // TODO： Framebuffer loop issue
        this.gl.useProgram(this.filters.blend.program);
        glUtil.createFramebufferTexture(this.gl, 2, this.blendFramebuffers, this.blendTextures, this.gl.canvas.width, this.gl.canvas.height);
        let count = 0;
        let targetImage;
        for (let image of images) {
            targetImage = image;
            this.gl.activeTexture(this.gl.TEXTURE2);
            this.gl.bindTexture(this.gl.TEXTURE_2D, this.blendTargetTexture);
            this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, this.gl.RGBA, this.gl.UNSIGNED_BYTE, targetImage);

            this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.blendFramebuffers[count % 2]);
            this.gl.clear(this.gl.COLOR_BUFFER_BIT);
            this.gl.drawArrays(this.gl.TRIANGLES, 0, 6);

            this.gl.activeTexture(this.gl.TEXTURE1);
            this.gl.bindTexture(this.gl.TEXTURE_2D, this.blendTextures[count % 2]);
            count++;
        }
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
        this.gl.drawArrays(this.gl.TRIANGLES, 0, 6);
        for (let i = 0; i < this.blendFramebuffers.length; i++) {
            this.gl.deleteFramebuffer(this.blendFramebuffers[i]);
            this.gl.deleteTexture(this.blendTextures[i]);
        }
        this.blendFramebuffers = [];
        this.blendTextures = [];
    }

    destroyBlendLayers() {
        for (let texture of this.blendTextures) {
            this.gl.deleteTexture(texture);
        }
        for (let framebuffer of this.blendFramebuffers) {
            this.gl.deleteFramebuffer(framebuffer);
        }
        this.gl.deleteTexture(this.blendTargetTexture);
    }

    viewport(x, y, width, height) {
        this.gl.viewport(x, y, width, height);
        this.width = width;
        this.height = height;

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