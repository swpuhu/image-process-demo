export default class Mask {
    constructor () {
        this.ref = document.createElement('div');
        this.ref.style.cssText = `
            position: fixed;
            width: 100vw;
            height: 100vh;
            z-index: 99999;
            background-color: rgba(0, 0, 0, 0.36);
        `
    }

    show() {
        document.body.appendChild(this.ref);
    }

    hide() {
        this.ref.remove();
    }
    
}