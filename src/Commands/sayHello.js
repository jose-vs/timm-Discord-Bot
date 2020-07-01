module.exports = { 
    name: 'sayHello', 
    description: 'bot will say hello', 
    execute(message) { 
        const serverQueue = message.client.queue.get(message.guild.id);
//        const args = message.content.split(".");
//        switch (args[0]){
//           case('sayHello'):
                return message.channel.send('hello');
//        }
       // message.reply('hello'); 
    },
};