export default class Base {
    constructor () {
        this.eventList = [];
    }

    on(name, fn) {
        if (!this.eventList[name]) {
            this.eventList[name] = [];
        }
        this.eventList[name].push(fn);
    }

    off(name, fn) {
        let arr = this.eventList[name];
        if (!arr) {
            console.warn(name + ' is not exist');
            return;
        }
        let index = arr.indexOf(fn);
        if (index >= 0) {
            arr.splice(index, 1);
        }
    }

    dispatch() {
        let name = Array.prototype.shift.call(arguments);
        let arr = this.eventList[name];
        if (!arr) {
            console.warn(name + ' is not exist');
            return;
        }
        for (let fn of arr) {
            fn.apply(this, arguments);
        }
    }

}