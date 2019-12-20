import Base from '../util/Base';
import util from '../util/util';
import SelectBox from './SelectBox';
import BlendMode from '../Enum/BlendMode';
import BlendModeDict from '../Enum/BlendModeDict';

class BlendLayerSelectBox {
    constructor () {
        this.dropList = [];
        for (let mode in BlendMode) {
            this.dropList.push({
                value: BlendMode[mode],
                alias: BlendModeDict[mode]
            })
        }
        this.box = new SelectBox(this.dropList);
        this.ref = this.box.ref;
    }
}

export default class LayerProps extends Base {
    constructor () {
        super();
        this.blendLayerBox = new BlendLayerSelectBox();
        this.ref = this.render();
    }

    render() {
        let tempate = {
            tagName: 'div',
            classList: ['layerblend', 'flex'],
            children: [
                {
                    tagName: 'div',
                    classList: ['layerblend-label'],
                    text: '混合模式'
                },
                {
                    component: this.blendLayerBox
                }
            ]
        }
        let {root} = util.generateDOM(tempate);
        return root;
    }
}