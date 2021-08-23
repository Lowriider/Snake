
let playSnake = new snake();

function setup() {
    showSnake();
    window.requestAnimationFrame(setup);
}
function showSnake() {
     //********SNAKE********//
    playSnake;
    playSnake.show();
    playSnake.collide();
    playSnake.showFruit();
    playSnake.eatFruit();
    playSnake.update();
}

setup();