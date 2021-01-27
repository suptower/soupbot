const Discord = require('discord.js');
module.exports = {
  name: 'dice',
	description: 'Rolls a dice',
	execute(message, args) {
        console.log("dice command has been initiated.");
        message.channel.send("The dice is rolling!");
        const nr = (Math.round(Math.random()*5+1));
        setTimeout(function() {
            message.channel.send(`The dice is showing ${nr}.`)
          }, 2000);
	},
};