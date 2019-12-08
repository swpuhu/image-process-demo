import Base from '../util/Base';
import LayerInfo from '../components/LayerInfo';
import util from '../util/util';

export default class Info extends Base {
    constructor() {
        super();
        this.ref = this.render();
    }

    render() {
        let layerInfo = new LayerInfo();
        let template = {
            tagName: 'div',
            classList: 'info',
            children: [
                {
                    component: layerInfo
                }
            ]
        }
        return util.generateDOM(template).root;
    }
}