 class Player {
    constructor(){
        this.positionX = 0;
        this.positionY = 0;
        this.playerElm = document.getElementById("player");
    }    
    moveLeft(){
        this.positionX--;   //if to manage not to go out the div(-)
        this.playerElm.style.left = this.positionX + "vw";
    }
    moveRight(){
        this.positionX++;
        this.playerElm.style.left = this.positionX + "vw";
    }
}

class Obstacle{
    constructor(){
        this.positionX = 50; 
        this.positionY = 100;
        this.obstacleElm = null;

        this.createDomElement();
    }
    createDomElement(){
        this.obstacleElm = document.createElement(`div`);

        this.obstacleElm.className ="obstacle";
        this.obstacleElm.style.left = this.positionX + "vw"

        const boardElm = document.getElementById("board");
        boardElm.appendChild(this.obstacleElm);
        
    }
    moveDown(){
        this.positionY--;
        this.obstacleElm.style.bottom = this.positionY + "vh";
    }
}




const myPlayer = new Player();
const obstaclessArr = []; //will store instances of the class Obstacle

//create new obstacles
setInterval(function(){
    const myObstacle = new Obstacle();
    obstaclessArr.push(myObstacle)
}, 3000)

//to move obstacles
setInterval(function(){
    obstaclessArr.forEach((obstacle) => {
        obstacle.moveDown();
    })
}, 30)

document.addEventListener("keydown", (event) => {
    if(event.code === "ArrowLeft"){
         myPlayer.moveLeft();
    }else if (event.key === "ArrowRight"){
        myPlayer.moveRight();
    }
});