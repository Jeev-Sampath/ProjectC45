class Player{
    constructor(){
        this.index = null;
        this.name = null;
        this.rank = null;
        this.distance = null;
    }
    getCount(){
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value",(data)=>{
          playerCount = data.val();
        })
      }
      updateCount(count){
        database.ref('/').update({
          playerCount: count
        });
      }
}