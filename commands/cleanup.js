const Discord = require('discord.js');
module.exports = {
    name: 'cleanup',
    cooldown: 10,
	description: 'Cleans a text channel',
	execute(message, args) {
        console.log("cleanup command has been initiated.");
        if (!message.member.permissions.has("MANAGE_MESSAGES")) {
            return message.reply("you are not allowed to use this command.\nYou need to be able to manage messages to execute this.");
        }
        if (!args.length) {
            message.channel.bulkDelete(100);
            message.channel.send("100 messages have been deleted.");
            setTimeout(function() {
                message.channel.bulkDelete(1);
            }, 10000);
        }
        else if (!isNaN(parseInt(args[0]))) {
            const x = Math.abs(parseInt(args[0]));
            if (x>100) {
                message.channel.bulkDelete(100);
                message.reply("I am only allowed to delete 100 messages at a time");
                message.channel.send("100 messages have been deleted.");
                setTimeout(function() {
                    message.channel.bulkDelete(2);
                }, 10000);
            }
            else {
                message.channel.bulkDelete(x);
                message.channel.send(`${x} messages have been deleted.`);
                setTimeout(function() {
                    message.channel.bulkDelete(1);
                }, 10000);
            }
        }
        else {
            return message.reply("you did not provide a valid number as argument.");
        }
	},
};