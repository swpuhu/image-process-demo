import NormalFilter from './filter/Normal';
import util from './util';
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
            normal: new NormalFilter(gl, projectionMat),
            blend: new BlendFilter(gl, projectionMat),
        }

        let originTexture = util.createTexture(gl);

        this.filters = filters;
        this.gl = gl;
        this.originTexture = originTexture;
        this.cachedImage = false;
        this.blendTextures = [];
        this.blendFramebuffers = [];
        this.blendTargetTexture = util.createTexture(this.gl);

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
        this.gl.clear(this.gl.COLOR_BUFFER_BIT);
        this.gl.useProgram(this.filters.normal.program);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, points, this.gl.STATIC_DRAW);
        this.gl.bindTexture(this.gl.TEXTURE_2D, this.originTexture);
        if (!this.cachedImage) {
            this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, this.gl.RGBA, this.gl.UNSIGNED_BYTE, layer.image);
        }
        for (let step of layer.steps) {
            if (step.type === StepType.MOVE) {
                this.filters.normal.setTranslate(step.offsetX, step.offsetY);
                this.filters.normal.setRotate(step.rotate);
                this.filters.normal.setScale(step.scaleX, step.scaleY);
            }
        }

        this.gl.drawArrays(this.gl.TRIANGLES, 0, 6);
        this.cachedImage = true;
    }


    blendLayers(images) {
        this.gl.useProgram(this.filters.blend.program);
        // let textures = [];
        // let framebuffers = [];
        util.createFramebufferTexture(this.gl, 2, this.blendFramebuffers, this.blendTextures, this.gl.canvas.width, this.gl.canvas.height);
        let count = 0;
        let targetImage;
        // let targetTexture = util.createTexture(this.gl);
        for (let image of images) {
            targetImage = image.texture;
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

        let points = new Float32Array([
            0.0, 0.0, 0.0, 0.0,
            width, 0.0, 1.0, 0.0,
            width, height, 1.0, 1.0,
            width, height, 1.0, 1.0,
            0.0, height, 0.0, 1.0,
            0.0, 0.0, 0.0, 0.0
        ]);


        let projectionMat = util.createProjection(width, height, 1);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, points, this.gl.STATIC_DRAW);

        for (let filter in this.filters) {
            this.filters[filter].viewport(projectionMat);
        }

    }
}