const Discord = require('discord.js');
const request = require('request');
const robot = new Discord.Client();
var p = "^"

robot.on('ready', () => {
    robot.user.setActivity('loading..',{ type: "PLAYING" })
    robot.user.setStatus('dnd')
    setTimeout(status1, 16000)
    console.log('ready launched bot...')
});

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
