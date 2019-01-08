const Discord = require("discord.js");
const bot = new Discord.Client({autoReconnect:true});

bot.on("ready", () => {
  console.log("By Savage");
  console.log("Logged in " + bot.user.username);
});

bot.login(process.env.BOT_TOKEN);
const ownerid = "489342754887827487";
const prefix = ".";

bot.on('message', message => {
  if (!message.content.startsWith(prefix)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.id !== ownerid) return;

  if (message.content.startsWith(prefix + 'wa')) {
                
      if(argresult){
         message.channel.send("**Watching: **" + "`" + `${argresult}` + "`" ).then(message => {message.delete(3000)})
        bot.user.setActivity(argresult, {type:'WATCHING'});
      } else 
      if(!argresult) {
      message.channel.send("**December is an error**").then(message => {message.delete(3000)})          
      }
    message.delete(3000);
  } else
   if (message.content.startsWith(prefix + 'st')) {
                
      if(argresult){
         message.channel.send("**Streaming: **" + "`" + `${argresult}` + "`" ).then(message => {message.delete(3000)})
        bot.user.setActivity(argresult, {type:'STREAMING', url:"https://www.twitch.tv/TheFuture"});
      } else 
      if(!argresult) {
      message.channel.send("**December is an error**").then(message => {message.delete(3000)})          
      }
    message.delete(3000);
  } else
	    if (message.content.startsWith(prefix + 'pl')) {
             
      if(argresult){
         message.channel.send("**Playing: **" + "`" + `${argresult}` + "`" ).then(message => {message.delete(3000)})
        bot.user.setActivity(argresult, {type:'PLAYING'});
      } else 
      if(!argresult) {
      message.channel.send("**December is an error**").then(message => {message.delete(3000)})          
      }
    message.delete(3000);
  } else
  
    if (message.content.startsWith(prefix + 'li')) {
               
      if(argresult){
         message.channel.send("**Listening To: **" + "`" + `${argresult}` + "`" ).then(message => {message.delete(3000)})
        bot.user.setActivity(argresult, {type:'LISTENING'});
      } else 
      if(!argresult) {
      message.channel.send("**December is an error**").then(message => {message.delete(3000)})          
      }
    message.delete(3000);
  } else
	  if (message.content.startsWith(prefix + "dnd")) {
        message.channel.send("**Done Changing Your Status To `DND`**").then(message => {message.delete(3000)})
        message.delete(3000);
		  bot.user.setStatus("dnd");
	  } else
		  
      if (message.content.startsWith(prefix + "idle")) {
        message.channel.send("**Done Changing Your Status To `IDLE`**").then(message => {message.delete(3000)})
        message.delete(3000);
		  bot.user.setStatus("idle");
	  } else
		  
	  if (message.content.startsWith(prefix + "off")) {
          message.channel.send("**Done Changing Your Status To `OFFLINE`**").then(message => {message.delete(3000)})
          message.delete(3000);
		  bot.user.setStatus("invisible");
	  } else 

       if (message.content.startsWith(prefix + "مسح")) {

        let count = parseInt(args[0]) || 1;

          message.delete();
          message.channel.fetchMessages({ limit: Math.min(count, 100), before: message.id }).then(messages => {
          const prunable = messages.filter(m => m.author.id === bot.user.id);

        return Promise.all(
            prunable.map(m => m.delete())
        ).then(() => {
        });
    }).catch(message.error);
    
} else
       if (message.content.startsWith(prefix + "av")) {
           var mentionned = message.mentions.users.first();
    var MsH;
      if(mentionned){
          var MsH = mentionned;
      } else {
          var MsH = message.author;
          
      }
          message.channel.send(MsH.avatarURL)
          message.delete(3000);
	  } 
		  
});
