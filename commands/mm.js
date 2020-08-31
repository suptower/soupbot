const Discord = require('discord.js');
module.exports = {
	name: 'mm',
	description: 'moooin meisteeer',
	execute(message, args) {
        let stream = "";
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
        if (!message.member.permissions.has('MOVE_MEMBERS')) {
            return message.reply("you are not allowed to use this command.\nYou need to be allowed to move members to execute this.");
        }
        const voiceChannel = message.mentions.members.first().voice.channel;
        voiceChannel.join().then(connection => {
        const dispatcher = connection.play(stream);
        dispatcher.on('finish',() => voiceChannel.leave());
        })
    
    }
    else {
        message.reply(`this user is currently not connected to any voice channel.`);
        }
    },
};