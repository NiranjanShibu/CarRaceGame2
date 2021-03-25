class Game{

constructor(){



}

getgameState(){

    var gameStateRef = database.ref('gameState');
    gameStateRef.on("value", function(data){
        gameState = data.val();
        console.log("Gamestate " + gameState);
    });

}

setgameState(){

    var gameStateRef = database.ref('/');
    gameStateRef.update({

        gameState: gameState

    });

}

start(){

    form = new Form();
    player = new Player();
    form.display();
    player.getPlayerCount();
    car1 = createSprite(100, 200);
    car2 = createSprite(300, 200);
    car3 = createSprite(500, 200);
    car4 = createSprite(700, 200);
    cars=[car1, car2, car3, car4];

}

play(){

    form.hide();
    textSize(30);
    text("GAME HAS STARTED", 60, 100);
    Player.getPlayerDetails();
    console.log("All player: "+allPlayers);

    if(keyIsDown(UP_ARROW) && player.index != null){
        player.distance+=50;
        player.updatePlayerDetails();
    }

    if(allPlayers !== undefined){

        var index = 0;
        var carIndex = 0;
        var x = 0;
        var y = 0;

        for(var plr in allPlayers){
            carIndex = index;
            index+=1;
            console.log("carIndex: "+carIndex);
            console.log("Index: "+index);
            console.log("playerIndex: "+player.index);
            x = x+200;
            y = displayHeight-allPlayers[plr].distance-60;
            cars[carIndex].x = x;
            cars[carIndex].y = y;
            if(index===player.index){
                cars[carIndex].shapeColor = "green";
                camera.position.x = displayWidth/2;
                camera.position.y = cars[carIndex].y;
            }
        }
        
    }

    drawSprites();

}

}