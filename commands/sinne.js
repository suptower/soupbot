const Discord = require('discord.js');
module.exports = {
    name: 'sinne',
    cooldown: 15,
	description: 'Makes use of the Sinne function.',
	execute(message, args) {
        console.log("sinne command has been initiated.");
        if (!args.length && message.member.voice.channel) {
            const voiceChannel = message.member.voice.channel;
            voiceChannel.join().then(connection => {
                const stream = 'https://media1.vocaroo.com/mp3/18Pzg0TyUdXX';
                const dispatcher = connection.play(stream);
                dispatcher.on('finish', () => voiceChannel.leave());
            })
        }
        else if (!args.length) {
            return message.reply("you need to be connected to a voice channel.");
        }
        else if (message.mentions.users.size>=1 && message.mentions.members.first().voice.channel) {
            if (!message.member.permissions.has("MOVE_MEMBERS")) {
                return message.reply("you are not allowed to use this command.\nYou need to be able to move members to execute this.");
            }
            const voiceChannel = message.mentions.members.first().voice.channel;
            voiceChannel.join().then(connection => {
                const stream = 'https://media1.vocaroo.com/mp3/18Pzg0TyUdXX';
                const dispatcher = connection.play(stream);
                dispatcher.on('finish', () => voiceChannel.leave());
            })
        }
        else {
            return message.reply("this user is not connected to a voice channel.");
        }
	},
};