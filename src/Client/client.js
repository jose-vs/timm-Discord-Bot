const { Client, Collection, Attachment} = require('discord.js');

module.exports = class extends Client {
    constructor(config){ 
        super({
            disableEverone: true,
            disabledEvents: ['TYPING_START'],
        }); 

        this.commands = new Collection();
        this.queue = new Map(); 
        this.config = config; 
    }
}