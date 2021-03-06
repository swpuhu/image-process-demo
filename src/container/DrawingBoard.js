import Base from '../util/Base';
import util from '../util/util';
import Canvas from '../components/Layer';
import store from '../store/index';
import ToolType from '../Enum/ToolType';
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

        function mousedown(e) {
            e.stopPropagation();
            if (store.state.editMode !== EditMode.MOVE) return;
            startX = e.clientX;
            startY = e.clientY;
            document.addEventListener('mousemove', mousemove);
            document.addEventListener('mouseup', mouseup);
        }

        function mousemove(e) {
            
            let layers = store.state.currentLayer;
            if (store.state.currentTool === ToolType.MOVE) {
                for (let layer of layers) {
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
        this.canvas.renderContext.addLayer(layer);
        this.saveCanvas.renderContext.addLayer(layer);
        this.layers.unshift({
            layer: layer,
        });
        this.draw();
    }

    deleteCanvas(layer) {
        let index = this.layers.findIndex(item => item.layer === layer);
        if (index > -1) {
            this.layers.splice(index, 1)[0];
        }
        this.canvas.renderContext.deleteLayer(layer);
        this.saveCanvas.renderContext.deleteLayer(layer);
    }

    changeZoom(zoom) {

        let width = ~~(store.state.width / zoom);
        let height = ~~(store.state.height / zoom);
        this.ref.style.width = width + 'px';
        this.ref.style.height = height + 'px';
        this.canvas.ref.style.width = width + 'px';
        this.canvas.ref.style.height = height + 'px';
    }

    draw() {
        this.canvas.render();
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
        this.saveCanvas.viewport(0, 0, width, height);
        this.saveCanvas.render({width, height});
        let src = this.saveCanvas.ref.toDataURL();
        util.downloadBase64(src, 'test.png');
        this.draw();
    }


}

export default util.getSingleton(DrawingBoard);