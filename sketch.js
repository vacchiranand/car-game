var gamestate = 0;
var playercount = 0;
var database;
var form,game,player;
var allplayer;
var distance = 0;
var cars,car1,car2,car3,car4;
var track,car1image,car2image,car3image,car4image;
function preload(){
    track = loadImage("images/track.png");
    car1image = loadImage("images/car1.png");
    car2image = loadImage("images/car2.png");
    car3image = loadImage("images/car3.png");
    car4image = loadImage("images/car4.png");
}
function setup(){
    createCanvas(displayWidth-20,displayHeight-30);
    database = firebase.database();
    game = new Game();
    game.getstate();
    game.start();
    
}




function draw(){
    background("white");
    if(playercount == 4){
    game.update(1);
    }
   if(gamestate == 1){
       clear();
       game.play();
       
   }
   if(gamestate == 2){
       game.end();
   }
}