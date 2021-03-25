class Form{

constructor(){

    this.button = createButton('Play');
    this.input = createInput("Name");
    this.greeting = createElement('h3');

}

display(){

    var title = createElement('h2');
    title.html("Car Race Game");
    title.position(350, 0);
    this.input.position(350, 160);
    this.button.position(350, 200);
    this.button.mousePressed(()=>{
        player.name = this.input.value();
        playerCount+=1;
        player.index = playerCount;
        player.updatePlayerDetails();
        player.updatePlayerCount(playerCount);
        this.input.hide();
        this.button.hide();
        this.greeting.html("Hello, "+player.name);
        this.greeting.position(350, 160);
    });

}

hide(){

    this.button.hide();
    this.input.hide();
    this.greeting.hide();

}

}