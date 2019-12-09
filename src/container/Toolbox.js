import Base from '../util/Base';
import util from '../util/util';
import TOOLTYPE from '../Enum/ToolType';
import {ActionType, changeTool} from '../store/action';
import store from '../store/index';

let tools = [];
class ToolboxIcon {
    constructor(props) {
        this.props = props;
        this.ref = this.render();
        this.isActive = false;
    }

    render() {
        let template = {
            tagName: 'div',
            classList: ['toolbox-icon', this.props.className],
            text: 'move'
        }
        let root = util.generateDOM(template).root;
        if (this.props.onClick) {
            root.addEventListener('click', this.props.onClick);
        }
        return root;
    }

    active() {
        this.isActive = true;
        this.ref.classList.add('active');
    }

    disable() {
        this.isActive = false;
        this.ref.classList.remove('active');
    }
}
class Move extends ToolboxIcon {
    constructor() {
        super({
            className: 'toolbox-move',
            onClick: function () {
                tools.forEach(item => item.disable());
                that.active();
            }
        });
        let that = this;
    }

    active() {
        super.active();
        store.dispatch(changeTool(TOOLTYPE.MOVE));

    }
}


export default class Toolbox extends Base {
    constructor() {
        super();
        this.ref = this.render();

    }


    render() {
        let move = new Move();
        tools.push(move);
        move.active();
        let template = {
            tagName: 'div',
            classList: ['toolbox', 'absolute'],
            children: [{
                    tagName: 'div',
                    classList: ['toolbox-caption'],
                    text: '工具栏'
                },
                {
                    tagName: 'div',
                    classList: ['toolbox-body'],
                    children: [{
                        component: move
                    }]
                }
            ]
        }
        return util.generateDOM(template).root;
    }
}