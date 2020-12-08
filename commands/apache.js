const Discord = require('discord.js');
module.exports = {
	name: 'apache',
    description: 'APACHE BLEIBT GLEICH',
    cooldown: 30,
	execute(message, args) {
        let stream = "";
        const auRole = message.guild.roles.cache.find(role => role.name === "AUSOUP"); 
        console.log("apache command has been initiated.");
        var audios = ['./apache/2min.mp3','./apache/28liter.mp3','./apache/200kmh.mp3','./apache/2002.mp3','./apache/aufundab.mp3','./apache/beef.mp3','./apache/beifahrer.mp3',
        './apache/bläulich.mp3','./apache/boot.mp3','./apache/brotnachhause.mp3','./apache/dochindernacht.mp3','./apache/durchdiestrassen.mp3','./apache/fame.mp3','./apache/famous.mp3',
        './apache/ferrari.mp3','./apache/greygoose.mp3','./apache/keinproblem.mp3','./apache/kleinehure.mp3','./apache/matrix.mp3','./apache/nichtwiedu.mp3',
        './apache/nieverstehen.mp3','./apache/nono.mp3','./apache/nurnocheinenschluck.mp3','./apache/roller.mp3','./apache/sagmirwer.mp3','./apache/sexmitdir.mp3','./apache/sidechickz.mp3','./apache/sieruft.mp3',
        './apache/stimmen.mp3','./apache/unterwegs.mp3','./apache/wieso.mp3','./apache/keinefragen.mp3'];
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
        message.channel.send("```0 - 2 Minuten\n1 - 28 Liter\n2 - 200 km/h\n3 - 2002\n4 - Auf und ab\n5 - Beef\n6 - Beifahrersitz\n7 - Bläulich\n8 - Boot\n9 - Brot nach Hause"
        + "\n10 - Doch in der Nacht\n11 - Durch die Straßen\n12 - Fame\n13 - Famous\n14 - Ferrari Testarossa\n15 - Grey Goose\n16 - Kein Problem\n17 - Kleine Hure\n18 - Matrix"
        + "\n19 - Nicht wie du\n20 - Nie verstehen\n21 - No No\n22 - Nur noch einen Schluck\n23 - Roller\n24 - Sag mir wer\n25 - Sex mit dir\n26 - Sidechickz\n27 - Sie ruft\n28 - Stimmen"
        + "\n29 - Unterwegs\n30 - Wieso tust du dir das an?\n31 - Keine Fragen```");
    }
    else {
        message.reply(`this user is currently not connected to any voice channel.`);
        }
    },
};