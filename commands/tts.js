const Discord = require('discord.js');
const text2wav = require('text2wav');
var streamBuffers = require('stream-buffers');
const {OpusEncoder} = require('@discordjs/opus');
const encoder = new OpusEncoder(48000,2);
module.exports = {
	name: 'tts',
	description: 'uses text-to-speech provided by google-api',
	execute(message, args) {
        console.log("tts command has been initiated.");
        let out = text2wav(args.join(' '));
        let arbuf = out.buffer;
        var newRSBuffer = new streamBuffers.ReadableStreamBuffer({
            frequency:10,
            chunkSize: 2048});
        newRSBuffer.put(arbuf);
        if (message.member.voice.channel) {
            const voiceChannel = message.member.voice.channel;
            voiceChannel.join().then(connection => {
                const dispatcher = connection.play(newRSBuffer);
                dispatcher.on('finish',() => voiceChannel.leave());
            })
        }
	}
};