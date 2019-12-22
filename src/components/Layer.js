import Base from '../util/Base';
import util from '../util/util';
import RenderContext from '../webgl/WebGL';

export default class Layer extends Base {
    constructor(width, height) {
        super();
        let template = {
            tagName: 'canvas',
            classList: ['canvas', 'absolute', 'left', 'top']
        }
        
        this.ref = util.generateDOM(template).root;
        this.ref.width = width;
        this.ref.height = height;
        this.renderContext = new RenderContext(this.ref);
    }

    render(layer, renderResolution) {
        this.renderContext.render(layer, renderResolution);
    }

    offRender(layer, renderResolution) {
        this.renderContext.offRender(layer, renderResolution);
    }

    remove() {
        this.ref.remove();
    }

    viewport(x, y, width, height) {
        this.ref.width = width;
        this.ref.height = height;
        this.renderContext.viewport(x, y, width, height);
    }
}