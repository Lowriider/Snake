class fruit {
    constructor(){
        this.randomX;
        this.randomY;
        this.x = 50;
        this.y = 200;
        this.xWidth = 10;
        this.yHeight = 10;
        this.canvas = document.getElementById("canvas");
        this.ctx = document.getElementById("canvas").getContext("2d");
    }
    randomXPos(min, max) {
        this.randomX = Math.floor(Math.random() * (max - min + 1)) + min;
        this.x = this.randomX;
        return this.x;
    }
    randomYPos(min, max) {
        this.randomY = Math.floor(Math.random() * (max - min + 1)) + min;
        this.y = this.randomY;
        return this.y;
    }
     update() {
        randomX(2,798).bind(this);
        randomY(2,598).bind(this);
         this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
     }
    show() {
        this.ctx.fillStyle = "red";
        this.ctx.fillRect(this.x, this.y, this.xWidth, this.yHeight);
        this.ctx.stroke();
    }
}
