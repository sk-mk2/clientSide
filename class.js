"use strict";
class Rectangle{
    constructor(height, width) {
        this.height = height;
        this.width = width;
        //これでいいのか？
        Object.freeze(this);
    }

    area() {
        return this.height * this.width;
    }
}
const rect = new Rectangle(5,8);
/*rect.height = 4;
rect.area = ()=> 10;*/
console.log(rect.area());

