import Base from '../util/Base';
import store from '../store/index';
import {
    MoveStep
} from '../Enum/Step';
import StepType from '../Enum/StepType';
import {
    openFile,
    changeZoom,
    savePicture,
    newProject
} from '../store/action';
import util from '../util/util';

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
                        let zoomX = image.width / (window.innerWidth - 500);
                        let zoomY = image.height / (window.innerHeight - 100);
                        let zoom = Math.max(zoomX, zoomY);
                        if (zoom < 1) {
                            zoom = 1;
                        }
                        let isFirst = false;
                        if (!store.state.layers.length) {
                            isFirst = true;
                            store.dispatch(newProject({
                                width: image.width,
                                height: image.height,
                                name: 'New Project'
                            }))

                        }

                        let style;
                        style = {
                            x1: (store.state.width - image.width) / 2,
                            y1: (store.state.height - image.height) / 2,
            
                            x2: (store.state.width + image.width) / 2,
                            y2: (store.state.height - image.height) / 2,
            
                            x3: (store.state.width + image.width) / 2,
                            y3: (store.state.height + image.height) / 2,
            
                            x4: (store.state.width - image.width) / 2,
                            y4: (store.state.height + image.height) / 2,
            
                            rotate: 0
                        }
                        

                        let layer = {
                            width: image.width,
                            height: image.height,
                            originWidth: image.width,
                            originHeight: image.height,
                            image: img,
                            name: util.deletePostfix(file.name),
                            steps: [
                            ],
                            style: style
                        };
                        store.dispatch(openFile(layer));
                        if (isFirst) {
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
            store.dispatch(savePicture());
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