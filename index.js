const Discord = require('discord.js');
const request = require('request');
const bot = new Discord.Client();
var p = "^"

bot.on('ready', () => {
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

bot.login(process.env.BOT_TOKEN);
