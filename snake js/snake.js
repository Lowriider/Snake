class snake {
    constructor() {
        this.count = 0;

        // fruits //

        this.ctxFruit = document.getElementById("canvas").getContext("2d");
        this.xFruit = 500;
        this.yFruit = 2;
        this.randomX;
        this.randomY;
        this.fruitDistanceX;
        this.fruitDistanceY;
        this.distanceFruit;
        this.widthFruit = 10;
        this.heightFruit = 10;

        // snake //

        this.ctx = document.getElementById("canvas").getContext("2d");
        this.x = 20;
        this.y = 10;
        this.height = 10;
        this.width = 10;
        this.xSpeed = 0;
        this.ySpeed = 0;
        this.tail = [];
        this.total = 0;
        this.increaseSpeed = 2;

        // canvas //

        this.canvasWidthMax = 798;
        this.canvasWidthMin = 2;
        this.canvasHeightMax = 598;
        this.canvasHeightMin = 2;
        this.canvas = document.getElementById("canvas");

        // events + DOM // 

        this.scoreBoard = document.getElementById('count');
        this.gameover = document.getElementById('game-over');
        
        document.addEventListener('keydown', this.moveUp.bind(this));
        document.addEventListener('keydown', this.moveDown.bind(this));
        document.addEventListener('keydown', this.moveLeft.bind(this));
        document.addEventListener('keydown', this.moveRight.bind(this));
    }

    // UPDATE FUNCTION //

    update() {
        this.scoreBoard.innerText = `SCORE: ${this.count}`;

        // grow tail //

        for( let i = 0; i < this.tail.length - 1; i++) {
            this.tail[i] = this.tail[i+1];
        }
        this.tail[this.total - 1] = { x: this.x , y: this.y } ;

        // update pos //

        this.x += this.xSpeed;
        this.y += this.ySpeed;

        // calculate fruit pos //

        this.fruitDistanceX = this.xFruit - this.x - 1;
        this.fruitDistanceY = this.yFruit - this.y - 1;
        this.distanceFruit = this.fruitDistanceX + this.fruitDistanceY;
        this.distanceFruit--;
    }

    // ****************************************************************************** //


    // show snake //

    show() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fillStyle = "white";
        for (let i= 0; i < this.tail.length; i++) {
            this.ctx.fillRect(this.tail[i].x, this.tail[i].y, this.width, this.height);
        }
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
        this.ctx.stroke();
    }

    // ****************************************************************************** //


    // change direction //

    direction(x, y) {
        this.xSpeed = x;
        this.ySpeed = y;
    }

    // ****************************************************************************** //

    // MOVE WHEN PRESS KEY //

    moveUp(e) {
        if (e.keyCode === 38)
            this.direction(0, -this.increaseSpeed); // UP //
    }
    moveDown(e) {
        if (e.keyCode === 40)
            this.direction(0, this.increaseSpeed); // DOWN //
    }
    moveLeft(e) {
        if (e.keyCode === 37)
            this.direction(-this.increaseSpeed, 0); // LEFT //
    }
    moveRight(e) {
        if (e.keyCode === 39)
            this.direction(this.increaseSpeed, 0); // RIGHT //
    }

    // ****************************************************************************** //

    collide() {
        if (this.x > this.canvasWidthMax - this.width/2) {
            this.x = this.canvasWidthMax - this.width;
            this.gameOver();
        }
        else if (this.x < this.canvasWidthMin) {
            this.x = this.canvasWidthMin;
            this.gameOver();
        }
        else if (this.y > this.canvasHeightMax - this.height/2) {
            this.y = this.canvasHeightMax - this.height;
            this.gameOver();
        }
        else if (this.y < this.canvasHeightMin) {
            this.y = this.canvasHeightMin;
            this.gameOver();
        }
    }
           
    eatFruit() {
         if(this.x > this.xFruit + this.widthFruit || this.x + this.width < this.xFruit || this.y > this.yFruit + this.heightFruit || this.y + this.width < this.yFruit ){ 
        } 
        else {
            this.total++;
            this.count++;
            this.increaseSpeed += 0.1;
            this.ctxFruit.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.randomXPos(2, 798);
            this.randomYPos(2, 598);
        }

    }
    randomXPos(min, max) {
        this.randomX = Math.floor(Math.random() * (max - min + 1)) + min;
        this.xFruit = this.randomX;
        return this.xFruit;
    }
    randomYPos(min, max) {
        this.randomY = Math.floor(Math.random() * (max - min + 1)) + min;
        this.yFruit = this.randomY;
        return this.yFruit;
    }
    showFruit() {
        this.ctxFruit.fillStyle = "red";
        this.ctxFruit.fillRect(this.xFruit, this.yFruit, this.widthFruit, this.heightFruit);
        this.ctxFruit.stroke();
    }
    Fruit() {
        this.showFruit();
    }
    gameOver() {
        this.gameover.style.display = "block";
        this.count = 0;
        this.increaseSpeed = 0;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    // || this.x > 800 - this.xwidth
}