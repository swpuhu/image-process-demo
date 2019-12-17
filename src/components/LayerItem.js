
import util from '../util/util';
import { changeLayer, drawLayer, insertBeforeLayer, insertAfterLayer } from '../store/action';
import store from '../store/index';

export default class LayerItem {
    constructor(layer, clearAllActive, changeLayer) {
        this.layer = layer;
        this.ref = this.render();
        this.isActive = false;
        this.clearAllActive = clearAllActive;
        this.changeLayer = changeLayer;
        this.boundary = null;
        LayerItem.instance.unshift(this);
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
            LayerItem.selected = that;
            LayerItem.updateAllBoundary();

        });


        root.ondragover = function () {
            return false;
        }

        root.addEventListener('dragover', function (e) {
            if (LayerItem.selected !== this) {
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
            return false;
        });


        root.addEventListener('dragleave', function () {
            that.ref.classList.remove('border-top');
            that.ref.classList.remove('border-bottom');
        })

        root.addEventListener('drop', function (e) {
            e.preventDefault();
            that.ref.classList.remove('border-top');
            that.ref.classList.remove('border-bottom');
            let parentElement = root.parentElement;
            if (LayerItem.selected !== this) {
                if (e.clientY <= that.boundary.y + that.boundary.height / 2) {
                    // 插入当前元素的前面
                    parentElement.insertBefore(LayerItem.selected.ref, that.ref);
                    store.dispatch(insertBeforeLayer(LayerItem.selected.layer, that.layer));
                } else {
                    // 插入当前元素的后面
                    parentElement.insertAfter(LayerItem.selected.ref, that.ref);
                    store.dispatch(insertAfterLayer(LayerItem.selected.layer, that.layer));
                }
                store.dispatch(drawLayer());
            }
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
        console.log(LayerItem.instance);
        let index = LayerItem.instance.indexOf(this);
        if (index > -1) {
            LayerItem.instance.splice(index, 1);
        }
        store.dispatch(drawLayer());
    }

    updateBoundary() {
        this.boundary = this.ref.getBoundingClientRect();
    }
}

LayerItem.instance = [];
LayerItem.selected = null;
LayerItem.updateAllBoundary = function () {
    LayerItem.instance.forEach(item => {
        item.updateBoundary();
    })
}