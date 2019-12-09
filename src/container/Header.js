import Base from '../util/Base';
import util from '../util/util';
import Menu from '../container/Menu';


export default class Header extends Base{
    constructor () {
        super();
        let menu = new Menu();
        let template = {
            tagName: 'div',
            classList: ['header'],
            children: [
                {
                    component: menu
                }
            ]
        }
        this.ref = util.generateDOM(template).root;
        
    }
}
