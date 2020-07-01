module.exports = { 
    name: 'sayhello', 
    description: 'says hello', 
    execute(message) { 
        message.channel.send('hello');
    },
};