const Discord=require('discord.js');
const bot = new Discord.Client();

bot.login("NDU3ODc4MjU0MTU4NjEwNDMz.Dgff7A.KtD3O6kiZuNCtgPbj7JB9EOb150");

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
