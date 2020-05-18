class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    plus(vecToAdd) {
        return `Vec{x: ${this.x + vecToAdd.x}, y: ${this.y + vecToAdd.y}}`;
    }

    minus(vecToSub) {
        return `Vec{x: ${this.x - vecToAdd.x}, y: ${this.y - vecToAdd.y}}`;
    }

    get length() {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }
}

console.log(new Vec(1, 2).plus(new Vec(3,4)));

console.log(new Vec(3, 4).length);