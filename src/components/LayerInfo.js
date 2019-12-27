import Base from '../util/Base';
import store from '../store/index';
import util from '../util/util';
import LayerContextMenu from './LayerContextMenu';
import LayerProps from './LayerProps';
import Item from './LayerItem';
import {changeLayer} from '../store/action';
class LayerInfo extends Base {
    constructor() {
        super();
        this.layerInfoItems = [];
        this.clearAllActive = this.clearAllActive.bind(this);
        this.changeLayer = this.changeLayer.bind(this);
        this.contextMenu = new LayerContextMenu();
        this.layerProps = new LayerProps();
        this.ref = this.render();
    }

    render() {
        let layerInfoTemplate = {
            tagName: 'div',
            classList: ['layer-info'],
            children: [],
            ref: 'layerInfo'
        }
        for (let i = 0; i < store.state.layers.length; i++) {
            layerInfoTemplate.unshift({
                component: new Item(store.state.layers[i])
            })
        }

        let template = {
            tagName: 'div',
            classList: ['layer-panel'],
            children: [
                {
                    component: this.layerProps
                },
                layerInfoTemplate
            ]
        }


        let {root, layerInfo} = util.generateDOM(template);
        let that = this;
        layerInfo.addEventListener('contextmenu', function (e) {
            that.contextMenu.show(e);
        })
        this.layerInfo = layerInfo;

        return root;
    }


    clearAllActive() {
        this.layerInfoItems.forEach(item => item.disable());
    }

    addLayer(layer) {
        let item = new Item(layer, this.clearAllActive, this.changeLayer);
        // this.clearAllActive();
        // item.active();
        let firstChild = this.layerInfoItems[0];
        if (firstChild) {
            this.layerInfo.insertBefore(item.ref, firstChild.ref);
        } else {
            this.layerInfo.appendChild(item.ref);
        }
        this.layerInfoItems.unshift(item);
        store.dispatch(changeLayer(layer));
    }

    deleteLayer(layer) {
        let index = this.layerInfoItems.findIndex(item => item.layer === layer);
        if (index > -1) {
            let deletedLayer = this.layerInfoItems.splice(index, 1)[0];
            deletedLayer.remove();
            deletedLayer = null;
        }
    }

    changeLayer(layer) {
        let item = this.layerInfoItems.find(it => it.layer === layer);
        if (item) {
            this.clearAllActive();
            item.active();
        }
    }

    updateStamp({layer, canvas}) {
        let item = this.layerInfoItems.find(it => it.layer === layer);
        if (item) {
            item.updateStamp(canvas.toDataURL());
        }
    }


}


export default util.getSingleton(LayerInfo);