const Discord = require('discord.js');
module.exports = {
    name: 'randomnum',
	description: 'Returns a random Num',
	execute(message, args) {
        console.log("randomnum command has been initiated.");
        if (!args.length) {
            const num = Math.round(Math.random());
            message.channel.send(`Your value is: ${num}`);
        }
        else {
            const par = parseInt(args[0]);
            if (!isNaN(par)) {
                const num = Math.round(Math.random()*par);
                message.channel.send(`Created a random Number: ${num}`);
            }
            else {
                message.channel.send(`You did not provide a valid number as argument.`);
            }
        }
	},
};