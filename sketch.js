var database;
var position;
var gameState = 0;
var playerCount = 0;
var form, player, game;
var allPlayers;
var car1, car2, car3, car4;
var cars=[];


function setup(){
  database = firebase.database();
  console.log("connected to database");
  createCanvas(displayWidth,displayHeight);

  game = new Game();
  game.getgameState();

  game.start();

  //gameState = 1;
  //game.setgameState();
}

function draw(){
  background("white");

  if(playerCount === 4){
    gameState = 1;
  }
  
  if(gameState === 1){
    game.play();
  }

}