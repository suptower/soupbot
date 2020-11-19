const Discord = require('discord.js');
module.exports = {
	name: 'chrise',
    description: 'ze legend itself',
    cooldown: 15,
	execute(message, args) {
        let stream = "";
        const auRole = message.guild.roles.cache.find(role => role.name === "AUSOUP"); 
        console.log("apache command has been initiated.");
        var audios = ['https://media1.vocaroo.com/mp3/16yo3BcNwl2C','https://media1.vocaroo.com/mp3/1f1E2poraB13','https://media1.vocaroo.com/mp3/162XLhdxal5S',
        'https://media1.vocaroo.com/mp3/1bG1oEqBpHga','https://media1.vocaroo.com/mp3/1e2aTVKnJmaj','https://media1.vocaroo.com/mp3/15rZKuc8ICw9',
        'https://media1.vocaroo.com/mp3/1o9ZNbALoY0S'];
        let value = Math.round(Math.random()*(audios.length-1));
        stream = audios[value];
    if (!args.length && message.member.voice.channel) {
        const voiceChannel = message.member.voice.channel;

        voiceChannel.join().then(connection => {
            const dispatcher = connection.play(stream);
            dispatcher.on('finish',() => voiceChannel.leave());
    });
        
    }
    else if (!args.length) {
        return message.reply('you need to be connected to a voice channel to use this command.');
    }
    else if (message.mentions.users.size>=1 && message.mentions.members.first().voice.channel) {
        if (!auRole) {
            return message.reply("this server has not configured 'AUSOUP'.\nPlease create this role to configure permissions for alternative usage of commands.");
        }
        else {
            if (!message.member.roles.cache.has(auRole.id) && !message.member.permissions.has('ADMINISTRATOR')) {
                return message.reply("you are not allowed to use this command.\nYou need to have 'AUSOUP' role assigned to execute.");
            }
            else {
                const voiceChannel = message.mentions.members.first().voice.channel;
                voiceChannel.join().then(connection => {
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