class Step {
    constructor (type) {
        this.type = type;
    }
}


export class MoveStep extends Step {
    constructor(type, offsetX, offsetY) {
        super(type);
        this.offsetX = offsetX;
        this.offsetY = offsetY;
    }
}


