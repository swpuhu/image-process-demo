import Base from '../util/Base';
import util from '../util/util';
import SelectBox from './baseUI/SelectBox';
import BlendMode from '../Enum/BlendMode';
import BlendModeDict from '../Enum/BlendModeDict';
import store from '../store/index';
import {updateBlendMode, drawLayer} from '../store/action'

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
        this.box.setDisable();
        this.ref = this.box.ref;
        
        store.on('changeLayer', (_layer) => {
            let layer = store.state.currentLayer[0];
            let index = store.state.layers.indexOf(layer);
            if (store.state.layers.length >= 2 && index > -1 && index !== store.state.layers.length - 1) {
                this.box.cancelDisable();
                this.box.value = _layer.blendMode;       
            } else {
                this.box.setDisable();
            }
        });

        store.on('addLayer', () => {
            let layer = store.state.currentLayer[0];
            let index = store.state.layers.indexOf(layer);
            if (store.state.layers.length >= 2 && index > -1 && index !== store.state.layers.length - 1) {
                this.box.cancelDisable();       
            } else {
                this.box.setDisable();
            }
        });

        this.box.on('change', (alias, value) => {
            store.dispatch(updateBlendMode(value));
            store.dispatch(drawLayer());
        })
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