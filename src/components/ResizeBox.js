import util from '../util/util';
import Base from '../util/Base';
import store from '../store/index';
import glUtil from '../webgl/util';
import StepType from '../Enum/StepType';


export default class ResizeBox extends Base {
    constructor(container) {
        super();
        this.container = container;
        this.ref = this.render();
        this.isShow = false;
        this.layer = null;
    }

    render() {
        let template = {
            tagName: 'div',
            classList: ['resize-box'],
            children: [
                {
                    tagName: 'div',
                    classList: ['resize-lt', 'resize-point'],
                    ref: 'lt'
                },
                {
                    tagName: 'div',
                    classList: ['resize-t', 'resize-point'],
                    ref: 't'
                },
                {
                    tagName: 'div',
                    classList: ['resize-rt', 'resize-point'],
                    ref: 'rt'
                },
                {
                    tagName: 'div',
                    classList: ['resize-r', 'resize-point'],
                    ref: 'r'
                },
                {
                    tagName: 'div',
                    classList: ['resize-rd', 'resize-point'],
                    ref: 'rd'
                }, 
                {
                    tagName: 'div',
                    classList: ['resize-d', 'resize-point'],
                    ref: 'd'
                }, 
                {
                    tagName: 'div',
                    classList: ['resize-ld', 'resize-point'],
                    ref: 'ld'
                },
                {
                    tagName: 'div',
                    classList: ['resize-l', 'resize-point'],
                    ref: 'l'
                }, 
                {
                    tagName: 'div',
                    classList: ['resize-rotate', 'rotate-point'],
                    ref: 'rotate'
                },
                {
                    tagName: 'div',
                    classList: ['resize-t__cut', , 'cut-point'],
                    ref: 'tCut'
                },
                {
                    tagName: 'div',
                    classList: ['resize-d__cut', 'cut-point'],
                    ref: 'dCut'
                },
                {
                    tagName: 'div',
                    classList: ['resize-l__cut', 'cut-point'],
                    ref: 'lCut'
                }, 
                {
                    tagName: 'div',
                    classList: ['resize-r__cut', 'cut-point'],
                    ref: 'dCut'
                }
            ]
        }

        let {lt, t, rt, r, rd, d, ld, l, rotate, tCut, dCut, lCut, rCut, root} = util.generateDOM(template);
        let that = this;
        root.addEventListener('mousedown', function (e) {
            e.preventDefault();
            
        })
        return root;
    }

    show(layer) {
        this.layer = layer;
        this.updatePosition(layer);
        this.container.appendChild(this.ref);
        this.isShow = true;

    }

    hide() {
        this.ref.remove();
        this.isShow = false;
    }

    updatePosition(layer) {
        let width = store.state.width / store.state.zoom;
        let height = store.state.height / store.state.zoom;
        let currentLayer = layer;
        let x1 = currentLayer.boundary.minX * width;
        let x2 = currentLayer.boundary.maxX * width;
        let y1 = currentLayer.boundary.minY * height;
        let y2 = currentLayer.boundary.maxY * height;
        let centerX = (x1 + x2) / 2;
        let centerY = (y1 + y2) / 2;
        let lastStep = currentLayer.steps[currentLayer.steps.length - 1];
        if (lastStep.type === StepType.MOVE) {
            // let translateMat = glUtil.createTranslateMatrix(lastStep.offsetX, lastStep.offsetY, 0);
            // let scaleMat = glUtil.createScaleMatrix(lastStep.scaleX, lastStep.scaleY, 1, {x: centerX, y: centerY, z: 1});
            // let rotateMat = glUtil.createRotateMatrix({x: centerX, y: centerY, z: 1}, lastStep.rotate);
            // let mat = glUtil.multiply(scaleMat, translateMat);
            x1 = (x1 - centerX) * lastStep.scaleX + centerX + lastStep.offsetX / store.state.zoom;
            x2 = (x2 - centerX) * lastStep.scaleX + centerX + lastStep.offsetX / store.state.zoom;
            y1 = (y1 - centerY) * lastStep.scaleY + centerY - lastStep.offsetY / store.state.zoom;
            y2 = (y2 - centerY) * lastStep.scaleY + centerY - lastStep.offsetY / store.state.zoom;
        }
        

        this.ref.style.left = x1 + 'px';
        this.ref.style.top = y1 + 'px';
        this.ref.style.width = x2 - x1 + 'px';
        this.ref.style.height = y2 - y1 + 'px';
        
    }

}