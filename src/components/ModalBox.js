import util from '../util/util';


export default class ModalBox {
    /**
     * 
     * @param {string} type info | warn | error
     * @param {string} prompt 
     * @param {string} msg 
     * @param {Function} okCallback 
     * @param {Function} cancelCallback
     */
    constructor(type, prompt, msg, okCallback, cancelCallback) {
        this.type = type;
        this.prompt = prompt;
        this.msg = msg;
        this.okCallback = okCallback;
        this.cancelCallback = cancelCallback;
    }


    render() {
        let footerTemplate = {
            tagName: 'div',
            classList: ['modal-box__footer'],
            children: [{
                tagName: 'div',
                classList: ['footer-okbtn'],
                text: '确定'
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
                            text: this.prompt
                        },
                        {
                            tagName: 'div',
                            classList: ['caption-cancel'],
                        }
                    ]
                },
                {
                    tagName: 'div',
                    classList: ['modal-box__body'],
                    children: [{
                            tagName: 'div',
                            classList: ['body-icon'],
                        },
                        {
                            tagName: 'div',
                            classList: ['body-msg'],
                            text: this.msg
                        }
                    ]
                },
            ]
        }
        if (this.cancelCallback) {
            footerTemplate.children.push({
                tagName: 'div',
                classList: ['footer-cancelbtn'],
                text: '取消'
            })
        }
        let {root} = util.generateDOM(template);
        return root;
    }
}