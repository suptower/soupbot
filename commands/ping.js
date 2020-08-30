const Discord = require('discord.js');
module.exports = {
	name: 'ping',
	description: 'Sends back "Pong."',
	execute(message, args) {
		console.log("ping command has been initiated.");
		message.channel.send('Pong.');
	},
};