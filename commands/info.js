const Discord = require('discord.js');
module.exports = {
    name: 'info',
    cooldown: 30,
	description: 'Shows information about the bot.',
	execute(message, args) {
        console.log("info command has been initiated.");
        const InfoEmbed = new Discord.MessageEmbed()
            .setColor('#da2b2b')
            .setTitle("Information")
            .setAuthor('suptower', 'https://i.imgur.com/eB4PoaU.png')
            .setThumbnail('https://i.imgur.com/r8DZh2C.png')
            .setDescription('A Discord bot provided to you by suptower.')
            .addFields(
                { name: '\u200B', value: '\u200B' },
                { name: 'Documentation', value: 'http://bit.ly/soupbotDoc' },
            )
            .addFields(
                { name: '\u200B', value: '\u200B' },
                { name:'For further information',value: 'Add me on Discord: Arda K.#0554', inline:true},
            )
            .addField('\u200B','\u200B')
            .setTimestamp()
            .setFooter('Updated: 12th of November, 2020');

            message.author.send(InfoEmbed);
	},
};