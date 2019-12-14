export default class Vec2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    get m () {
        return Math.sqrt(this.x ** 2 + this.y ** 2);
    }

    get angle() {
        return Math.atan2(this.y, this.x) >= 0 ? Math.atan2(this.y, this.x) : 2 * Math.PI + Math.atan2(this.y, this.x);
    }
    /**
     * 
     * @param {Vec2} vec 
     */
    dot(vec) {
        return this.x * vec.x + this.y + vec.y;
    }

    /**
     * 
     * @param {Vec2} vec 
     */
    cross(vec) {
        return this.x * vec.y - vec.x * this.y;
    }

    sub(vec) {
        this.x -= vec.x;
        this.y -= vec.y;
    }

    add(vec) {
        this.x += vec.x;
        this.y += vec.y;
    }

    /**
     * 
     * @param {Vec2} vec
     */
    getAngle(vec) {
        return this.angle - vec.angle;
    }
}