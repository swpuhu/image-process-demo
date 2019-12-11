export default class Vec2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.m = Math.sqrt(this.x ** 2 + this.y ** 2);
        this.angle = Math.atan2(y, x);
    }

    /**
     * 
     * @param {Vec2} vec 
     */
    dot(vec) {
        return this.x * vec.x + this.y + vec.y;
    }

    sub(vec) {
        this.x -= vec.x;
        this.y -= vec.y;
    }

    add(vec) {
        this.x += vec.x;
        this.y += vec.y;
    }
}