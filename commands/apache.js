const Discord = require('discord.js');
module.exports = {
	name: 'apache',
    description: 'APACHE BLEIBT GLEICH',
    cooldown: 10,
	execute(message, args) {
        let stream = "";
        const auRole = message.guild.roles.cache.find(role => role.name === "AUSOUP"); 
        console.log("apache command has been initiated.");
        var audios = ['https://media1.vocaroo.com/mp3/1dBnkSk3PUQB','https://media1.vocaroo.com/mp3/1zEgUZSXKXxW','https://media1.vocaroo.com/mp3/1UudwYBw4jAu','https://media1.vocaroo.com/mp3/1jGoUViPQAX2','https://media1.vocaroo.com/mp3/148OoAA35r60',
        'https://media1.vocaroo.com/mp3/1l68Kga1Un7G','https://media1.vocaroo.com/mp3/18jQYdmEngkI','https://media1.vocaroo.com/mp3/1h8cwaE7dH1y','https://media1.vocaroo.com/mp3/1mayqd1iy5uQ','https://media1.vocaroo.com/mp3/16D3bJZ1StOc',
        'https://media1.vocaroo.com/mp3/1nmtxNeig20i'];
        const stream = Math.round(Math.random()*(audios.length-1));
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