import Base from '../util/Base';
import store from '../store/index';
import ModalBox from './SaveFilePromptBox';
import {
    openFile,
    changeZoom,
    savePicture,
    newProject
} from '../store/action';
import util from '../util/util';
import BlendMode from '../Enum/BlendMode';

class Item {
    constructor(text, onclick) {
        let template = {
            tagName: 'div',
            classList: ['menu-item'],
            text: text
        }
        this.ref = util.generateDOM(template).root;
        this.ref.addEventListener('click', onclick);
    }
}


class FileMenu extends Base {
    constructor() {
        super();
        let input = document.createElement('input');
        input.type = 'file';
        input.multiple = true;
        let that = this;
        input.onchange = function () {
            that.openFiles(this.files);
            input.value = null;
        }
        this.input = input;
        this.ref = this.render();
    }

    openFileByClick() {
        this.input.click();
    }


    openFiles(files) {
        for (let file of files) {
            // let file = this.files[0];
            let url = URL.createObjectURL(file);
            let image = new Image();
            image.onload = function () {
                URL.revokeObjectURL(url);
                createImageBitmap(image)
                    .then(img => {
                        let isFirst = false;
                        if (!store.state.layers.length) {
                            isFirst = true;
                            store.dispatch(newProject({
                                width: image.width,
                                height: image.height,
                                name: 'New Project'
                            }))

                        }

                        let style = util.autoAdaption(image.width, image.height, store.state.width, store.state.height);

                        let layer = {
                            width: image.width,
                            height: image.height,
                            originWidth: image.width,
                            originHeight: image.height,
                            image: img,
                            name: util.deletePostfix(file.name),
                            steps: [
                            ],
                            style: style,
                            blendMode: BlendMode.NORMAL
                        };
                        store.dispatch(openFile(layer));
                        if (isFirst) {
                            let zoomX = store.state.width / (window.innerWidth - 500);
                            let zoomY = store.state.height / (window.innerHeight - 100);
                            let zoom = Math.max(zoomX, zoomY);
                            if (zoom < 1) {
                                zoom = 1;
                            }
                            store.dispatch(changeZoom(zoom));
                        }
                    })
            }
            image.src = url;;
        }

    }

    render() {
        let that = this;
        let openFile = new Item('打开文件', function () {
            that.openFileByClick();
        });
        let saveFile = new Item('保存文件', function () {
            let modalBox = new ModalBox('提示', function (props) {
                store.dispatch(savePicture(props));
                

            })
            
        })
        let template = {
            tagName: 'div',
            classList: ['menu-droplist', 'hide', 'absolute'],
            children: [{
                    component: openFile
                },
                {
                    component: saveFile
                }
            ]
        }
        let root = util.generateDOM(template).root;
        return root;
    }


}

export default util.getSingleton(FileMenu);