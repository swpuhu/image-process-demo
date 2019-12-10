class Step {
    constructor (type) {
        this.type = type;
    }
}


export class MoveStep extends Step {
    constructor(type, offsetX = 0, offsetY = 0, scaleX = 1, scaleY = 1, rotate = 0, clipT = 0, clipD = 0, clipL = 0, clipR = 0) {
        super(type);
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        this.scaleX = scaleX;
        this.scaleY = scaleY;
        this.rotate = rotate;
        this.clipT = clipT;
        this.clipD = clipD;
        this.clipL = clipL;
        this.clipR = clipR;
    }
}


