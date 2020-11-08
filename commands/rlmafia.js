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
            const random = Math.round(Math.random()*players.length);
            const selected = players[random];
            players.splice(random,1);
            selected.user.send("**ROCKET LEAGUE MAFIA NOTIFICATION:** You have been assigned the role \`Mafia\`");
            for (let i=0; i < players.length; i++) {
                players[i].user.send("**ROCKET LEAGUE MAFIA NOTIFICATION:** You have been assigned the role \`Villager\`");
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