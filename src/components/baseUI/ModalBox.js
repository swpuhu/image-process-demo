import util from '../../util/util';
import Base from '../../util/Base';
import Mask from './Mask';

class ModalBox extends Base{
    /**
     * @param {string} prompt // info, warn, error
     */
    constructor(prompt) {
        super();
        this.prompt = prompt;
        this.mask = new Mask();
    }


    render() {
        let footerTemplate = {
            tagName: 'div',
            classList: ['modal-box__footer'],
            children: [{
                tagName: 'div',
                classList: ['footer-okbtn'],
                text: '确定',
                ref: 'confirmButton'
            }]
        }
        let template = {
            tagName: 'div',
            classList: ['modal-box'],
            children: [{
                    tagName: 'div',
                    classList: ['modal-box__caption', 'flex'],
                    children: [{
                            tagName: 'div',
                            classList: ['caption-title'],
                            text: this.prompt,
                        },
                        {
                            tagName: 'div',
                            classList: ['caption-cancel'],
                        }
                    ],
                    ref: 'caption'
                },
                {
                    tagName: 'div',
                    classList: ['modal-box__body'],
                    children: [
                    ],
                    ref: 'body'
                },
                footerTemplate
            ]
        }
        if (this.cancelCallback) {
            footerTemplate.children.push({
                tagName: 'div',
                classList: ['footer-cancelbtn'],
                text: '取消',
                ref: 'cancelButton'
            })
        }
        let {root, confirmButton, body, caption, cancelButton} = util.generateDOM(template);
        this.slot = body;
        let that = this;

        caption.onmousedown = function (e) {
            let startLeft = that.ref.offsetLeft;
            let startTop = that.ref.offsetTop;
            document.onmousemove = function (ev) {
                let offsetX = ev.clientX - e.clientX;
                let offsetY = ev.clientY - e.clientY;
                that.ref.style.left = startLeft + offsetX + 'px';
                that.ref.style.top = startTop + offsetY + 'px';
            }
            document.onmouseup = function () {
                document.onmousemove = null;
                document.onmouseup = null;
            }
        }

        this.confirmButton = confirmButton;
        this.cancelButton = cancelButton;
        return root;
    }

    appendChild(dom) {
        this.slot.appendChild(dom);
    }



    show() {
        document.body.appendChild(this.ref);
        this.mask.show();
        let left = (window.innerWidth - this.ref.offsetWidth) / 2;
        let top = (window,innerHeight - this.ref.offsetHeight) / 2;
        this.ref.style.top = top + 'px';
        this.ref.style.left = left + 'px';
    }

    hide() {
        this.mask.hide();
        this.ref.remove();
    }
}


// export default util.getSingleton(ModalBox);

export default ModalBox;