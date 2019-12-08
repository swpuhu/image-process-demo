import Base from '../util/Base';
import util from '../util/util';
import '../css/menu.less'


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
        let dropListTemplate = {
            tagName: 'div',
            classList: ['menu-droplist', 'absolute', 'hide'],
            children: [],
            ref: 'dropList'
        }
        let template = {
            tagName: 'div',
            classList: ['menu', className],
            children: [
                {
                    tagName: 'div',
                    classList: ['menu-title'],
                    text: '文件',
                    ref: 'title'
                },
                dropListTemplate
            ]
        }
        for (let prop of props) {
            let item = new Item(prop.name, prop.callback);
            dropListTemplate.children.push({
                component: item
            });
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