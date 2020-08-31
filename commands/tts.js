module.exports = {
	name: 'tts',
	description: 'uses text-to-speech provided by google-api',
	execute(message, args) {
        console.log("tts command has been initiated.");
        if (message.member.voice.channel) {
            const voiceChannel = message.member.voice.channel;
            const str1='http://api.voicerss.org/?key=de876d46f8d44255aa7b445628cc32a0&hl=de-de&v=Jonas&c=MP3&f=16khz_16bit_stereo&src=';
            const str2 = args.join(' ');
            const link = str1.concat(str2);
            voiceChannel.join().then(connection => {
                const dispatcher = connection.play();
                dispatcher.on('finish',() => voiceChannel.leave(link));
            })
        }
	}
};