const Discord = require('discord.js');
module.exports = {
    name: 'markus',
	description: 'Use the markus feature.',
	execute(message, args) {
        let stream = "";
        const auRole = message.guild.roles.cache.find(role => role.name === "AUSOUP"); 
        console.log("markus command has been initiated.");
        var audios = ['./markus/aua.mp3','./markus/blitz.mp3','./markus/bummsen.mp3','./markus/dreirein.mp3','./markus/duhuanson.mp3','./markus/erkenntnis.mp3',
        './markus/ezstadtwerke.mp3','./markus/feuerwehrschlauch.mp3','./markus/gebummst.mp3','./markus/gefuehl.mp3','./markus/krisse.mp3','./markus/pengpeng.mp3',
        './markus/restarten.mp3','./markus/schabernack.mp3','./markus/scheisselabert.mp3','./markus/schwitzen.mp3','./markus/tuerzu.mp3','./markus/duplo.mp3','./markus/polishkid.mp3'];
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
    else if (!(isNaN(parseInt(args[0])))) {
        if (parseInt(args[0])>=0 && parseInt(args[0]) < audios.length) {
            stream = audios[parseInt(args[0])];
            if (!args[1] && message.member.voice.channel) {
                const voiceChannel = message.member.voice.channel;

                voiceChannel.join().then(connection => {
                    const dispatcher = connection.play(stream);
                    dispatcher.on('finish',() => voiceChannel.leave());
                })
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
                message.reply('No connection available.');
            }
        }
        else {
            return message.reply("your given number is not in accepted range.");
        }
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
    else if (args[0] === "info") {
        message.channel.send("```0 - AUA\n1 - Blitz beim Scheissen\n2 - Er bummst mich\n3 - DREI REIN\n4 - DU HUANSON\n5 - Erkenntnis\n6 - EZ STADTWERKE\n7 - Feuerwehrschlauch"+
        "\n8 - OMG GEBUMMST\n9 - Gefühl\n10 - KRISSE???\n11 - PENG PENG\n12 - Bitte restarten\n13 - GENUG SCHABERNACK\n14 - Ganz Casual Tilt gegen Krisse\n15 - Schwitzen" +
        "\n16 - Tür zu amk\n17 - DUPLO\n18 - POLISH KID```");
    }
    else {
        message.reply(`this user is currently not connected to any voice channel.`);
        }
	},
};