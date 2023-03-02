class Game {
  constructor() {
    this.player = null;
    this.obstaclessArr = []; //will store instances of the class Obstacle
  }
  start() {
    this.player = new Player();

    this.attachEventListneners();

    //create new obstacles
    setInterval(() => {
      const myObstacle = new Obstacle();
      this.obstaclessArr.push(myObstacle);
    }, 3000);

    //to move obstacles
    setInterval(() => {
        this.obstaclessArr.forEach((obstacle) => {
        obstacle.moveDown();
      });
    }, 30);
  }
  attachEventListneners(){

    document.addEventListener("keydown", (event) => {
        if (event.code === "ArrowLeft") {
          this.player.moveLeft();
        } else if (event.key === "ArrowRight") {
          this.player.moveRight();
        }
      });
  }
}

class Player {
  constructor() {
    this.positionX = 0;
    this.positionY = 0;
    this.playerElm = document.getElementById("player");
  }
  moveLeft() {
    this.positionX--; //if to manage not to go out the div(-)
    this.playerElm.style.left = this.positionX + "vw";
  }
  moveRight() {
    this.positionX++;
    this.playerElm.style.left = this.positionX + "vw";
  }
}

class Obstacle {
  constructor() {
    this.positionX = 50;
    this.positionY = 100;
    this.obstacleElm = null;

    this.createDomElement();
  }
  createDomElement() {
    this.obstacleElm = document.createElement(`div`);

    this.obstacleElm.className = "obstacle";
    this.obstacleElm.style.left = this.positionX + "vw";

    const boardElm = document.getElementById("board");
    boardElm.appendChild(this.obstacleElm);
  }
  moveDown() {
    this.positionY--;
    this.obstacleElm.style.bottom = this.positionY + "vh";
  }
}


const game = new Game();
game.start();