
var fs = require('fs'); 

module.exports = { 
    name: 'getproblem', 
    description: 'adds a fie to a list', 
    execute(message){ 
       var allImages = fs.readFileSync('./images/images.txt', 'utf-8'); 
        
        message.channel.send(allImages); 
    },
};