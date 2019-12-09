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

    render(layer) {
        this.renderContext.render(layer);
    }

    remove() {
        this.ref.remove();
    }
}