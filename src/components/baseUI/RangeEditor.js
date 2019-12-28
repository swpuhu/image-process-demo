import Base from '../../util/Base';
import util from '../../util/util';


export default class RangeEditor extends Base {
    constructor (min = 0, max = 1, step = 0.01, value) {
        super();
        this.min = min;
        this.max = max;
        this.range = this.max - this.min;
        this.step = step;
        this.value = value;
        this.ref = this.render();
    }


    render() {
        let template = {
            tagName: 'div',
            classList: 'range-editor',
            children: [
                {
                    tagName: 'div',
                    classList: 'range-bar',
                    ref: 'bar'
                },
                {
                    tagName: 'div',
                    classList: 'range-bar__active',
                    ref: 'activeBar'
                },
                {
                    tagName: 'div',
                    classList: 'range-slider',
                    ref: 'slider'
                }
            ]
        };

        let {root, slider, bar, activeBar} = util.generateDOM(template);
        let that = this;
        slider.onmousedown = function (e) {
            e.stopPropagation();
            let maxWidth = bar.offsetWidth;
            let initX = slider.offsetLeft;
            function move(ev) {
                let offsetX = ev.clientX - e.clientX;
                let left = initX + offsetX;
                if (left > maxWidth) {
                    left = maxWidth;
                } else if (left < 0) {
                    left = 0;
                }
                let value = left / maxWidth * that.range;
                value = ~~(value / that.step) * that.step;
                left = value / that.range * maxWidth;
                that.value = value;
                slider.style.left = left + 'px';
                activeBar.style.width = left + 'px';
            }

            function up(ev) {
                document.removeEventListener('mousemove', move);
                document.removeEventListener('mouseup', up);
            }
            document.addEventListener('mousemove', move);
            document.addEventListener('mouseup', up);
        }

        bar.onmousedown = function (e) {
            e.stopPropagation();
            let maxWidth = bar.offsetWidth;
            let value = e.offsetX / maxWidth * that.range;
            value = ~~(value / that.step) * that.step;
            let left = value / that.range * maxWidth;
            that.value = value;
            slider.style.left = left + 'px';
            activeBar.style.width = left + 'px';
        }

        activeBar.onmousedown = function (e) {
            e.stopPropagation();
            let maxWidth = bar.offsetWidth;
            let value = e.offsetX / maxWidth * that.range;
            value = ~~(value / that.step) * that.step;
            let left = value / that.range * maxWidth;
            that.value = value;
            slider.style.left = left + 'px';
            activeBar.style.width = left + 'px';
        }

        this.slider = slider;
        this.bar = bar;
        this.activeBar = activeBar;
        return root;
    }


    setValue(value) {
        let maxWidth = this.bar.offsetWidth;
        this.value = value;
        let left = this.value / this.range * maxWidth;
        this.slider.style.left = left + 'px';
        this.activeBar.style.width = left + 'px';
    }
}