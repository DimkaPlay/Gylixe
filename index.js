const Discord=require('discord.js');
const bot = new Discord.Client();


bot.on('message',(message)=> {
if(message.content== "^help") { 
message.channel.send("***^help-помощь по командам***");
}
});

bot.on('message',(message)=> {
    if(message.content== "^author") { 
    message.channel.send("***автор бота*** @!428036906723573760");
    }
    });

robot.login(process.env.BOT_TOKEN);
