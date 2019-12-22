import ModalBox from './baseUI/ModalBox';
import store from '../store/index';
import util from '../util/util';

export default class SaveFilePromptBox extends ModalBox {
    constructor(propmt, okCallback) {
        super(propmt);
        this.okCallback = okCallback;
        this.ref = this.render();
        this.show();
    }

    render() {
        let box = super.render();
        let template = {
            tagName: 'div',
            classList: ['input-savefile', 'flex'],
            children: [
                {
                    tagName: 'div',
                    classList: 'savefile-label',
                    text: '保存图片尺寸'
                },
                {
                    tagName: 'div',
                    classList: ['savefile-container'],
                    children: [
                        {
                            tagName: 'input',
                            classList: ['savefile-input', 'width'],
                            props: {
                                type: 'number',
                                value: store.state.originWidth,
                            },
                            ref: 'widthInput'
                        },
                        {
                            tagName: 'span',
                            classList: ['savefile-text'],
                            text: 'x'
                        },
                        {
                            tagName: 'input',
                            classList: ['savefile-input', 'height'],
                            props: {
                                type: 'number',
                                value: store.state.originHeight,
                            },
                            ref: 'heightInput'
                        }
                    ]
                }
            ]
        };


        let { root, widthInput, heightInput } = util.generateDOM(template);
        let that = this;
        this.confirmButton.addEventListener('click', function () {
            that.okCallback({ 
                width: widthInput.value, 
                height: heightInput.value 
            });
            that.hide();
        })
        this.appendChild(root);
        return box;
    }
}