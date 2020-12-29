const Discord = require('discord.js');
module.exports = {
	name: 'rlmafia',
	description: 'Sets up a game of Rocket League Mafia',
	execute(message, args) {
        console.log("rlmafia command has been executed.");
        if (message.member.voice.channel) {
            const voiceChannel = message.member.voice.channel;
            if (voiceChannel.members.size != 6) {
                return message.reply("there need to be exactly 6 people connected to your voice channel in order to start a game of Rocket League Mafia.");
            }
            const players = voiceChannel.members.array();
            let teamblue = voiceChannel.members.array();
            let teamorange = voiceChannel.members.array();
            for (let i = 0; i < 6; i++) {
                teamorange.shift();
            }
            for (let i = teamblue.length-1; i > 0; i--) {
                let j = Math.floor(Math.random()*(i+1));
                let temp = teamblue[i];
                teamblue[i] = teamblue[j];
                teamblue[j] = temp;
            }
            while (teamblue.length > teamorange.length) {
                let ran = Math.round(Math.random()*(teamblue.length-1));
                teamorange.push(teamblue[ran]);
                teamblue.splice(ran,1);
            }
            
            
            message.channel.send("```------------------------------------\n\nROCKET LEAGUE MAFIA TEAM GENERATION\n\n------------ Blue Team ------------\n\n"+teamblue[0].displayName+"\n"+teamblue[1].displayName+"\n"+teamblue[2].displayName+"\n\n------------ Orange Team ------------"+
            "\n\n"+teamorange[0].displayName+"\n"+teamorange[1].displayName+"\n"+teamorange[2].displayName+"\n\n------------------------------------```");

            const random = Math.round(Math.random()*(players.length-1));
            const selected = players[random];
            players.splice(random,1);
            selected.user.send("**ROCKET LEAGUE MAFIA NOTIFICATION:** You have been assigned the role \`Mafia\`");
            selected.user.send("```------------------------------------\n\nROCKET LEAGUE MAFIA TEAM GENERATION\n\n------------ Blue Team ------------\n\n"+teamblue[0].displayName+"\n"+teamblue[1].displayName+"\n"+teamblue[2].displayName+"\n\n------------ Orange Team ------------"+
            "\n\n"+teamorange[0].displayName+"\n"+teamorange[1].displayName+"\n"+teamorange[2].displayName+"\n\n------------------------------------```");
            for (let i=0; i < players.length; i++) {
                players[i].user.send("**ROCKET LEAGUE MAFIA NOTIFICATION:** You have been assigned the role \`Villager\`");
                players[i].user.send("```------------------------------------\n\nROCKET LEAGUE MAFIA TEAM GENERATION\n\n------------ Blue Team ------------\n\n"+teamblue[0].displayName+"\n"+teamblue[1].displayName+"\n"+teamblue[2].displayName+"\n\n------------ Orange Team ------------"+
                "\n\n"+teamorange[0].displayName+"\n"+teamorange[1].displayName+"\n"+teamorange[2].displayName+"\n\n------------------------------------```");
            }
        }
        else if (!message.member.voice.channel) {
            return message.reply("you need to be connected to a voice channel to initate Rocket League Mafia");
        }
        else {
            return message.reply("something went wrong...");
        }
        
	},
};