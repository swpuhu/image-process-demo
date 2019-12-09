import Base from '../util/Base';
import util from '../util/util';


class ContextMenuItem {
    constructor(text, onclick) {
        let template = {
            tagName: 'div',
            classList: ['contextmenu-item'],
            text: text
        }
        this.ref = util.generateDOM(template).root;
        this.ref.addEventListener('click', function (e) {
            e.preventDefault();
            onclick();
        });
    }
}


export default class ContextMenu extends Base {
    constructor (props) {
        super();
        this.props = props;
        this.ref = this.render();
    }

    render() {
        let template = {
            tagName: 'div',
            classList: ['context-menu', 'absolute'],
            children: [

            ]
        }

        for (let prop of this.props) {
            let contextMenuItem = new ContextMenuItem(prop.name, prop.callback)
            template.children.push({
                component: contextMenuItem
            })
        }

        let root = util.generateDOM(template).root;

        return root;
    }
}