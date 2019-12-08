import Base from '../util/Base';
import store from '../store/index';
import util from '../util/util';


class Item {
    constructor(layer) {
        this.layer = layer;
        this.ref = this.render();
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
                    text: this.layer.layer.name,
                    title: this.layer.layer.name
                }
            ]
        }
        let {root, stamp} = util.generateDOM(template);
        stamp.src = util.generateStamp(this.layer.layer.image);
        return root;
    }
}

class LayerInfo extends Base{
    constructor() {
        super();
        this.ref = this.render();    
    }

    render() {
        let template = {
            tagName: 'div',
            classList: ['layer-info'],
            children: []
        }
        // for (let i = 0; i < store.state.layers.length; i++) {
        //     template.push({
        //         component: new Item(store.state.layers[i])
        //     })
        // }
        return util.generateDOM(template).root;
    }

    addLayer(layer) {
        let item = new Item(layer);
        this.ref.appendChild(item.ref);
    }


}


export default util.getSingleton(LayerInfo);