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



const myPlayer = new Player();


document.addEventListener("keydown", (event) => {
    if(event.code === "ArrowLeft"){
         myPlayer.moveLeft();
    }else if (event.key === "ArrowRight"){
        myPlayer.moveRight();
    }
});