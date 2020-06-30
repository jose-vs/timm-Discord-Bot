require('dotenv').config(); 
const { Client } = require('discord.js'); 
const { ErelaClient } = require('erela.js'); 
const bot = new Client();
const PREFIX = process.env.BOT_PREFIX;

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

bot.login(process.env.BOT_TOKEN);