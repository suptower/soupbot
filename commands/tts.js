module.exports = {
	name: 'tts',
    description: 'uses text-to-speech provided by voice rss api',
    cooldown: 15,
	execute(message, args) {
        console.log("tts command has been initiated.");
        const auRole = message.guild.roles.cache.find(role => role.name === "AUSOUP");
        if (message.mentions.users.size==0 && message.member.voice.channel) {
            const voiceChannel = message.member.voice.channel;
            const str1='http://api.voicerss.org/?key=de876d46f8d44255aa7b445628cc32a0&hl=de-de&v=Jonas&c=MP3&f=16khz_16bit_stereo&src=';
            const str2 = args.join(' ');
            const link = str1.concat(str2);
            voiceChannel.join().then(connection => {
                const dispatcher = connection.play(link);
                dispatcher.on('finish',() => voiceChannel.leave(link));
        });
        
        }
        else if (message.mentions.users.size==0) {
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
                    var toRead = args.slice();
                    toRead.shift();
                    const voiceChannel = message.mentions.members.first().voice.channel;
                    const str1='http://api.voicerss.org/?key=de876d46f8d44255aa7b445628cc32a0&hl=de-de&v=Jonas&c=MP3&f=16khz_16bit_stereo&src=';
                    const str2 = toRead.join(' ');
                    const link = str1.concat(str2);
                    voiceChannel.join().then(connection => {
                        const dispatcher = connection.play(link);
                        dispatcher.on('finish',() => voiceChannel.leave(link));
            })
                }
            }
        }
        else {
            message.reply(`this user is currently not connected to any voice channel.`);
        }
    },
};