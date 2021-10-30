class Game{
    constructor(){

    }
    getState(){
      var gameStateRef = database.ref('gameState');
      gameStateRef.on("value",function(data){
        gameState = data.val();
      })
    }
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }

    
   
    async start(){
        if(gameState === 0){
          player = new Player();
          var playerCountRef = await database.ref('playerCount').once("value");
          if(playerCountRef.exists()){
            playerCount = playerCountRef.val();
            player.getCount();
          }
          form = new Form()
          form.display();
        }
    }
      play(){
        form.hide();
        background("green");
        track = createSprite(displayWidth/2,displayHeight/2-650,100,100);
        track.addImage("track",trackImg);
        track.scale = 25;
        
        player1 = createSprite(500,600, 50,100);
        player1.addAnimation("player1",blueRunnerImg);
        player1.scale = 0.5;
        player2 = createSprite(875,600, 50,100);
        player2.addImage("player2",redRunnerImg);
        player2.scale = 0.5;
        drawSprites();
      }
      end(){
        console.log("The Game is Over");
      }
}