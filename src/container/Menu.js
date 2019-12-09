import Base from '../util/Base';
import util from '../util/util';
import FileMenu from '../components/FileMenu';

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

export default class Menu extends Base {
    constructor(props, className) {
        super();
        let template = {
            tagName: 'div',
            classList: ['menu'],
            children: [
                {
                    tagName: 'div',
                    classList: ['file-menu'],
                    children: [
                        {
                            tagName: 'div',
                            classList: ['menu-title'],
                            text: '文件',
                            ref: 'title'
                        },
                        {
                            component: new FileMenu(),
                            ref: 'dropList'
                        }

                    ]
                }
            ]
        }
        let {root, title, dropList} = util.generateDOM(template);
        this.ref = root;
        let that = this;
        title.onclick = function () {
            that.toggle.call(dropList)
        }
        dropList.onclick = function () {
            that.toggle.call(dropList);
        }

    }

    toggle() {
        if (this.classList.contains('hide')) {
            this.classList.remove('hide');
        } else {
            this.classList.add('hide');
        }
    }
}