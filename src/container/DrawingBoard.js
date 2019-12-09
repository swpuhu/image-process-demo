import Base from '../util/Base';
import util from '../util/util';
import Canvas from '../components/Layer';
import store from '../store/index';

class DrawingBoard extends Base {
    constructor () {
        super();
        this.ref = this.render();
        this.layers = [];
    }


    render() {
        let template = {
            tagName: 'div',
            classList: ['drawing-board', 'absolute', 'vertical-align'],
        };
        return util.generateDOM(template).root;
    }

    addCanvas(layer) {        
        let width = ~~(store.state.width / store.state.zoom);
        let height = ~~(store.state.height / store.state.zoom);
        let canvas;
        if (store.state.width && store.state.height) {
            canvas = new Canvas(store.state.width, store.state.height);
        } else {
            canvas = new Canvas(layer.width, layer.height);
        }
        canvas.ref.style.width = width + 'px';
        canvas.ref.style.height = height + 'px';
        this.layers.push({
            layer: layer,
            canvas: canvas
        });
        canvas.render(layer);
        this.ref.appendChild(canvas.ref);
    } 

    deleteCanvas(layer) {
        let index = this.layers.findIndex(item => item.layer === layer);
        if (index > -1) {
            let deleteLayer = this.layers.splice(index, 1)[0];
            deleteLayer.canvas.remove();
        }
    }

    changeZoom(zoom) {
        
        let width = ~~(store.state.width / zoom);
        let height = ~~(store.state.height / zoom);
        this.ref.style.width = width + 'px';
        this.ref.style.height = height + 'px'
        this.layers.forEach(layer => {
            layer.canvas.ref.style.width = width + 'px';
            layer.canvas.ref.style.height = height + 'px';
        })
    }

    draw(layer) {
        let item = this.layers.find(item => item.layer = layer);
        if (item) {
            let canvas = item.canvas;
            canvas.render(layer);
        }
    }


}

export default util.getSingleton(DrawingBoard);