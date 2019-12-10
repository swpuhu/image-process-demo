import RenderContext from "./WebGL";

export default class OffCanvas {
    constructor(width, height) {
        let canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        this.renderContext = new RenderContext(canvas);
        this.canvas = canvas;
        
    }

    blendImages(images) {
        this.renderContext.blendLayers(images);
    }

    changeZoom(width, height) {
        this.canvas.width = width;
        this.canvas.height = height;
        this.renderContext.viewport(0, 0, width, height);
    }
}