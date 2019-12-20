import Base from '../util/Base';
import util from '../util/util';
class DropListItem {
    constructor(alias, value) {
        this.alias = alias;
        this.value = value;
        this.ref = this.render();
    }

    render() {
        let template = {
            tagName: 'div',
            classList: ['droplist-item'],
            text: this.alias
        }

        let {
            root
        } = util.generateDOM(template);
        return root;
    }
}



export default class SelectBox extends Base {
    constructor(dropList) {
        super();
        this.dropList = dropList;
        this.ref = this.render();
        this.show = false;
    }

    render() {
        let dropListTemplate = {
            tagName: 'div',
            classList: ['select-droplist', 'disappear'],
            ref: 'dropList',
            children: [],
        }

        for (let item of this.dropList) {
            dropListTemplate.children.push({
                component: new DropListItem(item.alias, item.value)
            })
        }

        let template = {
            tagName: 'div',
            classList: ['select-box'],
            children: [{
                    tagName: 'div',
                    classList: ['select-display'],
                    ref: 'display'
                },
                dropListTemplate
            ]
        }


        let {
            root,
            dropList,
            display
        } = util.generateDOM(template);

        let that = this;
        display.onclick = function () {
            if (that.show) {
                dropList.classList.add('disappear');
                that.show = false;
            } else {
                dropList.classList.remove('disappear');
                that.show = true;
            }

        }
        return root;
    }
}