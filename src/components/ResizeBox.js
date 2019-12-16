import util from '../util/util';
import Base from '../util/Base';
import store from '../store/index';
import glUtil from '../webgl/util';
import StepType from '../Enum/StepType';
import Vec2 from '../util/Vec2';
import { drawLayer } from '../store/action'

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
        this.x1, this.y1, this.x2, this.y2, this.x3, this.y3, this.x4, this.y4;
        this.rotate = 0;
    }


    init(layer = store.state.currentLayer[0]) {
        if (!layer) return;
        this.x1 = Math.min(layer.style.x1, layer.style.x2, layer.style.x3, layer.style.x4) / store.state.zoom;
        this.x2 = Math.max(layer.style.x1, layer.style.x2, layer.style.x3, layer.style.x4) / store.state.zoom;
        this.y1 = Math.min(layer.style.y1, layer.style.y2, layer.style.y3, layer.style.y4) / store.state.zoom;
        this.y4 = Math.max(layer.style.y1, layer.style.y2, layer.style.y3, layer.style.y4) / store.state.zoom;
        this.y2 = this.y1;
        this.y3 = this.y4;
        this.x3 = this.x2;
        this.x4 = this.x1;
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

        let { lt, t, rt, r, rd, d, ld, l, rotateDOM, tCut, dCut, lCut, rCut, root } = util.generateDOM(template);
        let that = this;
        let currentCtrl = null;
        let lastMoveStep = null;
        let startX, startY;
        let moveV, angleDiff, offsetX, offsetY, _offsetX, _offsetY, currentWidth, currentHeight;
        let left, right, top, bottom, domCenterX, domCenterY, startV, rotateV, initV;
        let x1, y1, x2, y2, x3, y3, x4, y4, rotate, centerX, centerY, width, height;
        let boxX1, boxY1, boxX2, boxY2, boxX3, boxY3, boxX4, boxY4, _rotate, boxCenterX, boxCenterY;
        let p1p4, p1p2;
        let _p1p4, _p1p2;

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
        root.addEventListener('mousedown', mouseDown);



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
            } else {
                currentCtrl = rootControl;
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

            boxX1 = that.x1;
            boxX2 = that.x2;
            boxX3 = that.x3;
            boxX4 = that.x4;
            boxY1 = that.y1;
            boxY2 = that.y2;
            boxY3 = that.y3;
            boxY4 = that.y4;
            p1p4 = new Vec2(x4 - x1, y4 - y1);
            p1p2 = new Vec2(x2 - x1, y2 - y1);
            
            _p1p4 = new Vec2(boxX4 - boxX1, boxY4 - boxY1);
            _p1p2 = new Vec2(boxX2 - boxX1, boxY2 - boxY1);
            width = glUtil.getDistance(x1, y1, x2, y2);
            height = glUtil.getDistance(x1, y1, x4, y4);

            rotate = that.layer.style.rotate;
            centerX = (x1 + x3) / 2;
            centerY = (y1 + y3) / 2;
            
            boxCenterX = (boxX1 + boxX3) / 2;
            boxCenterY = (boxY1 + boxY3) / 2;
            _rotate = that.rotate;


            domCenterX = containerBounding.left + centerX / store.state.zoom;
            domCenterY = containerBounding.top + centerY / store.state.zoom;
            startV = new Vec2(e.clientX - domCenterX, domCenterY - e.clientY);
            initV = new Vec2(Math.cos(util.d2r(that.rotate)), Math.sin(util.d2r(that.rotate)));;
            document.addEventListener('mousemove', move);
            document.addEventListener('mouseup', up);
        }



        function move(e) {
            moveV = new Vec2(e.clientX - startX, e.clientY - startY);
            rotateV = new Vec2(e.clientX - domCenterX, domCenterY - e.clientY);
            angleDiff = startV.getAngle(rotateV);
            
            offsetX = moveV.m * Math.cos(moveV.angle - util.d2r(_rotate));
            offsetY = moveV.m * Math.sin(moveV.angle - util.d2r(_rotate));
            
            _offsetX = moveV.m * Math.cos(moveV.angle - util.d2r(_rotate));
            _offsetY = moveV.m * Math.sin(moveV.angle - util.d2r(_rotate));

            currentCtrl && currentCtrl(e);
            store.dispatch(drawLayer(that.layer));
            that.updatePosition(that.layer);
        }

        function up() {
            document.removeEventListener('mousemove', move);
            document.removeEventListener('mouseup', up);
        }

        function rootControl () {
            that.layer.style.x1 = x1 + moveV.x * store.state.zoom;
            that.layer.style.x2 = x2 + moveV.x * store.state.zoom;
            that.layer.style.x3 = x3 + moveV.x * store.state.zoom;
            that.layer.style.x4 = x4 + moveV.x * store.state.zoom;
            that.layer.style.y1 = y1 + moveV.y * store.state.zoom;
            that.layer.style.y2 = y2 + moveV.y * store.state.zoom;
            that.layer.style.y3 = y3 + moveV.y * store.state.zoom;
            that.layer.style.y4 = y4 + moveV.y * store.state.zoom;

            
            that.x1 = boxX1 + moveV.x;
            that.x2 = boxX2 + moveV.x;
            that.x3 = boxX3 + moveV.x;
            that.x4 = boxX4 + moveV.x;
            that.y1 = boxY1 + moveV.y;
            that.y2 = boxY2 + moveV.y;
            that.y3 = boxY3 + moveV.y;
            that.y4 = boxY4 + moveV.y;
        }

        function ltControl(e) {
            let [_x1, _y1] = glUtil.rotate({x: centerX, y: centerY}, x1, y1, -_rotate);
            let [_x2, _y2] = glUtil.rotate({x: centerX, y: centerY}, x2, y2, -_rotate);
            let [_x3, _y3] = glUtil.rotate({x: centerX, y: centerY}, x3, y3, -_rotate);
            let [_x4, _y4] = glUtil.rotate({x: centerX, y: centerY}, x4, y4, -_rotate);
            let l = Math.min(_x1, _x2, _x3, _x4);
            let t = Math.min(_y1, _y2, _y3, _y4);
            let r = Math.max(_x1, _x2, _x3, _x4);
            let d = Math.max(_y1, _y2, _y3, _y4);
            let width = r - l;
            let height = d - t;

            let scaleX = (width - offsetX * store.state.zoom) / width;
            let scaleY = (height - offsetY * store.state.zoom) / height;

            [_x1, _y1] = glUtil.scale({x: r, y: d}, _x1, _y1, scaleX, scaleY);
            [_x2, _y2] = glUtil.scale({x: r, y: d}, _x2, _y2, scaleX, scaleY);
            [_x3, _y3] = glUtil.scale({x: r, y: d}, _x3, _y3, scaleX, scaleY);
            [_x4, _y4] = glUtil.scale({x: r, y: d}, _x4, _y4, scaleX, scaleY);

            [that.layer.style.x1, that.layer.style.y1] = glUtil.rotate({x: centerX, y: centerY}, _x1, _y1, _rotate);
            [that.layer.style.x2, that.layer.style.y2] = glUtil.rotate({x: centerX, y: centerY}, _x2, _y2, _rotate);
            [that.layer.style.x3, that.layer.style.y3] = glUtil.rotate({x: centerX, y: centerY}, _x3, _y3, _rotate);
            [that.layer.style.x4, that.layer.style.y4] = glUtil.rotate({x: centerX, y: centerY}, _x4, _y4, _rotate);
            
            let [_boxX1, _boxY1] = glUtil.rotate({x: boxCenterX, y: boxCenterY}, boxX1, boxY1, -_rotate);
            let [_boxX2, _boxY2] = glUtil.rotate({x: boxCenterX, y: boxCenterY}, boxX2, boxY2, -_rotate);
            let [_boxX3, _boxY3] = glUtil.rotate({x: boxCenterX, y: boxCenterY}, boxX3, boxY3, -_rotate);
            let [_boxX4, _boxY4] = glUtil.rotate({x: boxCenterX, y: boxCenterY}, boxX4, boxY4, -_rotate);
            let boxL = Math.min(_boxX1, _boxX2, _boxX3, _boxX4);
            let boxT = Math.min(_boxY1, _boxY2, _boxY3, _boxY4);
            let boxR = Math.max(_boxX1, _boxX2, _boxX3, _boxX4);
            let boxD = Math.max(_boxY1, _boxY2, _boxY3, _boxY4);
            let boxWidth = boxR - boxL;
            let boxHeight = boxD - boxT;
            let boxScaleX = (boxWidth - offsetX) / boxWidth;
            let boxScaleY = (boxHeight - offsetY) / boxHeight;

            [_boxX1, _boxY1] = glUtil.scale({x: boxR, y: boxD}, _boxX1, _boxY1, boxScaleX, boxScaleY);
            [_boxX2, _boxY2] = glUtil.scale({x: boxR, y: boxD}, _boxX2, _boxY2, boxScaleX, boxScaleY);
            [_boxX3, _boxY3] = glUtil.scale({x: boxR, y: boxD}, _boxX3, _boxY3, boxScaleX, boxScaleY);
            [_boxX4, _boxY4] = glUtil.scale({x: boxR, y: boxD}, _boxX4, _boxY4, boxScaleX, boxScaleY);

            [that.x1, that.y1] = glUtil.rotate({x: boxCenterX, y: boxCenterY}, _boxX1, _boxY1, _rotate);
            [that.x2, that.y2] = glUtil.rotate({x: boxCenterX, y: boxCenterY}, _boxX2, _boxY2, _rotate);
            [that.x3, that.y3] = glUtil.rotate({x: boxCenterX, y: boxCenterY}, _boxX3, _boxY3, _rotate);
            [that.x4, that.y4] = glUtil.rotate({x: boxCenterX, y: boxCenterY}, _boxX4, _boxY4, _rotate);
        }
        function rtControl(e) {
            let [_x1, _y1] = glUtil.rotate({x: centerX, y: centerY}, x1, y1, -_rotate);
            let [_x2, _y2] = glUtil.rotate({x: centerX, y: centerY}, x2, y2, -_rotate);
            let [_x3, _y3] = glUtil.rotate({x: centerX, y: centerY}, x3, y3, -_rotate);
            let [_x4, _y4] = glUtil.rotate({x: centerX, y: centerY}, x4, y4, -_rotate);
            let l = Math.min(_x1, _x2, _x3, _x4);
            let t = Math.min(_y1, _y2, _y3, _y4);
            let r = Math.max(_x1, _x2, _x3, _x4);
            let d = Math.max(_y1, _y2, _y3, _y4);
            let width = r - l;
            let height = d - t;

            let scaleX = (width + offsetX * store.state.zoom) / width;
            let scaleY = (height - offsetY * store.state.zoom) / height;

            [_x1, _y1] = glUtil.scale({x: l, y: d}, _x1, _y1, scaleX, scaleY);
            [_x2, _y2] = glUtil.scale({x: l, y: d}, _x2, _y2, scaleX, scaleY);
            [_x3, _y3] = glUtil.scale({x: l, y: d}, _x3, _y3, scaleX, scaleY);
            [_x4, _y4] = glUtil.scale({x: l, y: d}, _x4, _y4, scaleX, scaleY);

            [that.layer.style.x1, that.layer.style.y1] = glUtil.rotate({x: centerX, y: centerY}, _x1, _y1, _rotate);
            [that.layer.style.x2, that.layer.style.y2] = glUtil.rotate({x: centerX, y: centerY}, _x2, _y2, _rotate);
            [that.layer.style.x3, that.layer.style.y3] = glUtil.rotate({x: centerX, y: centerY}, _x3, _y3, _rotate);
            [that.layer.style.x4, that.layer.style.y4] = glUtil.rotate({x: centerX, y: centerY}, _x4, _y4, _rotate);
            
            let [_boxX1, _boxY1] = glUtil.rotate({x: boxCenterX, y: boxCenterY}, boxX1, boxY1, -_rotate);
            let [_boxX2, _boxY2] = glUtil.rotate({x: boxCenterX, y: boxCenterY}, boxX2, boxY2, -_rotate);
            let [_boxX3, _boxY3] = glUtil.rotate({x: boxCenterX, y: boxCenterY}, boxX3, boxY3, -_rotate);
            let [_boxX4, _boxY4] = glUtil.rotate({x: boxCenterX, y: boxCenterY}, boxX4, boxY4, -_rotate);
            let boxL = Math.min(_boxX1, _boxX2, _boxX3, _boxX4);
            let boxT = Math.min(_boxY1, _boxY2, _boxY3, _boxY4);
            let boxR = Math.max(_boxX1, _boxX2, _boxX3, _boxX4);
            let boxD = Math.max(_boxY1, _boxY2, _boxY3, _boxY4);
            let boxWidth = boxR - boxL;
            let boxHeight = boxD - boxT;
            let boxScaleX = (boxWidth + offsetX) / boxWidth;
            let boxScaleY = (boxHeight - offsetY) / boxHeight;

            [_boxX1, _boxY1] = glUtil.scale({x: boxL, y: boxD}, _boxX1, _boxY1, boxScaleX, boxScaleY);
            [_boxX2, _boxY2] = glUtil.scale({x: boxL, y: boxD}, _boxX2, _boxY2, boxScaleX, boxScaleY);
            [_boxX3, _boxY3] = glUtil.scale({x: boxL, y: boxD}, _boxX3, _boxY3, boxScaleX, boxScaleY);
            [_boxX4, _boxY4] = glUtil.scale({x: boxL, y: boxD}, _boxX4, _boxY4, boxScaleX, boxScaleY);

            [that.x1, that.y1] = glUtil.rotate({x: boxCenterX, y: boxCenterY}, _boxX1, _boxY1, _rotate);
            [that.x2, that.y2] = glUtil.rotate({x: boxCenterX, y: boxCenterY}, _boxX2, _boxY2, _rotate);
            [that.x3, that.y3] = glUtil.rotate({x: boxCenterX, y: boxCenterY}, _boxX3, _boxY3, _rotate);
            [that.x4, that.y4] = glUtil.rotate({x: boxCenterX, y: boxCenterY}, _boxX4, _boxY4, _rotate);
        }

        function ldControl(e) {
            let [_x1, _y1] = glUtil.rotate({x: centerX, y: centerY}, x1, y1, -_rotate);
            let [_x2, _y2] = glUtil.rotate({x: centerX, y: centerY}, x2, y2, -_rotate);
            let [_x3, _y3] = glUtil.rotate({x: centerX, y: centerY}, x3, y3, -_rotate);
            let [_x4, _y4] = glUtil.rotate({x: centerX, y: centerY}, x4, y4, -_rotate);
            let l = Math.min(_x1, _x2, _x3, _x4);
            let t = Math.min(_y1, _y2, _y3, _y4);
            let r = Math.max(_x1, _x2, _x3, _x4);
            let d = Math.max(_y1, _y2, _y3, _y4);
            let width = r - l;
            let height = d - t;

            let scaleX = (width - offsetX * store.state.zoom) / width;
            let scaleY = (height + offsetY * store.state.zoom) / height;

            [_x1, _y1] = glUtil.scale({x: r, y: t}, _x1, _y1, scaleX, scaleY);
            [_x2, _y2] = glUtil.scale({x: r, y: t}, _x2, _y2, scaleX, scaleY);
            [_x3, _y3] = glUtil.scale({x: r, y: t}, _x3, _y3, scaleX, scaleY);
            [_x4, _y4] = glUtil.scale({x: r, y: t}, _x4, _y4, scaleX, scaleY);

            [that.layer.style.x1, that.layer.style.y1] = glUtil.rotate({x: centerX, y: centerY}, _x1, _y1, _rotate);
            [that.layer.style.x2, that.layer.style.y2] = glUtil.rotate({x: centerX, y: centerY}, _x2, _y2, _rotate);
            [that.layer.style.x3, that.layer.style.y3] = glUtil.rotate({x: centerX, y: centerY}, _x3, _y3, _rotate);
            [that.layer.style.x4, that.layer.style.y4] = glUtil.rotate({x: centerX, y: centerY}, _x4, _y4, _rotate);
            
            let [_boxX1, _boxY1] = glUtil.rotate({x: boxCenterX, y: boxCenterY}, boxX1, boxY1, -_rotate);
            let [_boxX2, _boxY2] = glUtil.rotate({x: boxCenterX, y: boxCenterY}, boxX2, boxY2, -_rotate);
            let [_boxX3, _boxY3] = glUtil.rotate({x: boxCenterX, y: boxCenterY}, boxX3, boxY3, -_rotate);
            let [_boxX4, _boxY4] = glUtil.rotate({x: boxCenterX, y: boxCenterY}, boxX4, boxY4, -_rotate);
            let boxL = Math.min(_boxX1, _boxX2, _boxX3, _boxX4);
            let boxT = Math.min(_boxY1, _boxY2, _boxY3, _boxY4);
            let boxR = Math.max(_boxX1, _boxX2, _boxX3, _boxX4);
            let boxD = Math.max(_boxY1, _boxY2, _boxY3, _boxY4);
            let boxWidth = boxR - boxL;
            let boxHeight = boxD - boxT;
            let boxScaleX = (boxWidth - offsetX) / boxWidth;
            let boxScaleY = (boxHeight + offsetY) / boxHeight;

            [_boxX1, _boxY1] = glUtil.scale({x: boxR, y: boxT}, _boxX1, _boxY1, boxScaleX, boxScaleY);
            [_boxX2, _boxY2] = glUtil.scale({x: boxR, y: boxT}, _boxX2, _boxY2, boxScaleX, boxScaleY);
            [_boxX3, _boxY3] = glUtil.scale({x: boxR, y: boxT}, _boxX3, _boxY3, boxScaleX, boxScaleY);
            [_boxX4, _boxY4] = glUtil.scale({x: boxR, y: boxT}, _boxX4, _boxY4, boxScaleX, boxScaleY);

            [that.x1, that.y1] = glUtil.rotate({x: boxCenterX, y: boxCenterY}, _boxX1, _boxY1, _rotate);
            [that.x2, that.y2] = glUtil.rotate({x: boxCenterX, y: boxCenterY}, _boxX2, _boxY2, _rotate);
            [that.x3, that.y3] = glUtil.rotate({x: boxCenterX, y: boxCenterY}, _boxX3, _boxY3, _rotate);
            [that.x4, that.y4] = glUtil.rotate({x: boxCenterX, y: boxCenterY}, _boxX4, _boxY4, _rotate);
        }

        function rdControl(e) {
            let [_x1, _y1] = glUtil.rotate({x: centerX, y: centerY}, x1, y1, -_rotate);
            let [_x2, _y2] = glUtil.rotate({x: centerX, y: centerY}, x2, y2, -_rotate);
            let [_x3, _y3] = glUtil.rotate({x: centerX, y: centerY}, x3, y3, -_rotate);
            let [_x4, _y4] = glUtil.rotate({x: centerX, y: centerY}, x4, y4, -_rotate);
            let l = Math.min(_x1, _x2, _x3, _x4);
            let t = Math.min(_y1, _y2, _y3, _y4);
            let r = Math.max(_x1, _x2, _x3, _x4);
            let d = Math.max(_y1, _y2, _y3, _y4);
            let width = r - l;
            let height = d - t;

            let scaleX = (width + offsetX * store.state.zoom) / width;
            let scaleY = (height + offsetY * store.state.zoom) / height;

            [_x1, _y1] = glUtil.scale({x: l, y: t}, _x1, _y1, scaleX, scaleY);
            [_x2, _y2] = glUtil.scale({x: l, y: t}, _x2, _y2, scaleX, scaleY);
            [_x3, _y3] = glUtil.scale({x: l, y: t}, _x3, _y3, scaleX, scaleY);
            [_x4, _y4] = glUtil.scale({x: l, y: t}, _x4, _y4, scaleX, scaleY);

            [that.layer.style.x1, that.layer.style.y1] = glUtil.rotate({x: centerX, y: centerY}, _x1, _y1, _rotate);
            [that.layer.style.x2, that.layer.style.y2] = glUtil.rotate({x: centerX, y: centerY}, _x2, _y2, _rotate);
            [that.layer.style.x3, that.layer.style.y3] = glUtil.rotate({x: centerX, y: centerY}, _x3, _y3, _rotate);
            [that.layer.style.x4, that.layer.style.y4] = glUtil.rotate({x: centerX, y: centerY}, _x4, _y4, _rotate);
            
            let [_boxX1, _boxY1] = glUtil.rotate({x: boxCenterX, y: boxCenterY}, boxX1, boxY1, -_rotate);
            let [_boxX2, _boxY2] = glUtil.rotate({x: boxCenterX, y: boxCenterY}, boxX2, boxY2, -_rotate);
            let [_boxX3, _boxY3] = glUtil.rotate({x: boxCenterX, y: boxCenterY}, boxX3, boxY3, -_rotate);
            let [_boxX4, _boxY4] = glUtil.rotate({x: boxCenterX, y: boxCenterY}, boxX4, boxY4, -_rotate);
            let boxL = Math.min(_boxX1, _boxX2, _boxX3, _boxX4);
            let boxT = Math.min(_boxY1, _boxY2, _boxY3, _boxY4);
            let boxR = Math.max(_boxX1, _boxX2, _boxX3, _boxX4);
            let boxD = Math.max(_boxY1, _boxY2, _boxY3, _boxY4);
            let boxWidth = boxR - boxL;
            let boxHeight = boxD - boxT;
            let boxScaleX = (boxWidth + offsetX) / boxWidth;
            let boxScaleY = (boxHeight + offsetY) / boxHeight;

            [_boxX1, _boxY1] = glUtil.scale({x: boxL, y: boxT}, _boxX1, _boxY1, boxScaleX, boxScaleY);
            [_boxX2, _boxY2] = glUtil.scale({x: boxL, y: boxT}, _boxX2, _boxY2, boxScaleX, boxScaleY);
            [_boxX3, _boxY3] = glUtil.scale({x: boxL, y: boxT}, _boxX3, _boxY3, boxScaleX, boxScaleY);
            [_boxX4, _boxY4] = glUtil.scale({x: boxL, y: boxT}, _boxX4, _boxY4, boxScaleX, boxScaleY);

            [that.x1, that.y1] = glUtil.rotate({x: boxCenterX, y: boxCenterY}, _boxX1, _boxY1, _rotate);
            [that.x2, that.y2] = glUtil.rotate({x: boxCenterX, y: boxCenterY}, _boxX2, _boxY2, _rotate);
            [that.x3, that.y3] = glUtil.rotate({x: boxCenterX, y: boxCenterY}, _boxX3, _boxY3, _rotate);
            [that.x4, that.y4] = glUtil.rotate({x: boxCenterX, y: boxCenterY}, _boxX4, _boxY4, _rotate);
        }

        function lControl(e) {
            let [_x1, _y1] = glUtil.rotate({x: centerX, y: centerY}, x1, y1, -_rotate);
            let [_x2, _y2] = glUtil.rotate({x: centerX, y: centerY}, x2, y2, -_rotate);
            let [_x3, _y3] = glUtil.rotate({x: centerX, y: centerY}, x3, y3, -_rotate);
            let [_x4, _y4] = glUtil.rotate({x: centerX, y: centerY}, x4, y4, -_rotate);
            let l = Math.min(_x1, _x2, _x3, _x4);
            let t = Math.min(_y1, _y2, _y3, _y4);
            let r = Math.max(_x1, _x2, _x3, _x4);
            let d = Math.max(_y1, _y2, _y3, _y4);
            let width = r - l;
            let height = d - t;
            let scaleX = (width - offsetX * store.state.zoom) / width;
            
            [_x1, _y1] = glUtil.scale({x: r, y: t}, _x1, _y1, scaleX, 1);
            [_x2, _y2] = glUtil.scale({x: r, y: t}, _x2, _y2, scaleX, 1);
            [_x3, _y3] = glUtil.scale({x: r, y: t}, _x3, _y3, scaleX, 1);
            [_x4, _y4] = glUtil.scale({x: r, y: t}, _x4, _y4, scaleX, 1);

            [that.layer.style.x1, that.layer.style.y1] = glUtil.rotate({x: centerX, y: centerY}, _x1, _y1, _rotate);
            [that.layer.style.x2, that.layer.style.y2] = glUtil.rotate({x: centerX, y: centerY}, _x2, _y2, _rotate);
            [that.layer.style.x3, that.layer.style.y3] = glUtil.rotate({x: centerX, y: centerY}, _x3, _y3, _rotate);
            [that.layer.style.x4, that.layer.style.y4] = glUtil.rotate({x: centerX, y: centerY}, _x4, _y4, _rotate);

            let [_boxX1, _boxY1] = glUtil.rotate({x: boxCenterX, y: boxCenterY}, boxX1, boxY1, -_rotate);
            let [_boxX2, _boxY2] = glUtil.rotate({x: boxCenterX, y: boxCenterY}, boxX2, boxY2, -_rotate);
            let [_boxX3, _boxY3] = glUtil.rotate({x: boxCenterX, y: boxCenterY}, boxX3, boxY3, -_rotate);
            let [_boxX4, _boxY4] = glUtil.rotate({x: boxCenterX, y: boxCenterY}, boxX4, boxY4, -_rotate);
            
            
            let boxL = Math.min(_boxX1, _boxX2, _boxX3, _boxX4);
            let boxT = Math.min(_boxY1, _boxY2, _boxY3, _boxY4);
            let boxR = Math.max(_boxX1, _boxX2, _boxX3, _boxX4);
            let boxD = Math.max(_boxY1, _boxY2, _boxY3, _boxY4);
            let boxWidth = boxR - boxL;
            let boxHeight = boxD - boxT;
            let boxScaleX = (boxWidth - offsetX) / boxWidth;

            [_boxX1, _boxY1] = glUtil.scale({x: boxR, y: boxD}, _boxX1, _boxY1, boxScaleX, 1);
            [_boxX2, _boxY2] = glUtil.scale({x: boxR, y: boxD}, _boxX2, _boxY2, boxScaleX, 1);
            [_boxX3, _boxY3] = glUtil.scale({x: boxR, y: boxD}, _boxX3, _boxY3, boxScaleX, 1);
            [_boxX4, _boxY4] = glUtil.scale({x: boxR, y: boxD}, _boxX4, _boxY4, boxScaleX, 1);

            [that.x1, that.y1] = glUtil.rotate({x: boxCenterX, y: boxCenterY}, _boxX1, _boxY1, _rotate);
            [that.x2, that.y2] = glUtil.rotate({x: boxCenterX, y: boxCenterY}, _boxX2, _boxY2, _rotate);
            [that.x3, that.y3] = glUtil.rotate({x: boxCenterX, y: boxCenterY}, _boxX3, _boxY3, _rotate);
            [that.x4, that.y4] = glUtil.rotate({x: boxCenterX, y: boxCenterY}, _boxX4, _boxY4, _rotate);
        }

        function rControl(e) {
            let [_x1, _y1] = glUtil.rotate({x: centerX, y: centerY}, x1, y1, -_rotate);
            let [_x2, _y2] = glUtil.rotate({x: centerX, y: centerY}, x2, y2, -_rotate);
            let [_x3, _y3] = glUtil.rotate({x: centerX, y: centerY}, x3, y3, -_rotate);
            let [_x4, _y4] = glUtil.rotate({x: centerX, y: centerY}, x4, y4, -_rotate);
            let l = Math.min(_x1, _x2, _x3, _x4);
            let t = Math.min(_y1, _y2, _y3, _y4);
            let r = Math.max(_x1, _x2, _x3, _x4);
            let d = Math.max(_y1, _y2, _y3, _y4);
            let width = r - l;
            let height = d - t;
            let scaleX = (width + offsetX * store.state.zoom) / width;
            
            [_x1, _y1] = glUtil.scale({x: l, y: t}, _x1, _y1, scaleX, 1);
            [_x2, _y2] = glUtil.scale({x: l, y: t}, _x2, _y2, scaleX, 1);
            [_x3, _y3] = glUtil.scale({x: l, y: t}, _x3, _y3, scaleX, 1);
            [_x4, _y4] = glUtil.scale({x: l, y: t}, _x4, _y4, scaleX, 1);

            [that.layer.style.x1, that.layer.style.y1] = glUtil.rotate({x: centerX, y: centerY}, _x1, _y1, _rotate);
            [that.layer.style.x2, that.layer.style.y2] = glUtil.rotate({x: centerX, y: centerY}, _x2, _y2, _rotate);
            [that.layer.style.x3, that.layer.style.y3] = glUtil.rotate({x: centerX, y: centerY}, _x3, _y3, _rotate);
            [that.layer.style.x4, that.layer.style.y4] = glUtil.rotate({x: centerX, y: centerY}, _x4, _y4, _rotate);

            let [_boxX1, _boxY1] = glUtil.rotate({x: boxCenterX, y: boxCenterY}, boxX1, boxY1, -_rotate);
            let [_boxX2, _boxY2] = glUtil.rotate({x: boxCenterX, y: boxCenterY}, boxX2, boxY2, -_rotate);
            let [_boxX3, _boxY3] = glUtil.rotate({x: boxCenterX, y: boxCenterY}, boxX3, boxY3, -_rotate);
            let [_boxX4, _boxY4] = glUtil.rotate({x: boxCenterX, y: boxCenterY}, boxX4, boxY4, -_rotate);
            
            
            let boxL = Math.min(_boxX1, _boxX2, _boxX3, _boxX4);
            let boxT = Math.min(_boxY1, _boxY2, _boxY3, _boxY4);
            let boxR = Math.max(_boxX1, _boxX2, _boxX3, _boxX4);
            let boxD = Math.max(_boxY1, _boxY2, _boxY3, _boxY4);
            let boxWidth = boxR - boxL;
            let boxHeight = boxD - boxT;
            let boxScaleX = (boxWidth + offsetX) / boxWidth;

            [_boxX1, _boxY1] = glUtil.scale({x: boxL, y: boxD}, _boxX1, _boxY1, boxScaleX, 1);
            [_boxX2, _boxY2] = glUtil.scale({x: boxL, y: boxD}, _boxX2, _boxY2, boxScaleX, 1);
            [_boxX3, _boxY3] = glUtil.scale({x: boxL, y: boxD}, _boxX3, _boxY3, boxScaleX, 1);
            [_boxX4, _boxY4] = glUtil.scale({x: boxL, y: boxD}, _boxX4, _boxY4, boxScaleX, 1);

            [that.x1, that.y1] = glUtil.rotate({x: boxCenterX, y: boxCenterY}, _boxX1, _boxY1, _rotate);
            [that.x2, that.y2] = glUtil.rotate({x: boxCenterX, y: boxCenterY}, _boxX2, _boxY2, _rotate);
            [that.x3, that.y3] = glUtil.rotate({x: boxCenterX, y: boxCenterY}, _boxX3, _boxY3, _rotate);
            [that.x4, that.y4] = glUtil.rotate({x: boxCenterX, y: boxCenterY}, _boxX4, _boxY4, _rotate);
        }

        function tControl(e) {
            let [_x1, _y1] = glUtil.rotate({x: centerX, y: centerY}, x1, y1, -_rotate);
            let [_x2, _y2] = glUtil.rotate({x: centerX, y: centerY}, x2, y2, -_rotate);
            let [_x3, _y3] = glUtil.rotate({x: centerX, y: centerY}, x3, y3, -_rotate);
            let [_x4, _y4] = glUtil.rotate({x: centerX, y: centerY}, x4, y4, -_rotate);
            let l = Math.min(_x1, _x2, _x3, _x4);
            let t = Math.min(_y1, _y2, _y3, _y4);
            let r = Math.max(_x1, _x2, _x3, _x4);
            let d = Math.max(_y1, _y2, _y3, _y4);
            let width = l - r;
            let height = d - t;
            let scaleY = (height - offsetY * store.state.zoom) / height;

            [_x1, _y1] = glUtil.scale({x: l, y: d}, _x1, _y1, 1, scaleY);
            [_x2, _y2] = glUtil.scale({x: l, y: d}, _x2, _y2, 1, scaleY);
            [_x3, _y3] = glUtil.scale({x: l, y: d}, _x3, _y3, 1, scaleY);
            [_x4, _y4] = glUtil.scale({x: l, y: d}, _x4, _y4, 1, scaleY);

            [that.layer.style.x1, that.layer.style.y1] = glUtil.rotate({x: centerX, y: centerY}, _x1, _y1, _rotate);
            [that.layer.style.x2, that.layer.style.y2] = glUtil.rotate({x: centerX, y: centerY}, _x2, _y2, _rotate);
            [that.layer.style.x3, that.layer.style.y3] = glUtil.rotate({x: centerX, y: centerY}, _x3, _y3, _rotate);
            [that.layer.style.x4, that.layer.style.y4] = glUtil.rotate({x: centerX, y: centerY}, _x4, _y4, _rotate);

            
            
            let [_boxX1, _boxY1] = glUtil.rotate({x: boxCenterX, y: boxCenterY}, boxX1, boxY1, -_rotate);
            let [_boxX2, _boxY2] = glUtil.rotate({x: boxCenterX, y: boxCenterY}, boxX2, boxY2, -_rotate);
            let [_boxX3, _boxY3] = glUtil.rotate({x: boxCenterX, y: boxCenterY}, boxX3, boxY3, -_rotate);
            let [_boxX4, _boxY4] = glUtil.rotate({x: boxCenterX, y: boxCenterY}, boxX4, boxY4, -_rotate);
            
            
            let boxL = Math.min(_boxX1, _boxX2, _boxX3, _boxX4);
            let boxT = Math.min(_boxY1, _boxY2, _boxY3, _boxY4);
            let boxR = Math.max(_boxX1, _boxX2, _boxX3, _boxX4);
            let boxD = Math.max(_boxY1, _boxY2, _boxY3, _boxY4);
            let boxWidth = boxR - boxL;
            let boxHeight = boxD - boxT;
            let boxScaleY = (boxHeight - offsetY) / boxHeight;

            [_boxX1, _boxY1] = glUtil.scale({x: boxL, y: boxD}, _boxX1, _boxY1, 1, boxScaleY);
            [_boxX2, _boxY2] = glUtil.scale({x: boxL, y: boxD}, _boxX2, _boxY2, 1, boxScaleY);
            [_boxX3, _boxY3] = glUtil.scale({x: boxL, y: boxD}, _boxX3, _boxY3, 1, boxScaleY);
            [_boxX4, _boxY4] = glUtil.scale({x: boxL, y: boxD}, _boxX4, _boxY4, 1, boxScaleY);

            [that.x1, that.y1] = glUtil.rotate({x: boxCenterX, y: boxCenterY}, _boxX1, _boxY1, _rotate);
            [that.x2, that.y2] = glUtil.rotate({x: boxCenterX, y: boxCenterY}, _boxX2, _boxY2, _rotate);
            [that.x3, that.y3] = glUtil.rotate({x: boxCenterX, y: boxCenterY}, _boxX3, _boxY3, _rotate);
            [that.x4, that.y4] = glUtil.rotate({x: boxCenterX, y: boxCenterY}, _boxX4, _boxY4, _rotate);
        }

        function dControl(e) {
            let [_x1, _y1] = glUtil.rotate({x: centerX, y: centerY}, x1, y1, -_rotate);
            let [_x2, _y2] = glUtil.rotate({x: centerX, y: centerY}, x2, y2, -_rotate);
            let [_x3, _y3] = glUtil.rotate({x: centerX, y: centerY}, x3, y3, -_rotate);
            let [_x4, _y4] = glUtil.rotate({x: centerX, y: centerY}, x4, y4, -_rotate);
            let l = Math.min(_x1, _x2, _x3, _x4);
            let t = Math.min(_y1, _y2, _y3, _y4);
            let r = Math.max(_x1, _x2, _x3, _x4);
            let d = Math.max(_y1, _y2, _y3, _y4);
            let width = r - l;
            let height = d - t;
            let scaleY = (height + offsetY * store.state.zoom) / height;
            
            [_x1, _y1] = glUtil.scale({x: l, y: t}, _x1, _y1, 1, scaleY);
            [_x2, _y2] = glUtil.scale({x: l, y: t}, _x2, _y2, 1, scaleY);
            [_x3, _y3] = glUtil.scale({x: l, y: t}, _x3, _y3, 1, scaleY);
            [_x4, _y4] = glUtil.scale({x: l, y: t}, _x4, _y4, 1, scaleY);

            [that.layer.style.x1, that.layer.style.y1] = glUtil.rotate({x: centerX, y: centerY}, _x1, _y1, _rotate);
            [that.layer.style.x2, that.layer.style.y2] = glUtil.rotate({x: centerX, y: centerY}, _x2, _y2, _rotate);
            [that.layer.style.x3, that.layer.style.y3] = glUtil.rotate({x: centerX, y: centerY}, _x3, _y3, _rotate);
            [that.layer.style.x4, that.layer.style.y4] = glUtil.rotate({x: centerX, y: centerY}, _x4, _y4, _rotate);

            
            let [_boxX1, _boxY1] = glUtil.rotate({x: boxCenterX, y: boxCenterY}, boxX1, boxY1, -_rotate);
            let [_boxX2, _boxY2] = glUtil.rotate({x: boxCenterX, y: boxCenterY}, boxX2, boxY2, -_rotate);
            let [_boxX3, _boxY3] = glUtil.rotate({x: boxCenterX, y: boxCenterY}, boxX3, boxY3, -_rotate);
            let [_boxX4, _boxY4] = glUtil.rotate({x: boxCenterX, y: boxCenterY}, boxX4, boxY4, -_rotate);
            
            
            let boxL = Math.min(_boxX1, _boxX2, _boxX3, _boxX4);
            let boxT = Math.min(_boxY1, _boxY2, _boxY3, _boxY4);
            let boxR = Math.max(_boxX1, _boxX2, _boxX3, _boxX4);
            let boxD = Math.max(_boxY1, _boxY2, _boxY3, _boxY4);
            let boxWidth = boxR - boxL;
            let boxHeight = boxD - boxT;
            let boxScaleY = (boxHeight + offsetY) / boxHeight;

            [_boxX1, _boxY1] = glUtil.scale({x: boxL, y: boxT}, _boxX1, _boxY1, 1, boxScaleY);
            [_boxX2, _boxY2] = glUtil.scale({x: boxL, y: boxT}, _boxX2, _boxY2, 1, boxScaleY);
            [_boxX3, _boxY3] = glUtil.scale({x: boxL, y: boxT}, _boxX3, _boxY3, 1, boxScaleY);
            [_boxX4, _boxY4] = glUtil.scale({x: boxL, y: boxT}, _boxX4, _boxY4, 1, boxScaleY);

            [that.x1, that.y1] = glUtil.rotate({x: boxCenterX, y: boxCenterY}, _boxX1, _boxY1, _rotate);
            [that.x2, that.y2] = glUtil.rotate({x: boxCenterX, y: boxCenterY}, _boxX2, _boxY2, _rotate);
            [that.x3, that.y3] = glUtil.rotate({x: boxCenterX, y: boxCenterY}, _boxX3, _boxY3, _rotate);
            [that.x4, that.y4] = glUtil.rotate({x: boxCenterX, y: boxCenterY}, _boxX4, _boxY4, _rotate);
        }

        function rotateControl(e) {
            // console.log(x1, y1);
            [that.layer.style.x1, that.layer.style.y1] = glUtil.rotate({ x: centerX, y: centerY }, x1, y1, util.r2d(angleDiff));
            [that.layer.style.x2, that.layer.style.y2] = glUtil.rotate({ x: centerX, y: centerY }, x2, y2, util.r2d(angleDiff));
            [that.layer.style.x3, that.layer.style.y3] = glUtil.rotate({ x: centerX, y: centerY }, x3, y3, util.r2d(angleDiff));
            [that.layer.style.x4, that.layer.style.y4] = glUtil.rotate({ x: centerX, y: centerY }, x4, y4, util.r2d(angleDiff));

            
            [that.x1, that.y1] = glUtil.rotate({ x: boxCenterX, y: boxCenterY }, boxX1, boxY1, util.r2d(angleDiff));
            [that.x2, that.y2] = glUtil.rotate({ x: boxCenterX, y: boxCenterY }, boxX2, boxY2, util.r2d(angleDiff));
            [that.x3, that.y3] = glUtil.rotate({ x: boxCenterX, y: boxCenterY }, boxX3, boxY3, util.r2d(angleDiff));
            [that.x4, that.y4] = glUtil.rotate({ x: boxCenterX, y: boxCenterY }, boxX4, boxY4, util.r2d(angleDiff));

            that.layer.style.rotate = rotate + util.r2d(angleDiff);
            that.rotate = _rotate + util.r2d(angleDiff);
        }

        function calcPoints() {
            
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
    }

    hide() {
        this.ref.remove();
        this.isShow = false;
    }

    updatePosition(layer) {
        let currentLayer = layer;
        let centerX = (this.x1 + this.x3) / 2;
        let centerY = (this.y1 + this.y3) / 2;
        let [x1, y1] = glUtil.rotate({ x: centerX, y: centerY }, this.x1, this.y1, -this.rotate);
        let [x2, y2] = glUtil.rotate({ x: centerX, y: centerY }, this.x2, this.y2, -this.rotate);
        let [x3, y3] = glUtil.rotate({ x: centerX, y: centerY }, this.x3, this.y3, -this.rotate);
        let [x4, y4] = glUtil.rotate({ x: centerX, y: centerY }, this.x4, this.y4, -this.rotate);
        


        this.ref.style.left = x1 + 'px';
        this.ref.style.top = y1 + 'px';
        this.ref.style.width = x3 - x1 + 'px';
        this.ref.style.height = y3 - y1 + 'px';
        this.ref.style.transform = `rotate(${this.rotate}deg)`;

    }

}