const venom = require("venom-bot");
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

venom.create( )
  .then((client) => sendTefillin(client))
  .catch((erro) => {
    console.log(erro);
  });
async function sendTefillin(client){
  //client.sendText('972526063061-1473152587@g.us',"Sim Tefillin Tzadik");
  var prevDay = 0;
  while(true){
    var d = new Date();
    var hour = d.getHours();
    var day = d.getDate();
    if (prevDay !== day && hour == 15){
      prevDay = day;
      console.log ("prevDay!== day:" + (prevDay !== day) )
      console.log("PrevDay:" + prevDay);
      console.log("Today:" + day);
      client.sendImageAsStickerGif('972526063061-1473152587@g.us',"./tefillin.webp");
     
    await sleep(60000);

    }
}
async function testTefillin(client){
  //client.sendText('972526063061-1473152587@g.us',"Sim Tefillin Tzadik");
    await sleep(1000);
    await client.sendImageAsStickerGif('972526063061-1473152587@g.us',"./tefillin.webp");
}
async function start(client) {
	//await client.sendText('972526063061-1473152587@g.us',"You're mum is the gay");
	await client.onMessage(async (message) => {
      if (message.mimetype == undefined){
     	await client.sendText(message.from,message.body); // replicated message
      }
	});
}
