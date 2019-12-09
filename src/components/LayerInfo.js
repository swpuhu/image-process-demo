import Base from '../util/Base';
import store from '../store/index';
import util from '../util/util';


class Item {
    constructor(layer, clearAllActive) {
        this.layer = layer;
        this.ref = this.render();
        this.isActive = false;
        this.clearAllActive = clearAllActive;
    }

    render() {
        let template = {
            tagName: 'div',
            classList: ['layer-item', 'flex'],
            children: [
                {
                    tagName: 'img',
                    classList: ['layer-item__stamp'],
                    ref: 'stamp'
                },
                {
                    tagName: 'div',
                    classList: ['layer-item__title'],
                    text: this.layer.name,
                    title: this.layer.name
                }
            ]
        }
        let {root, stamp} = util.generateDOM(template);
        let that = this;
        root.addEventListener('click', function () {
            that.clearAllActive();
            that.active();
        })
        stamp.src = util.generateStamp(this.layer.image);
        return root;
    }

    active() {
        this.isActive = true;
        this.ref.classList.add('active');
    }

    disable() {
        this.isActive = false;
        this.ref.classList.remove('active');
    }
}

class LayerInfo extends Base{
    constructor() {
        super();
        this.ref = this.render();    
        this.layerInfoItems = [];
        this.clearAllActive = this.clearAllActive.bind(this);
    }

    render() {
        let template = {
            tagName: 'div',
            classList: ['layer-info'],
            children: []
        }
        for (let i = 0; i < store.state.layers.length; i++) {
            template.push({
                component: new Item(store.state.layers[i])
            })
        }
        return util.generateDOM(template).root;
    }


    clearAllActive() {
        this.layerInfoItems.forEach(item => item.disable());
    }

    addLayer(layer) {
        let item = new Item(layer, this.clearAllActive);
        this.clearAllActive();
        item.active();
        this.layerInfoItems.push(item);
        this.ref.appendChild(item.ref);
    }

    changeLayer(layer) {
        let item = this.layerInfoItems.find(it => it.layer === layer);
        if (item) {
            this.clearAllActive();
            item.active();
        }
    }


}


export default util.getSingleton(LayerInfo);