import Base from '../util/Base';
import store from '../store/index';
import util from '../util/util';
import { deleteLayer } from '../store/action';
import ContextMenu from '../container/ContextMenu';

export default class LayerContextMenu extends Base {
    constructor() {
        super();
        let that = this;
        this.menu = new ContextMenu([
            {
                name: '删除',
                callback: function () {
                    console.log('delete');
                    store.dispatch(deleteLayer());
                    that.hide();
                }
            }
        ]);
        this.menu.ref.classList.add('disappear');
        this.menu.ref.classList.add('hide');
        document.body.appendChild(this.menu.ref);

        document.addEventListener('mouseup', function () {
            that.hide();
        })
    }

    /**
     * 
     * @param {MouseEvent} e 
     */
    show(e) {
        this.menu.ref.classList.remove('hide');
        this.menu.ref.classList.remove('disappear');
        this.menu.ref.classList.add('active');
        let left = e.clientX;
        let top = e.clientY;
        if (left + this.menu.ref.offsetWidth > window.innerWidth) {
            left = window.innerWidth - this.menu.ref.offsetWidth;
        }
        if (top + this.menu.ref.offsetHeight > window.innerHeight) {
            top = window.innerHeight - this.menu.ref.offsetHeight;
        }
        this.menu.ref.style.left =  left + 'px';
        this.menu.ref.style.top = top + 'px';
    }

    hide() {
        this.menu.ref.classList.remove('active');
        this.menu.ref.classList.add('disappear');
    }
}