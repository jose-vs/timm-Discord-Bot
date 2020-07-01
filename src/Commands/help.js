const fs = require('fs')

module.exports = {
	name: 'help',
	description: 'List all available commands.',
	execute(message) {
        let str = '```';
        let count = 1;
		const commandFiles = fs.readdirSync('./src/commands').filter(file => file.endsWith('.js'));

		for (const file of commandFiles) {
			const command = require(`./${file}`);
            str += count + ` Name: ${command.name}, Description: ${command.description} \n`;
            count++;
        }
        
        str += '```';

		message.channel.send(str);
	},
};