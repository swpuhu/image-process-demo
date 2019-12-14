import util from '../util/util';
import Base from '../util/Base';
import store from '../store/index';
import glUtil from '../webgl/util';
import StepType from '../Enum/StepType';
import Vec2 from '../util/Vec2';
import {drawLayer} from '../store/action'

export default class ResizeBox extends Base {
    /**
     * 
     * @param {HTMLElement} container 
     */
    constructor(container) {
        super();
        this.container = container;
        this.ref = this.render();
        this.isShow = false;
        this.layer = null;
        this.position_x1 = 0;
        this.position_x2 = store.state.width / store.state.zoom;
        this.position_y1 = 0;
        this.position_y2 = store.state.height / store.state.zoom;
        this.rotate = 0;
    }


    init(layer = store.state.currentLayer[0]) {
        if (!layer) return;
        this.position_x1 = Math.min(layer.style.x1, layer.style.x2, layer.style.x3, layer.style.x4) / store.state.zoom;
        this.position_x2 = Math.max(layer.style.x1, layer.style.x2, layer.style.x3, layer.style.x4) / store.state.zoom;
        this.position_y1 = Math.min(layer.style.y1, layer.style.y2, layer.style.y3, layer.style.y4) / store.state.zoom;
        this.position_y2 = Math.max(layer.style.y1, layer.style.y2, layer.style.y3, layer.style.y4) / store.state.zoom;
        this.rotate = 0;
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
                    ref: 'rotateDOM'
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
                    ref: 'rCut'
                }
            ]
        }

        let {lt, t, rt, r, rd, d, ld, l, rotateDOM, tCut, dCut, lCut, rCut, root} = util.generateDOM(template);
        let that = this;
        let currentCtrl = null;
        let lastMoveStep = null;
        let currentRotate = 0;
        let startX, startY;
        let initWidth, initHeight;
        let initScaleX, initScaleY;
        let moveV, angleDiff, offsetX, offsetY, currentWidth, currentHeight;
        let left, right, top, bottom, domCenterX, domCenterY, startV, rotateV, initV;
        let x1, y1, x2, y2, x3, y3, x4, y4, rotate, centerX, centerY;

        lt.addEventListener('mousedown', mouseDown);
        rt.addEventListener('mousedown', mouseDown);
        ld.addEventListener('mousedown', mouseDown);
        rd.addEventListener('mousedown', mouseDown);
        t.addEventListener('mousedown', mouseDown);
        d.addEventListener('mousedown', mouseDown);
        l.addEventListener('mousedown', mouseDown);
        r.addEventListener('mousedown', mouseDown);
        rotateDOM.addEventListener('mousedown', mouseDown);
        tCut.addEventListener('mousedown', mouseDown);
        dCut.addEventListener('mousedown', mouseDown);
        lCut.addEventListener('mousedown', mouseDown);
        rCut.addEventListener('mousedown', mouseDown);

        

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
            } else if (this.classList.contains('resize-rotate')) {
                currentCtrl = rotateControl;
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

            let containerBounding = that.container.getBoundingClientRect();
            x1 = that.layer.style.x1; 
            x2 = that.layer.style.x2; 
            x3 = that.layer.style.x3;  
            x4 = that.layer.style.x4; 
            y1 = that.layer.style.y1; 
            y2 = that.layer.style.y2; 
            y3 = that.layer.style.y3; 
            y4 = that.layer.style.y4; 
            rotate = that.rotate;
            centerX = (x1 + x3) / 2;
            centerY = (y1 + y3) / 2;

            
            domCenterX = containerBounding.left + centerX / store.state.zoom;
            domCenterY = containerBounding.top + centerY / store.state.zoom;
            startV = new Vec2(e.clientX - domCenterX, domCenterY - e.clientY);
            initV = new Vec2(Math.cos(util.d2r(that.rotate)), Math.sin(util.d2r(that.rotate)));
            currentRotate = util.d2r(that.rotate);
            document.addEventListener('mousemove', move);
            document.addEventListener('mouseup', up);
        }
        


        function move(e) {
            moveV = new Vec2(e.clientX - startX, e.clientY - startY);
            // console.log(moveV);
            rotateV = new Vec2(e.clientX - domCenterX, domCenterY - e.clientY);
            angleDiff = startV.getAngle(rotateV);
            offsetX = moveV.m * Math.cos(moveV.angle - currentRotate);
            offsetY = moveV.m * Math.sin(moveV.angle - currentRotate);
            console.log(offsetX, offsetY);
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
            initV = new Vec2(x3 - x1, y3 - y1);
            that.layer.style.x1 = x1 + (moveV.m * store.state.zoom / initV.m * initV.x);
            that.layer.style.y1 = y1 + (moveV.m * store.state.zoom / initV.m * initV.y);

        }

        function rtControl(e) {
            rControl();
            tControl();
        }

        function ldControl (e) {
            lControl();
            dControl();
        }

        function rdControl(e) {
            rControl();
            dControl();
        }

        function lControl(e) {
            that.layer.style.x1 = x1 + (offsetX * store.state.zoom / initV.m * initV.x);
            that.layer.style.x4 = x4 + (offsetX * store.state.zoom / initV.m * initV.x);
            that.layer.style.y1 = y1 + (offsetX * store.state.zoom / initV.m * initV.y);
            that.layer.style.y4 = y4 + (offsetX * store.state.zoom / initV.m * initV.y);
        }

        function rControl(e) {
            that.layer.style.x2 = x2 + (offsetX * store.state.zoom / initV.m * initV.x);
            that.layer.style.x3 = x3 + (offsetX * store.state.zoom / initV.m * initV.x);
            that.layer.style.y2 = y2 + (offsetX * store.state.zoom / initV.m * initV.y);
            that.layer.style.y3 = y3 + (offsetX * store.state.zoom / initV.m * initV.y);
        }

        function tControl(e) {
            initV = new Vec2(Math.sin(util.d2r(that.rotate)), Math.cos(util.d2r(that.rotate)));
            that.layer.style.y1 = y1 + (offsetY * store.state.zoom / initV.m * initV.y);
            that.layer.style.y2 = y2 + (offsetY * store.state.zoom / initV.m * initV.y);
            that.layer.style.x1 = x1 - (offsetY * store.state.zoom / initV.m * initV.x);
            that.layer.style.x2 = x2 - (offsetY * store.state.zoom / initV.m * initV.x);
        }

        function dControl(e) {
            initV = new Vec2(Math.sin(util.d2r(that.rotate)), Math.cos(util.d2r(that.rotate)));
            that.layer.style.y3 = y3 + (offsetY * store.state.zoom / initV.m * initV.y);
            that.layer.style.y4 = y4 + (offsetY * store.state.zoom / initV.m * initV.y);
            that.layer.style.x3 = x3 - (offsetY * store.state.zoom / initV.m * initV.x);
            that.layer.style.x4 = x4 - (offsetY * store.state.zoom / initV.m * initV.x);
        }

        function rotateControl(e) {
            // console.log(x1, y1);
            [that.layer.style.x1, that.layer.style.y1] = glUtil.rotate({x: centerX, y: centerY}, x1, y1, util.r2d(angleDiff));
            [that.layer.style.x2, that.layer.style.y2] = glUtil.rotate({x: centerX, y: centerY}, x2, y2, util.r2d(angleDiff));
            [that.layer.style.x3, that.layer.style.y3] = glUtil.rotate({x: centerX, y: centerY}, x3, y3, util.r2d(angleDiff));
            [that.layer.style.x4, that.layer.style.y4] = glUtil.rotate({x: centerX, y: centerY}, x4, y4, util.r2d(angleDiff));
            that.rotate = rotate + util.r2d(angleDiff);
            // lastMoveStep.rotate = rotate - util.r2d(angleDiff);
            // console.log(lastMoveStep.rotate);
            // console.log(angleDiff);
        }

        
        
        return root;
    }

    show(layer) {
        this.layer = layer;
        this.init(layer);
        this.updatePosition(layer);
        this.container.appendChild(this.ref);
        this.isShow = true;

    }

    hide() {
        this.ref.remove();
        this.isShow = false;
    }

    updatePosition(layer) {
        let currentLayer = layer;
        let x1 = this.position_x1; 
        let x2 = this.position_x2; 
        let y1 = this.position_y1;
        let y2 = this.position_y2;
        let rotate = currentLayer.style.rotate;
        let lastStep = currentLayer.steps[currentLayer.steps.length - 1];
        if (lastStep.type === StepType.MOVE) {
            // let translateMat = glUtil.createTranslateMatrix(lastStep.offsetX, lastStep.offsetY, 0);
            // let scaleMat = glUtil.createScaleMatrix(lastStep.scaleX, lastStep.scaleY, 1, {x: centerX, y: centerY, z: 1});
            // let rotateMat = glUtil.createRotateMatrix({x: centerX, y: centerY, z: 1}, lastStep.rotate);
            // let mat = glUtil.multiply(scaleMat, translateMat);
            // x1 = (x1 - centerX) * lastStep.scaleX + centerX + lastStep.offsetX / store.state.zoom;
            // x2 = (x2 - centerX) * lastStep.scaleX + centerX + lastStep.offsetX / store.state.zoom;
            // y1 = (y1 - centerY) * lastStep.scaleY + centerY - lastStep.offsetY / store.state.zoom;
            // y2 = (y2 - centerY) * lastStep.scaleY + centerY - lastStep.offsetY / store.state.zoom;
            // rotate = lastStep.rotate;
        }
        

        this.ref.style.left = x1 + 'px';
        this.ref.style.top = y1 + 'px';
        this.ref.style.width = x2 - x1 + 'px';
        this.ref.style.height = y2 - y1 + 'px';
        this.ref.style.transform = `rotate(${this.rotate}deg)`;
        
    }

}