import Base from '../util/Base';
import util from '../util/util';
import DrawingBoard from './DrawingBoard';

export default class Main extends Base {
    constructor () {
        super();
        this.ref = this.render();
    }

    render() {
        let drawingBoard = new DrawingBoard();
        let template = {
            tagName: 'div',
            classList: ['main'],
            children: [
                {
                    component: drawingBoard
                }
            ]
        }
        return util.generateDOM(template).root;
        
    }
}