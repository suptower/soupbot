const Discord = require('discord.js');
module.exports = {
	name: 'andi',
	description: 'oh no',
	execute(message, args) {
        let stream = "";
        const auRole = message.guild.roles.cache.find(role => role.name === "AUSOUP"); 
        console.log("andi command has been initiated.");
        var audios = ['./andi/100kmh.mp3','./andi/ambestengespielt.mp3','./andi/ardagoennen.mp3','./andi/aufstor.mp3','./andi/ballflach.mp3','./andi/chrise1.mp3',
        './andi/chrise2.mp3','./andi/chrise3.mp3','./andi/clipoder.mp3','./andi/kante.mp3','./andi/kola.mp3','./andi/mosinab.mp3','./andi/ohnein.mp3','./andi/scheisse.mp3',
        './andi/tilt.mp3','./andi/vergraben.mp3'];
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
        message.channel.send("0 - Unterwegs mit 100 km/h\n1 - ICH HAB AM BESTEN GESPIELT\n2 - Einfach Arda gönnen\n3 - DER GEHT AUFS TOR\n4 - BALL FLACH HALTEN\n5 - Ganz Casual Tilt gegen Chrise 1"
        +"\n6 - Ganz Casual Tilt gegen Chrise 2\n7 - Ganz Casual Tilt gegen Chrise 3\n8 - Du clippst schon oder?\n9 - Kante geben\n10 - Wie viel Kola hat Zucker?\n11 - Ganz Casual Tilt gegen Mosi\n12 - OH NEIN\n"
        +"13 - Ganz Casual Tilt\n14 - Ganz Casual Tilt gegen Arda");
    }
    else {
        message.reply(`this user is currently not connected to any voice channel.`);
        }
	},
};