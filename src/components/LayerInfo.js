import Base from '../util/Base';
import store from '../store/index';
import util from '../util/util';
import { changeLayer, drawLayer } from '../store/action';
import LayerContextMenu from './LayerContextMenu';

class Item {
    constructor(layer, clearAllActive, changeLayer) {
        this.layer = layer;
        this.ref = this.render();
        this.isActive = false;
        this.clearAllActive = clearAllActive;
        this.changeLayer = changeLayer;
        this.boundary = null;
        Item.instance.push(this);
    }

    render() {
        let template = {
            tagName: 'div',
            classList: ['layer-item'],
            children: [
                {
                    tagName: 'div',
                    classList: ['item-container', 'flex'],
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
            ]
        }
        let { root, stamp } = util.generateDOM(template);
        root.draggable = true;

        let that = this;
        root.addEventListener('click', function () {
            that.clearAllActive();
            that.active();
            store.dispatch(changeLayer(that.layer));
        })

        root.addEventListener('dragstart', function (e) {
            e.stopPropagation();
            Item.selected = this;
            Item.updateAllBoundary();

        });


        root.addEventListener('dragover', function (e) {
            if (Item.selected !== this) {
                console.log(that.boundary);
                // 插入当前元素的前面
                if (e.clientY <= that.boundary.y + that.boundary.height / 2) {
                    that.ref.classList.remove('border-bottom');
                    that.ref.classList.add('border-top');
                    
                } else {
                    // 插入当前元素的后面
                    that.ref.classList.remove('border-top');
                    that.ref.classList.add('border-bottom');
                }
            }
        });


        root.addEventListener('dragleave', function () {
            that.ref.classList.remove('border-top');
            that.ref.classList.remove('border-bottom');
        })

        root.addEventListener('drop', function () {
            that.ref.classList.remove('border-top');
            that.ref.classList.remove('border-bottom');
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

    remove() {
        this.ref.remove();
        console.log(Item.instance);
        let index = Item.instance.indexOf(this);
        if (index > -1) {
            Item.instance.splice(index, 1);
        }
        store.dispatch(drawLayer());
    }

    updateBoundary() {
        this.boundary = this.ref.getBoundingClientRect();
    }
}

Item.instance = [];
Item.selected = null;
Item.updateAllBoundary = function () {
    Item.instance.forEach(item => {
        item.updateBoundary();
    })
}

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
            template.push({
                component: new Item(store.state.layers[i])
            })
        }
        let root = util.generateDOM(template).root;
        let that = this;
        root.addEventListener('contextmenu', function (e) {
            that.contextMenu.show(e);
        })

        root.ondragover = function (e) {
            e.preventDefault();
            return false;
        }
        root.ondrop = function (e) {
            e.preventDefault();
            console.log('drop');
        }

        return root;
    }


    clearAllActive() {
        this.layerInfoItems.forEach(item => item.disable());
    }

    addLayer(layer) {
        let item = new Item(layer, this.clearAllActive, this.changeLayer);
        this.clearAllActive();
        item.active();
        this.layerInfoItems.push(item);
        this.ref.appendChild(item.ref);
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


}


export default util.getSingleton(LayerInfo);