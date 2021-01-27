const Discord = require('discord.js');
module.exports = {
	name: 'wow',
    description: 'WOW',
	execute(message, args) {
        let stream = "";
        const auRole = message.guild.roles.cache.find(role => role.name === "AUSOUP"); 
        console.log("wow command has been initiated.");
        var audios = ['./wow/1.mp3','./wow/2.mp3','./wow/3.mp3','./wow/4.mp3','./wow/5.mp3','./wow/6.mp3','./wow/7.mp3','./wow/8.mp3','./wow/9.mp3','./wow/10.mp3','./wow/11.mp3'
                ,'./wow/12.mp3','./wow/13.mp3','./wow/14.mp3','./wow/15.mp3','./wow/16.mp3','./wow/17.mp3','./wow/18.mp3'];
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
        message.channel.send("```0 - Ich steh oben ohne vor der Crowd\n1 - Backstage treff ich deine Frau\n2 - Mit der Brille sieht sie aus als wär sie schlau\n3 - Zwei Jägi Shots und sie miaut\n4 - Du warst mal beteiligt an 'nem Raub\n5 - Hurensohn wer dir das glaubt\n6 - Wie ich sehe hast du grade einen Lauf"
        +"\n7 - Erste Woche dreitausend verkauft\n8 - Ich mach nen 5er jeden Tag und geb es aus\n9 - 100 Düsen sind gebunkert in der Couch\n10 - Mit dem Helikopter stehst du nicht im Stau\n11 - Durch das Dollar-Zählen werden Finger blau\n12 - Guck mal dieses gottverdammte Leben ist ein Traum\n13 - Freitag ist Klausur und du machst blau\n"
        +"14 - Du nennst sie nach einer Woche Frau\n15 - Dein Couseng dritten Grades saß im Bau\n16 - Du liest manchmal Goethe oder Faust\n17 - WOW```");
    }
    else {
        message.reply(`this user is currently not connected to any voice channel.`);
        }
	},
};