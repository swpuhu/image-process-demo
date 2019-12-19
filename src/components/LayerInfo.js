import Base from '../util/Base';
import store from '../store/index';
import util from '../util/util';
import LayerContextMenu from './LayerContextMenu';
import Item from './LayerItem';

class LayerInfo extends Base {
    constructor() {
        super();
        this.ref = this.render();
        this.layerInfoItems = [];
        this.clearAllActive = this.clearAllActive.bind(this);
        this.changeLayer = this.changeLayer.bind(this);
        this.contextMenu = new LayerContextMenu();
    }

    render() {
        let template = {
            tagName: 'div',
            classList: ['layer-info'],
            children: []
        }
        for (let i = 0; i < store.state.layers.length; i++) {
            template.unshift({
                component: new Item(store.state.layers[i])
            })
        }
        let root = util.generateDOM(template).root;
        let that = this;
        root.addEventListener('contextmenu', function (e) {
            that.contextMenu.show(e);
        })

        return root;
    }


    clearAllActive() {
        this.layerInfoItems.forEach(item => item.disable());
    }

    addLayer(layer) {
        let item = new Item(layer, this.clearAllActive, this.changeLayer);
        this.clearAllActive();
        item.active();
        let firstChild = this.layerInfoItems[0];
        if (firstChild) {
            this.ref.insertBefore(item.ref, firstChild.ref);
        } else {
            this.ref.appendChild(item.ref);
        }
        this.layerInfoItems.unshift(item);
        
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