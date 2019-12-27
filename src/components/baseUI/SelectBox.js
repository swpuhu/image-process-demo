import Base from '../../util/Base';
import util from '../../util/util';
class DropListItem extends Base{
    constructor(alias, value, onclick) {
        super();
        this.alias = alias;
        this.value = value;
        this.onclick = onclick;
        this.ref = this.render();
        this.disabled = false;
    }

    render() {
        let template = {
            tagName: 'div',
            classList: ['droplist-item'],
            text: this.alias,
        };

        let {
            root
        } = util.generateDOM(template);
        root.addEventListener('click', () => {
            this.dispatch('change', this.alias, this.value);
            this.onclick();
        });
        return root;
    }
}



export default class SelectBox extends Base {
    constructor(dropList) {
        super();
        this.dropList = dropList;
        this.isShow = false;
        this.show = this.show.bind(this);
        this.hide = this.hide.bind(this);
        this.dropListItem = []
        this.disabled = false;
        this.ref = this.render();
    }

    render() {
        let dropListTemplate = {
            tagName: 'div',
            classList: ['select-droplist', 'hide'],
            ref: 'dropList',
            children: [],
        };

        for (let item of this.dropList) {
            let dropListItem = new DropListItem(item.alias, item.value, this.hide)
            dropListTemplate.children.push({
                component: dropListItem
            });
            this.dropListItem.push(dropListItem);

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
        };


        let {
            root,
            dropList,
            display
        } = util.generateDOM(template);

        let that = this;
        display.textContent = this.dropListItem[0].alias;
        this.dropListItem.forEach(item => {
            item.on('change', function (name, value) {
                display.textContent = name;
                that.dispatch('change', name, value)
            })
        });


        display.onclick = function (e) {
            e.stopPropagation();
            if (that.disabled) return;
            if (that.isShow) {
                that.hide();
            } else {
                that.show();
            }

        };

        document.addEventListener('mouseup', function () {
            that.hide();
        });
        this.dropList = dropList;
        return root;
    }

    hide() {
        this.dropList.classList.add('hide');
        this.isShow = false;
    }

    show() {
        this.dropList.classList.remove('hide');
        this.isShow = true;
    }

    setDisable() {
        this.disabled = true;
        this.ref.classList.add('disabled');
    }

    cancelDisable() {
        this.disabled = false;
        this.ref.classList.remove('disabled');
    }
}