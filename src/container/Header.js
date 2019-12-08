import Base from '../util/Base';
import util from '../util/util';
import FileMenu from '../components/FileMenu';


export default class Header extends Base{
    constructor () {
        super();
        let fileMenu = new FileMenu();
        let template = {
            tagName: 'div',
            classList: ['header'],
            children: [
                {
                    component: fileMenu
                }
            ]
        }
        this.ref = util.generateDOM(template).root;
        
    }
}
