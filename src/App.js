import Header from './container/Header';
import Main from './container/Main';
import util from './util/util';
import './css/style.less';
import './css/header.less';
import Info from './container/Info';
export default class App {
    constructor() {
        let header = new Header();
        let main = new Main();
        let info = new Info();
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
                }
            ]
        }
        this.ref = util.generateDOM(template).root;
    }
}