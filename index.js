const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require('./config.json');
const PREFIX = 'timm.';

Client.login(config.token)

bot.on('ready', ()  =>{
    console.log('This bot is online!');
})

bot.on('message', message=>{
    let args = message.content.substring(PREFIX.length).split('.');

    switch(args[0]){
        case 'sayHello();':
            message.reply('hello');
            break;
    }
})

bot.login(token);
