class Player{

    constructor(){
    
        this.name = null;
        this.index = null;
        this.distance = 0;
    
    }
    
    display(){
    
    
        
    }

    getPlayerCount(){

        var playerCountRef = database.ref('playerCount')

        playerCountRef.on("value", function(data){
        playerCount = data.val();   
        })
    }

    updatePlayerCount(count){

        database.ref('/').update({
            playerCount: count
        })

    }

    updatePlayerDetails(){

        var playerIndex = "players/player"+this.index;
        var playerDetailRef = database.ref(playerIndex)

        playerDetailRef.set({
            name: this.name,
            distance: this.distance
        })
    }

    static getPlayerDetails(){

        var playerDetail = database.ref('players');
        playerDetail.on("value", (data)=>{
            allPlayers = data.val();
        })

    }
    
    }