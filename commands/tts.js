const Discord = require('discord.js');
const textToSpeech = require('@google-cloud/text-to-speech');
const ttsClient = new textToSpeech.TextToSpeechClient();
module.exports = {
	name: 'tts',
	description: 'uses text-to-speech provided by google-api',
	execute(message, args) {
        console.log("tts command has been initiated.");
        const text = args.join(' ');
        const request = {
            input: {text: text},
            voice: {languageCode: 'de-DE', ssmlGender: 'NEUTRAL'},
            audioConfig: {audioEncoding: 'MP3'},
        };
        const [response] = await ttsClient.synthesizeSpeech(request);
        const writeFile = util.promisify(fs.writeFile);
        await writeFile('output.mp3', response.audioContent, 'binary');
        console.log('Audio content written to output.mp3');
        if (message.member.voice.channel) {
            const voiceChannel = message.member.voice.channel;
            voiceChannel.join().then(connection => {
                const dispatcher = connection.play('output.mp3');
                dispatcher.on("finish", () => {
                    voiceChannel.leave();
                })
            })
        }
	}
};