import Base from '../util/Base';
import util from '../util/util';
import Canvas from '../components/Layer';
import store from '../store/index';
import StepType from '../Enum/StepType';
import ToolType from '../Enum/ToolType';
import {MoveStep} from '../Enum/Step';

class DrawingBoard extends Base {
    constructor() {
        super();
        this.ref = this.render();
        this.layers = [];
    }


    render() {
        let template = {
            tagName: 'div',
            classList: ['drawing-board', 'absolute', 'vertical-align'],
        };
        let root = util.generateDOM(template).root;
        let that = this;
        let startX, startY;


        function mousedown(e) {
            startX = e.clientX;
            startY = e.clientY;
            document.addEventListener('mousemove', mousemove);
            document.addEventListener('mouseup', mouseup);
        }

        function mousemove(e) {
            let offsetX = e.clientX - startX;
            let offsetY = e.clientY - startY;
            let layers = store.state.currentLayer;
            if (store.state.currentTool === ToolType.MOVE) {
                for (let layer of layers) {
                    let lastStep = layer.steps[layer.steps.length - 1];
                    if (lastStep && lastStep.type === StepType.MOVE) {
                        lastStep.offsetX += e.movementX;
                        lastStep.offsetY -= e.movementY;
                    } else {
                        let newStep = new MoveStep(StepType.MOVE, offsetX, offsetY);
                        layer.steps.push(newStep);

                    }

                    let currentLayer = that.layers.find(item => item.layer === layer);
                    let currentCanvas = currentLayer.canvas;
                    currentCanvas.render(currentLayer.layer);
                }
            }
            
            


        }

        function mouseup() {
            document.removeEventListener('mousemove', mousemove);
            document.removeEventListener('mouseup', mouseup);
        }
        
        document.addEventListener('mousedown', mousedown);
        root.addEventListener('mousedonw', mousedown);
        return root;
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
            let deletedCanvas = this.layers.splice(index, 1)[0];
            deletedCanvas.canvas.remove();
            deletedCanvas.canvas = null;
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