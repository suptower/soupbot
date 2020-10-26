const Discord = require('discord.js');
module.exports = {
    name: 'markus',
    cooldown: 15,
	description: 'Use the markus feature.',
	execute(message, args) {
        console.log("markus command has been initiated.");
        const auRole = message.guild.roles.cache.find(role => role.name === "AUSOUP");
		if (!args.length && message.member.voice.channel) {
                const voiceChannel = message.member.voice.channel;

                voiceChannel.join().then(connection => {
                    const stream = 'https://media1.vocaroo.com/mp3/171vNTBDzzWK';
                    const dispatcher = connection.play(stream);
                    dispatcher.on('finish',() => voiceChannel.leave());
            });
            
        }
        else if (!args.length) {
            return message.reply('you need to be connected to a voice channel to use this command.');
        }
        else if (message.mentions.users.size>=1 && message.mentions.members.first().voice.channel) {
            if (!auRole) {
                return message.reply("this server has not configured 'AUROLE'.\nPlease create this role to configure permissions for alternative usage of commands.");
            }
            else {
                if (!message.member.roles.cache.has(auRole.id) && !message.member.permissions.has('ADMINISTRATOR')) {
                    return message.reply("you are not allowed to use this command.\nYou need to have 'AUSOUP' role assigned to execute.");
                }
                else {
                    const voiceChannel = message.mentions.members.first().voice.channel;
                    voiceChannel.join().then(connection => {
                    const stream = 'https://media1.vocaroo.com/mp3/171vNTBDzzWK';
                    const dispatcher = connection.play(stream);
                    dispatcher.on('finish',() => voiceChannel.leave());
                    })
                }

            }
            
                             
            
    }
    else {
        message.reply(`this user is currently not connected to any voice channel.`);
    }
	},
};