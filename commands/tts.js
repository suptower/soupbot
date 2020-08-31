const Discord = require('discord.js');
const text2wav = require('text2wav');
const assert = require('assert');
module.exports = {
	name: 'tts',
	description: 'uses text-to-speech provided by google-api',
	execute(message, args) {
        console.log("tts command has been initiated.");
        let out = text2wav(args.join(' '));
        if (message.member.voice.channel) {
            const voiceChannel = message.member.voice.channel;
            voiceChannel.join().then(connection => {
                const dispatcher = connection.play(out);
                dispatcher.on('finish',() => voiceChannel.leave());
            })
        }
	}
};