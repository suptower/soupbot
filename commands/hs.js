const Discord = require('discord.js');
module.exports = {
    name: 'hs',
    cooldown: 10,
	description: 'Use the hs feature.',
	execute(message, args) {
        console.log("hs command has been initiated.");
        const auRole = message.guild.roles.cache.find(role => role.name === "AUSOUP");
        if (!message.member.permissions.has('MOVE_MEMBER')) {
            return message.reply("you are not allowed to use this command.\nYou need to be allowed to move members to execute this.");
        }
		if (!args.length && message.member.voice.channel) {
                const voiceChannel = message.member.voice.channel;

                voiceChannel.join().then(connection => {
                    const stream = 'https://media.vocaroo.com/mp3/jWCRHXWEsTT';
                    const dispatcher = connection.play(stream);
                    dispatcher.on('finish',() => voiceChannel.leave());
            });
            
        }
        else if (!args.length) {
            message.reply('you need to be connected to a voice channel to use this command.');
        }
        else if (message.mentions.users.size>=1 && message.mentions.members.first().voice.channel) {
            if (!auRole) {
                return message.reply("this server has not configured 'AUSOUP'.\nPlease create this role to configure permissions for alternative usage of commands.");
            }
            else {
                if (!message.member.roles.cache.has(auRole.id) && !message.member.permissions.has('ADMINISTRATOR')) {
                    return message.reply("you are not allowed to use this command.\nYou need to have 'AUSOUP' role assigned to execute.");
                }
                const voiceChannel = message.mentions.members.first().voice.channel;
                voiceChannel.join().then(connection => {
                const stream = 'https://media.vocaroo.com/mp3/jWCRHXWEsTT';
                const dispatcher = connection.play(stream);
                dispatcher.on('finish',() => voiceChannel.leave());
                })
            }
                             
            
    }
    else {
        message.reply(`this user is currently not connected to any voice channel.`);
    }
	},
};