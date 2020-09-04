const Discord = require('discord.js');
module.exports = {
    name: 'forsti18',
    cooldown: 10,
	description: 'Brother must cosinus.',
	execute(message, args) {
        console.log("hs command has been initiated.");
        const auRole = message.guild.roles.cache.find(role => role.name === "AUSOUP");
		if (!args.length && message.member.voice.channel) {
                const voiceChannel = message.member.voice.channel;

                voiceChannel.join().then(connection => {
                    const stream = 'https://media1.vocaroo.com/mp3/1o9ZgXpdxpYW';
                    const dispatcher = connection.play(stream);
                    dispatcher.on('finish',() => voiceChannel.leave());
            });
            
        }
        else if (!args.length) {
            return message.reply('you need to be connected to a voice channel to use this command.');
        }
    else {
        message.reply(`something went wrong.`);
    }
	},
};