const Discord = require('discord.js');
module.exports = {
	name: 'server',
	cooldown: 30,
	description: 'Shows server related information.',
	execute(message, args) {
		console.log("server command has been initiated.");
        message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}
        \nCreation Date: ${message.guild.createdAt}\nRegion: ${message.guild.region}`);
	},
};