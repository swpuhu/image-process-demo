import Base from '../util/Base';
import util from '../util/util';
import Canvas from '../components/Layer';
import store from '../store/index';
import StepType from '../Enum/StepType';
import ToolType from '../Enum/ToolType';
import {MoveStep} from '../Enum/Step';
import BlendMode from '../Enum/BlendMode';
import OffCanvas from '../webgl/OffCanvas';
import ResizeBox from '../components/ResizeBox';
import EditMode from '../Enum/EditMode';


class DrawingBoard extends Base {
    constructor() {
        super();
        this.ref = this.render();
        this.layers = [];
        this.resizeBox = new ResizeBox(this.ref);
        this.canvas = null;
        this.saveCanvas = new Canvas(300, 150);
        // document.body.appendChild(this.offCanvas.canvas);
    }


    render() {
        let template = {
            tagName: 'div',
            classList: ['drawing-board', 'absolute', 'vertical-align'],
        };
        let root = util.generateDOM(template).root;
        let that = this;
        let startX, startY;
        let currentWidth, currentHeight;

        function mousedown(e) {
            e.stopPropagation();
            if (store.state.editMode !== EditMode.MOVE) return;
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
                    let offsetX = e.movementX * store.state.zoom;
                    let offsetY = e.movementY * store.state.zoom;
                    layer.style.x1 += offsetX;
                    layer.style.x2 += offsetX;
                    layer.style.x3 += offsetX;
                    layer.style.x4 += offsetX;
                    layer.style.y1 += offsetY;
                    layer.style.y2 += offsetY;
                    layer.style.y3 += offsetY;
                    layer.style.y4 += offsetY;
                    that.draw();
                }
            }

            that.resizeBox.updatePosition(layers[0]);
            
            


        }

        function mouseup() {
            document.removeEventListener('mousemove', mousemove);
            document.removeEventListener('mouseup', mouseup);
        }
        
        root.addEventListener('mousedown', mousedown);
        return root;
    }

    init(width, height) {
        let _width = ~~(store.state.width / store.state.zoom);
        let _height = ~~(store.state.height / store.state.zoom);
        this.canvas = new Canvas(width, height);
        this.canvas.ref.style.width = _width + 'px';
        this.canvas.ref.style.height = _height + 'px';
        this.ref.appendChild(this.canvas.ref);
    }

    addCanvas(layer) {
        let canvas;
        let offCanvas;
        if (store.state.width && store.state.height) {
            canvas = new Canvas(store.state.width, store.state.height);
            offCanvas = new Canvas(store.state.width, store.state.height);
        } else {
            canvas = new Canvas(layer.width, layer.height);
            offCanvas = new Canvas(layer.width, layer.height);
        }
        this.layers.unshift({
            layer: layer,
            canvas: canvas,
            // offCanvas: offCanvas
        });
        this.draw();
        this.draw();
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
        });
        this.canvas.ref.style.width = width + 'px';
        this.canvas.ref.style.height = height + 'px';
    }

    draw() {
        this.canvas.render(this.layers);
    }


    loadImage(src) {
        return new Promise((resolve, reject) => {
            let image = new Image();
            image.onload = function () {
                resolve(image);
            };
            image.src = src;
        })
    }

    showResizeBox(layer) {
        this.resizeBox.show(layer);
    }
    
    hideResizeBox() {
        this.resizeBox.hide();
    }

    revertTransform(layer) {
        this.resizeBox.revert(layer);
        this.draw();
    }
    async savePicture(width = store.state.originWidth, height = store.state.originHeight) {
        this.layers.forEach(item => {
            item.offCanvas.viewport(0, 0, width, height);
        })
        this.saveCanvas.viewport(0, 0, width, height);
        this.saveCanvas.offRender(this.layers, {width, height});
        this.saveCanvas.offRender(this.layers, {width, height});
        let src = this.saveCanvas.ref.toDataURL();
        util.downloadBase64(src, 'test.png');
        this.draw();
    }


}

export default util.getSingleton(DrawingBoard);