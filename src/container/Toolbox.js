import Base from '../util/Base';
import util from '../util/util';

class Move {
    constructor() {
        this.ref = this.render();
    }

    render() {
        let template = {
            tagName: 'div',
            classList: ['toolbox-icon', 'toolbox-move'],
            text: 'move'
        }
        return util.generateDOM(template).root;
    }
}


export default class Toolbox extends Base {
    constructor() {
        super();
        this.ref = this.render();

    }


    render() {
        let move = new Move();
        let template = {
            tagName: 'div',
            classList: ['toolbox', 'absolute'],
            children: [
                {
                    tagName: 'div',
                    classList: ['toolbox-caption'],
                    text: '工具栏'
                },
                {
                    tagName: 'div',
                    classList: ['toolbox-body'],
                    children: [
                        {
                            component: move
                        }
                    ]
                }
            ]
        }
        return util.generateDOM(template).root;
    }
}