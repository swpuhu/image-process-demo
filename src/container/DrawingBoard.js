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


class DrawingBoard extends Base {
    constructor() {
        super();
        this.ref = this.render();
        this.layers = [];
        this.offCanvas = new OffCanvas(300, 150);
        this.resizeBox = new ResizeBox(this.ref);
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
                        lastStep.offsetX += (e.movementX * store.state.zoom);
                        lastStep.offsetY -= (e.movementY * store.state.zoom);
                    } else {
                        let newStep = new MoveStep(StepType.MOVE, offsetX, offsetY);
                        layer.steps.push(newStep);
                    }

                    let currentLayer = that.layers.find(item => item.layer === layer);
                    let currentCanvas = currentLayer.canvas;
                    currentCanvas.render(currentLayer.layer);
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
        canvas.name = layer.name;
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
        this.offCanvas.changeZoom(store.state.width, store.state.height);
        this.ref.style.width = width + 'px';
        this.ref.style.height = height + 'px'
        this.layers.forEach(layer => {
            layer.canvas.ref.style.width = width + 'px';
            layer.canvas.ref.style.height = height + 'px';
        });
    }

    draw(layer) {
        let item = this.layers.find(item => item.layer === layer);
        if (item) {
            let canvas = item.canvas;
            canvas.render(layer);
        }
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
    
    async savePicture() {
        let images = [];
        for (let layer of this.layers) {
            let canvas = layer.canvas;
            
            canvas.render(layer.layer);
            let image = await this.loadImage(canvas.ref.toDataURL());
            images.push({
                texture: image,
                mode: BlendMode.NORMAL
            })
        }
        this.offCanvas.blendImages(images);
        let src = this.offCanvas.canvas.toDataURL();
        util.downloadBase64(src, 'test.png');
    }


}

export default util.getSingleton(DrawingBoard);