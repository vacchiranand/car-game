class Game{
constructor(){

}
getstate(){
    var gamestateref = database.ref('gamestate');
  gamestateref.on("value",function(data){
      gamestate = data.val();

  })  
}
update(state){
    database.ref('/').update({
        gamestate:state

    })
}
async start(){
    if(gamestate === 0 ){
        player = new Player();
        var playercountref = await database.ref('playercount').once("value");
        if(playercountref.exists()){
            playercount = playercountref.val();
            player.getcount();
        }
        form = new Form();
        form.display();
        
    }
    car1 = createSprite(100,200);
    car1.addImage("car1",car1image);
    car2 = createSprite(300,200);
    car2.addImage("car2",car2image);
    car3 = createSprite(500,200);
    car3.addImage("car3",car3image);
    car4 = createSprite(700,200);
    car4.addImage("car4",car4image);
    cars = [car1,car2,car3,car4];
    

}
play(){
    form.hide();
    Player.getplayerinfo();
    if(allplayer!=undefined){
        background(rgb(198,135,100));
        image(track,0,-displayHeight*4,displayWidth,displayHeight*5);
        //var displayposition = 130;
        var index = 0;
        var x = 175;
        var y;
        for(var plr in allplayer){
        index = index+1;
        x = x+200;
        y = displayHeight-allplayer[plr].distance;
        cars[index-1].x = x;
        cars[index-1].y = y;
            if(index == player.index){
        cars[index-1].shapeColor = "red";
        camera.position.x = displayWidth/2;
        camera.pasition.y = cars[index-1].y;
            
            }
        }
        }
        if(keyIsDown(UP_ARROW)&& player.index != null){
            player.distance+= 10;
            player.update()
        }
        if(player.distance > 4000){
            gamestate = 2;
        }
        drawSprites();
}
end(){
    console.log("gameend");
}

}