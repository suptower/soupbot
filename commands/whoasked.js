const Discord = require('discord.js');
module.exports = {
	name: 'whoasked',
	description: 'literally who asked',
	execute(message, args) {
        console.log("who asked command has been initiated.");
        if (message.author.id === "138432810187882496" && message.attachments.size==0) {
            console.log("Michey wollte who asken LUL");
            return message.reply("bro dein ernst wie kannst du den jetzt bringen.");
        }
        const rand = Math.round(Math.random()*10);
        switch(rand) {
            case 0:
                message.channel.send({files: ['https://pbs.twimg.com/media/EcVPsQgUYAASoqL.jpg']});    
                break;
            case 1:
                message.channel.send({files:['https://preview.redd.it/gzcz4otekrh41.jpg?auto=webp&s=f47f3633ba6118d6231ab59901efc111bd8719a8']});
                break;
            case 2:
                message.channel.send({files:['https://media.tenor.com/images/74e12b00a89e02e8fe1c688926b7734f/tenor.gif']});
                break;
            case 3:
                message.channel.send({files:['https://media.makeameme.org/created/cool-and-all.png']});
                break;
            case 4:
                message.channel.send({files:['https://media.tenor.com/images/55521bfc7866f6a5d78e9f0d854e17b5/tenor.gif']});
                break;
            case 5:
                message.channel.send({files:['https://i.redd.it/jq76nxhc3ek41.jpg']});
                break;
            case 6:
                message.channel.send({files:['https://pbs.twimg.com/media/EONXbAWU4AAmpFQ.jpg']});
                break;
            case 7:
                message.channel.send({files:['https://media.tenor.com/images/33eec104df3c92d9a923081ddf5c5524/tenor.gif']});
                break;
            case 8:
                message.channel.send({files:['https://media.makeameme.org/created/me-looking-for-c8d7ed90f2.jpg']});
                break;
            case 9:
                message.channel.send({files:['https://i.imgflip.com/3shtvv.jpg']});
                break;
            case 10:
                message.channel.send({files:['https://i.ytimg.com/vi/buTKWTtKI9M/maxresdefault.jpg']});
                break;
            default:
                message.channel.send({files:['https://s3.memeshappen.com/memes/Me-finding-For-who-asked.jpg']});
                break;
        }
	},
};