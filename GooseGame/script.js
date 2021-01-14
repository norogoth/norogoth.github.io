var myPlayer;

let myObstacles = [];

let myCanvas = document.getElementById("myCanvas");
let context = myCanvas.getContext("2d");

myPlayer = new Component(30, 30, "red", 10, 20, "player block");
myScore  = new Component("30px", "Consolas", "white", 280, 40, "text");

let intervalSet = false;

const canvasWidth = myCanvas.width;
const canvasHeight = myCanvas.height;


function startGame(){    
    myPlayer.gravity = 0.05;
    myGameArea.start();
}

function startGameAgain(myPlayer){
    myPlayer.gravity = 0.05;
    myGameArea.start();
}

function Component(width, height, color, x, y, type){
    this.score = 0;
    this.width = width;
    this.height = height;
    this.color = color;
    this.x = x;
    this.y = y;
    this.speedX = 0;
    this.speedY = 0;
    this.type = type;
    this.gravity = 0;
    this.gravitySpeed = 0;
    this.update = function() {
        if (this.type == "player block"){
            //console.log(this.type + " is at x: " + this.x + " y: " + this.y);
        }
        context = myGameArea.context;
        if (this.type == "text"){
            this.gravity = 0;
            context.font = this.width + " " + this.height;
            context.fillStyle = this.color;
            context.fillText(this.text, this.x, this.y)
        }
        else {
            context.fillStyle = this.color;
            context.fillRect(this.x, this.y, this.width, this.height);
        }
    }
    this.moveComponent = function() {
        if (this.gravitySpeed >= 0 && this.gravitySpeed > this.gravity
            ||this.gravitySpeed <= 0 && this.gravitySpeed < this.gravity){
            this.gravity*100;
        }
        this.gravitySpeed += this.gravity;
    
        if (this.gravitySpeed < -3){
            this.gravitySpeed = -3;
        }
        this.x += this.speedX;
        this.y += this.speedY + this.gravitySpeed;
        
        let bottom = myCanvas.height - this.height;
        let top = 0;
        //console.log("this.y: " + this.y + " bottom: " + bottom + " myGameArea.height: " + myGameArea.height + " this.height: " + this.height);
        //console.log("myPlayer.gravitySpeed: " + myPlayer.gravitySpeed);
        if(this.y < top){
            this.y = top;
        }
        if (this.y >= bottom){
            this.y = bottom;
            this.gravitySpeed = 0;
        }
        else {
            this.y += this.speedY + this.gravitySpeed;
        }
    }
    this.isCrashedWith = function(otherObj) {
        let leftX = this.x;
        let rightx = this.x + this.width;
        let topY = this.y;
        let bottomY = this.y + this.height;

        let otherLeftX = otherObj.x;
        let otherRightX = otherObj.x + otherObj.width;
        let otherTopY = otherObj.y;
        let otherBottomY = otherObj.y + otherObj.height;
        
        if (leftX > otherRightX || rightx < otherLeftX || topY > otherBottomY || bottomY < otherTopY){
            //console.log("did not crash");
            return false;
        }
        else {
            //console.log("Crashed: " + leftX + ">" + otherRightX+ "||" + rightx + ">" + otherLeftX + "||" + topY + ">" + otherBottomY + "||" + bottomY + "<" + otherTopY);
            return true;
        }
    }
}

let myGameArea = {
    gameOver: false,
    start: function() {
        this.context = myCanvas.getContext("2d");
        this.height = 
        this.frameNo = 0;

        try {
            clearInterval(interval);
        }
        catch{
            console.log("did not work");
        }
        if (!intervalSet){
            this.interval = setInterval(updateGameArea, 20);
            intervalSet = true;
        }
        
    },
    clear: function() {
        this.context.clearRect(0,0, myCanvas.width, myCanvas.height);
    }
}

function updateGameArea() {
    
    let height, gap, minHeight, maxHeight, minGap, maxGap;
    for (i = 0; i < myObstacles.length; i ++){
        if (myPlayer.isCrashedWith(myObstacles[i])) {
            if (myGameArea.gameOver == false){
                myGameArea.gameOver = true;
                createRetryButton();
            }
            return;
        }
    }
    myGameArea.clear();
    myGameArea.frameNo += 1;
    if (myGameArea.frameNo == 1 || (myGameArea.frameNo / 150) % 1 == 0) {
        minHeight = 10;
        maxHeight = 230;
        minGap = 70;
        maxGap = 150;
        height = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight); //This is the height of the top of the gap.
        gap = Math.floor(Math.random() * (maxGap-minGap + 1) + minGap);
        myObstacles.push(new Component(15, height, "black", canvasWidth, 0)); //Top block
        myObstacles.push(new Component(15, canvasHeight - height - gap, "red", canvasWidth, height + gap)) ; //Bottom block
    }
    for (let i = 0; i < myObstacles.length; i += 1){
        myObstacles[i].x += -1;
        myObstacles[i].update();
    }
    
    myScore.text = "Score: " + myGameArea.frameNo; 
    myScore.update();
    myPlayer.moveComponent();
    myPlayer.update();
}

function createRetryButton(){
    let retryButton = document.createElement("BUTTON");
        retryButton.setAttribute("id","retry-button");
        retryButton.innerHTML = "Retry?";
        let canvasDiv = document.getElementById("canvas-div");
        canvasDiv.appendChild(retryButton);
        retryButton.addEventListener("click", function() {
            myGameArea.frameNo = 0;
            for (i = 0; i < myObstacles.length; i ++){
                myObstacles = [];
                myGameArea.gameOver = false;
            }
            retryButton.parentNode.removeChild(retryButton);
        });
        myPlayer.x = 10;
        myPlayer.y = 20;
        startGameAgain(myPlayer);
    
}

function jump(n) {
    console.log("myPlayer.speedY: " + myPlayer.speedY)
    let bottom = myCanvas.height - this.height;
    if (myPlayer.y >= bottom){
        myPlayer.gravitySpeed = -50;
    }
    else {
        myPlayer.gravity = n;
    }
    
}