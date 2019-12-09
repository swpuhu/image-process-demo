import Base from '../util/Base';
import Menu from '../container/Menu';
import store from '../store/index';
import { openFile, changeZoom, ActionType } from '../store/action';
import util from '../util/util';


export default class FileMenu extends Base {
    constructor() {
        super();
        let input = document.createElement('input');
        input.type = 'file';
        input.onchange = function () {
            let file = this.files[0];
            let url = URL.createObjectURL(file);
            let image = new Image();
            image.onload = function () {
                URL.revokeObjectURL(url);
                let layer = {
                    width: image.width,
                    height: image.height,
                    image: image,
                    name: util.deletePostfix(file.name),
                    steps: []
                };
                let zoomX = image.width / (window.innerWidth - 100);
                let zoomY = image.height / (window.innerHeight - 100);
                let zoom = Math.max(zoomX, zoomY);
                if (!store.state.layers.length) {
                    store.dispatch(openFile(layer));
                    store.dispatch(changeZoom(zoom));
                } else {
                    store.dispatch(openFile(layer));
                    // store.dispatch(changeZoom(zoom));
                }
                input.value = null;
            }
            image.src = url;;
        }

        let menu = new Menu([
            {
                name: '打开文件',
                callback: function () {
                    input.click();
                }
            },
            {
                name: '保存',
                callback: function () {
                    console.log('save')
                }
            },
            {
                name: '另存为',
                callback: function () {
                    console.log('save as');
                }
            }
        ], 'file-menu');
        this.ref = menu.ref;
    }
}