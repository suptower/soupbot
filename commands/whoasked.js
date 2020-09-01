const Discord = require('discord.js');
module.exports = {
	name: 'whoasked',
	description: 'literally who asked',
	execute(message, args) {
        console.log("who asked command has been initiated.");
        var pics = ['https://pbs.twimg.com/media/EcVPsQgUYAASoqL.jpg','https://preview.redd.it/gzcz4otekrh41.jpg?auto=webp&s=f47f3633ba6118d6231ab59901efc111bd8719a8',
            'https://media.tenor.com/images/74e12b00a89e02e8fe1c688926b7734f/tenor.gif','https://media.makeameme.org/created/cool-and-all.png',
            'https://media.tenor.com/images/55521bfc7866f6a5d78e9f0d854e17b5/tenor.gif', 'https://i.redd.it/jq76nxhc3ek41.jpg', 'https://pbs.twimg.com/media/EONXbAWU4AAmpFQ.jpg',
            'https://media.tenor.com/images/33eec104df3c92d9a923081ddf5c5524/tenor.gif', 'https://media.makeameme.org/created/me-looking-for-c8d7ed90f2.jpg', 'https://i.imgflip.com/3shtvv.jpg',
            'https://i.ytimg.com/vi/buTKWTtKI9M/maxresdefault.jpg', 'https://s3.memeshappen.com/memes/Me-finding-For-who-asked.jpg', 'https://i.kym-cdn.com/entries/icons/original/000/032/400/cover3.jpg',
            'https://media.makeameme.org/created/yooo-no-way.jpg','https://i.redd.it/9bjtc4jbfbr31.jpg','https://i.pinimg.com/originals/cb/70/08/cb7008bc65d334467a776cd0bc0f228b.jpg',
            'https://i.imgflip.com/45xf3s.jpg','https://meme-generator.com/wp-content/uploads/mememe/2020/06/mememe_b468b0ebf69a12d9776358dffba6728f-1.jpg', 'https://meme-generator.com/wp-content/uploads/mememe/2020/04/mememe_3820f19ffe9e3259118dd63aaea00da5-1.jpg',
            'https://i.ytimg.com/vi/O1iRRCn7Oq4/hqdefault.jpg','https://media.tenor.com/images/19c98c53fb94a539c70fb534e0fe7a52/tenor.gif','https://i.imgflip.com/2exzfj.jpg',
            'https://lh3.googleusercontent.com/proxy/vaKVKtaYkBg7-UQw_gwAFZnFtqJbM6bip0vvMZiq1Cz3J-WOmyBruyf2V-bFsYuOe6wB69DsXpVK4rKwgQcTA8pgeHLbGXaS6NO_JOdLBy87_z3kwD3VuMR-KgmQ7Nk3Iou5_Yh5TA7x58UHLzJujK4msL1Wm3JJqZA',
            'https://i.kym-cdn.com/photos/images/original/001/674/367/d57.jpg','https://m.media-amazon.com/images/I/91IM87eeuCL._AC_CLa%7C2140%2C2000%7C51n4C-r53EL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_UL1500_.png',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR0RmAw8QY0QQmf50231VuX7cC_b4B8-5Ylig&usqp=CAU','https://memegenerator.net/img/instances/79552758.jpg',
            'https://media.makeameme.org/created/ok-find-literally.jpg','https://www.memecreator.org/static/images/memes/5112952.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSATiyYbCG1BnWOgF47iAmNdpBUjv8DNio-Rg&usqp=CAU'];
            
            console.log("Logged "+pics.length+" pics... but who asked?");
            const rand = Math.round(Math.random()*(pics.length));
            message.channel.send({files:[pics[rand]]});
	},
};