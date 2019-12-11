import Base from '../util/Base';
import util from '../util/util';
import DrawingBoard from './DrawingBoard';
import FileMenu from '../components/FileMenu';


export default class Main extends Base {
    constructor () {
        super();
        this.ref = this.render();
    }

    render() {
        let drawingBoard = new DrawingBoard();
        window.drawingBoard = drawingBoard;
        let fileMenu = new FileMenu();
        let template = {
            tagName: 'div',
            classList: ['main'],
            children: [
                {
                    component: drawingBoard
                }
            ]
        }
        let root = util.generateDOM(template).root;


        root.ondragover = function (e) {
            return false;
        }   

        root.ondrop = function (e) {
            e.preventDefault();
            fileMenu.openFiles(e.dataTransfer.files);
        }
        return root;
        
    }
}