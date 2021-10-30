var database;
var gameState = 0;
var playerCount = 0;

var form, player, game;
var blueRunnerImg, redRunnerImg, trackImg, waterBottleImg, potholeImg;
var track, player1, player2;

function preload(){
blueRunnerImg = loadImage("images/runnerblue.png");
redRunnerImg = loadImage("images/runnerred.png");
trackImg = loadImage("images/trackforgame.jpg");
waterBottleImg = loadImage("images/waterbottle.png");
potholeImg = loadImage("images/pothole.png");
}

function setup(){
createCanvas(windowWidth,windowHeight);
database = firebase.database();
game = new Game;
game.getState();
game.start();
}

function draw(){
//background("white");
if(playerCount === 2){
    game.update(1);
}
if(gameState === 1){
    game.play();
}
if(gameState === 2){
    game.end();
}

if(keyDown(UP_ARROW)){
    camera.y = camera.y - 30;
    console.log(mouseX, mouseY);
}
if(keyDown(DOWN_ARROW)){
    camera.y = camera.y + 30;
}
}