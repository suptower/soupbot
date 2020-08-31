module.exports = {
	name: 'testcmd',
	description: 'test to concat',
	execute(message, args) {
        console.log("tts command has been initiated.");
            const str1='http://api.voicerss.org/?key=de876d46f8d44255aa7b445628cc32a0&hl=de-de&v=Jonas&c=MP3&f=16khz_16bit_stereo&src=';
            const str2 = args.join(' ');
            const link = str1.concat(str2);
            message.channel.send(link);
        }
}