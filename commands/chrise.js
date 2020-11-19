const Discord = require('discord.js');
module.exports = {
	name: 'chrise',
    description: 'ze legend itself',
	execute(message, args) {
        let stream = "";
        const auRole = message.guild.roles.cache.find(role => role.name === "AUSOUP"); 
        console.log("apache command has been initiated.");
        var audios = ['./chrise/chrisesus.mp3','./chrise/dimitriruntervonmir.mp3','./chrise/eiercreme.mp3',
            './chrise/ichweissnichtwas.mp3','./chrise/tuerkischeasy.mp3','./chrise/wtfmyfriend.mp3','./assets/mo5i.mp3','./chrise/mosesdukannstnix.mp3',
        './chrise/goenndoch.mp3','./chrise/schrei1.mp3','./chrise/eywas.mp3','./chrise/offense.mp3','./chrise/eztilt.mp3','./chrise/fullint.mp3','./chrise/andigehdochweg.mp3',
        './chrise/keineahnung.mp3','./chrise/schrei2.mp3','./chrise/schrei3.mp3','./chrise/schrei4.mp3'];
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
        message.channel.send("0 - Chrise sus\n1 - Dimitri, runter von mir\n2 - Eiercreme\n3 - Ich weiss nicht\n4 - Turkish for Anfänger\n5 - wtf my friend?\n6 - YAAAAA MOSIIIII"
        +"\n7 - MOSES DU KANNST NIX\n8 - GÖNN DOCH\n9 - Schrei 1\n10 - EY WAS IST DES DENN\n11 - Schlechtester Offense überhaupt\n12 - EZ TILT\n13 - Full int\n"
        +"14 - Ganz Casual Tilt gegen Andi\n15 - Keine Ahnung\n16 - Schrei 2\n17 - Schrei 3\n18 - Schrei 4");
    }
    else {
        message.reply(`this user is currently not connected to any voice channel.`);
        }
	},
};