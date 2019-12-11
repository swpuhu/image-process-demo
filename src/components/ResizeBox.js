import util from '../util/util';
import Base from '../util/Base';
import store from '../store/index';
import glUtil from '../webgl/util';
import StepType from '../Enum/StepType';
import Vec2 from '../util/Vec2';
import {drawLayer} from '../store/action'

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
                    classList: ['resize-t__cut', 'cut-point'],
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
        let currentCtrl = null;
        let lastMoveStep = null;
        let currentRotate = 0;
        let startX, startY;
        let initWidth, initHeight;
        let initScaleX, initScaleY;
        let v, angleDiff, offsetX, offsetY, currentWidth, currentHeight;

        lt.addEventListener('mousedown', mouseDown);
        rt.addEventListener('mousedown', mouseDown);
        ld.addEventListener('mousedown', mouseDown);
        rd.addEventListener('mousedown', mouseDown);
        t.addEventListener('mousedown', mouseDown);
        d.addEventListener('mousedown', mouseDown);
        l.addEventListener('mousedown', mouseDown);
        r.addEventListener('mousedown', mouseDown);
        


        function move(e) {
            v = new Vec2(e.clientX - startX, e.clientY - startY);
            angleDiff = v.angle - currentRotate;
            offsetX = v.m * Math.cos(angleDiff);
            offsetY = v.m * Math.sin(angleDiff);

            currentCtrl && currentCtrl(e);

            lastMoveStep.scaleX = currentWidth / initWidth;
            lastMoveStep.scaleY = currentHeight / initHeight;
            store.dispatch(drawLayer(that.layer));
            that.updatePosition(that.layer);   
        }

        function up () {
            that.layer.currentWidth *= lastMoveStep.scaleX;
            that.layer.currentHeight *= lastMoveStep.scaleY;
            document.removeEventListener('mousemove', move);
            document.removeEventListener('mouseup', up);
        }

        function ltControl (e) {
            currentWidth = initWidth * initScaleX - offsetX * 2 * store.state.zoom;
            currentHeight = initHeight * initScaleY - offsetY * 2 * store.state.zoom;
        }

        function rtControl(e) {
            currentWidth = initWidth * initScaleX + offsetX * 2 * store.state.zoom;
            currentHeight = initHeight * initScaleY - offsetY * 2 * store.state.zoom;
        }

        function ldControl (e) {
            currentWidth = initWidth * initScaleX - offsetX * 2 * store.state.zoom;
            currentHeight = initHeight * initScaleY + offsetY * 2 * store.state.zoom;
        }

        function rdControl(e) {
            currentWidth = initWidth * initScaleX + offsetX * 2 * store.state.zoom;
            currentHeight = initHeight * initScaleY + offsetY * 2 * store.state.zoom;
        }

        function lControl(e) {
            currentWidth = initWidth * initScaleX - offsetX * 2 * store.state.zoom;
        }

        function rControl(e) {
            currentWidth = initWidth * initScaleX + offsetX * 2 * store.state.zoom;
        }

        function tControl(e) {
            currentHeight = initHeight * initScaleY - offsetY * 2 * store.state.zoom;
        }

        function dControl(e) {
            currentHeight = initHeight * initScaleY + offsetY * 2 * store.state.zoom;
        }

        function mouseDown(e) {
            e.stopPropagation();
            if (this.classList.contains('resize-lt')) {
                currentCtrl = ltControl;
            } else if (this.classList.contains('resize-rt')) {
                currentCtrl = rtControl;
            } else if (this.classList.contains('resize-ld')) {
                currentCtrl = ldControl;
            } else if (this.classList.contains('resize-rd')) {
                currentCtrl = rdControl;
            } else if (this.classList.contains('resize-t')) {
                currentCtrl = tControl;
            } else if (this.classList.contains('resize-d')) {
                currentCtrl = dControl;
            } else if (this.classList.contains('resize-l')) {
                currentCtrl = lControl;
            } else if (this.classList.contains('resize-r')) {
                currentCtrl = rControl;
            }
            
            lastMoveStep = that.layer.steps[that.layer.steps.length - 1];
            if (lastMoveStep) {
                currentRotate = lastMoveStep.rotate * Math.PI / 180;
                initWidth = that.layer.originWidth;
                initHeight = that.layer.originHeight;
                initScaleX = lastMoveStep.scaleX;
                initScaleY = lastMoveStep.scaleY;
            }
            startX = e.clientX;
            startY = e.clientY;
            document.addEventListener('mousemove', move);
            document.addEventListener('mouseup', up);
        }

        
        
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