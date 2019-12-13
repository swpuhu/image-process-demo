import Extends from './util/extends';
import Header from './container/Header';
import Main from './container/Main';
import Toolbox from './container/Toolbox';
import util from './util/util';
import './css/style.less';
import Info from './container/Info';

export default class App {
    constructor() {
        let header = new Header();
        let main = new Main();
        let info = new Info();
        let toolbox = new Toolbox();
        let template = {
            tagName: 'div',
            classList: ['my-app'],
            children: [
                {
                    component: header
                },
                {
                    component: main
                },
                {
                    component: info
                },
                {
                    component: toolbox
                }
            ]
        }

        document.onselectstart = function (e) {
            return false;
        }

        document.oncontextmenu = function (e) {
            e.preventDefault();
        }
        this.ref = util.generateDOM(template).root;
    }
}