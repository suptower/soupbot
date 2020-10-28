const Discord = require('discord.js');
module.exports = {
	name: 'apored',
    description: 'WIR SIND DA DIGGA JA DIGGA',
    cooldown: 15,
	execute(message, args) {
        let stream = "";
        const auRole = message.guild.roles.cache.find(role => role.name === "AUSOUP"); 
        console.log("apored command has been initiated.");
        var audios = ['https://media1.vocaroo.com/mp3/1eFMVKvdQFox,https://media1.vocaroo.com/mp3/1lU6ntQhRJMv','https://media1.vocaroo.com/mp3/1lU6ntQhRJMv','https://media1.vocaroo.com/mp3/1hsowxIhFqTY',
        'https://media1.vocaroo.com/mp3/1oBYk0IlYotH','https://media1.vocaroo.com/mp3/1h1Q8kyC1Grd','https://media1.vocaroo.com/mp3/1e3YI7NSJNm2','https://media1.vocaroo.com/mp3/1lCvwhST5bgJ',
        'https://media1.vocaroo.com/mp3/11MdyNpsZoou','https://media1.vocaroo.com/mp3/11rDYBEFsu4e','https://media1.vocaroo.com/mp3/15aewUfYg5My','https://media1.vocaroo.com/mp3/11MZ6EKPHcVe',
        'https://media1.vocaroo.com/mp3/12m68wH2dlj2'];
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
            return message.reply("this server has not configured 'AUROLE'.\nPlease create this role to configure permissions for alternative usage of commands.");
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