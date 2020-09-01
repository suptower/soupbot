const Discord = require('discord.js');
module.exports = {
	name: 'mm',
    description: 'moooin meisteeer',
    cooldown: 10,
	execute(message, args) {
        let stream = "";
        const auRole = message.guild.roles.cache.find(role => role.name === "AUSOUP"); 
        console.log("mm command has been initiated.");
        const value = Math.round(Math.random()*4);
        switch (value) {
            case 0:
                stream = 'https://media1.vocaroo.com/mp3/1d2uJN1BHCMS';
                break;
            case 1:
                stream = 'https://media1.vocaroo.com/mp3/1kKocCqcEZdV';
                break;
            case 2:
                stream = 'https://media1.vocaroo.com/mp3/1nv4IckXsCTl';
                break;
            case 3:
                stream = 'https://media1.vocaroo.com/mp3/1lwc7EQZYH4H';
                break;
            case 4:
                stream = 'https://media1.vocaroo.com/mp3/1axh0IStlpQ6';
                break;
            default:
                stream = 'https://media1.vocaroo.com/mp3/1axh0IStlpQ6';
                break;
        }

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
            if (!message.member.roles.cache.has(auRole.id)) {
                return message.reply("you are not allowed to use this command.\nYou need to have 'AUROLE' assigned to execute.");
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