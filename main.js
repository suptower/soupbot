const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const {OpusEncoder} = require('@discordjs/opus');

// Collection for commands
client.commands = new Discord.Collection();

// Get commandFiles
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

// youtube download core
const ytdl = require('ytdl-core');

// set default cooldown for commands without preset cooldown
let defaultCooldown = 3;

// collection for cooldowns
const cooldowns = new Discord.Collection();

// get command names from command files
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

// set bot prefix
const prefix = "sb";

// tasks to do as soon as bot is ready
client.once('ready', () => {
    console.log('Bot has been initialized.');
    // Set presence to show "sb info"
    client.user.setPresence({ activity: { type: 'LISTENING', name: `${prefix} info` }, status: 'online'});
    console.log('Bot presence has been set.')
});

// tasks to do when new message has been created
client.on('message',async message => {
    // Avoid dm channels and message trap
    if (message.channel.type != "text" && message.author.id != "304354151578599428") {
        return message.channel.send("Sorry, my commands are only made to be used in/on server text channels.");
    }
    // reset bot
    if (message.content === "SOUPBOT.KILLSWITCH") {
        message.channel.send("This bot is resetting...");
        prefix = "sb";
        client.user.setPresence({ activity: { type: 'LISTENING', name: `${prefix} info` }, status: 'online'});
        defaultCooldown = 3;
        message.channel.send("Bot has been reset.");
        console.log("SOUPBOT.KILLSWITCH HAS BEEN EXECUTED. BOT HAS BEEN RESET.")
    }

    // ignore message if it does not start with prefix or if author is a bot
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    // ignore this user without ehre
    if (message.member.id == '357156269049643019') {
        console.log("Benny tried to use bot. Got rekt eZ.")
        return message.reply("you are not allowed to use this bot.\nReason: Lack of EHRE.");
    }

    // check if the server has created a EXSOUP role
    const excludeRole = message.guild.roles.cache.find(role => role.name === "EXSOUP");

    // if EXSOUP role exists, check if the message author has it assigned
    // if yes, ignore his commands
    if (excludeRole) {
        if (message.member.roles.cache.has(excludeRole.id)) {
            return message.reply("you have been excluded from the ability to use this bot.\nRest in piss.");
        }
    }

    // prepare args and command name
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    // yt command
    if (commandName === "yt") {
        const voiceChannel = message.member.voice.channel;
		if (!voiceChannel) {
            return message.reply('you need to be connected to a voice channel.');
        }
            message.channel.send("Trying to play audio.\nCAUTION: This command is extremely unpolished.\nIf I fail to play the song, you should try to disconnect me from the voice channel manually.");
            voiceChannel.join().then(connection => {
            const stream = ytdl(args[0], {filter: 'audioonly'});
            const dispatcher = connection.play(stream);

            dispatcher.on('finish', () => voiceChannel.leave());
        })
    }

    // cooldown command
    if (commandName === "cooldown") {
        if (!message.member.permissions.has('MANAGE_CHANNELS')) {
            return message.reply("you are not allowed to change the default cooldown.\nYou need to be able to manage channels to execute this.");
        }
        if (!args.length) {
            return message.reply('you need to provide a new cooldown value.');
        }
        const newcd = parseInt(args[0]);
        if (isNaN(newcd)) {
            return message.reply('you did not enter a valid cooldown value.');
        }
        else {
            defaultCooldown = newcd;
            message.channel.send(`The default cooldown has been changed to ${defaultCooldown} seconds.`);
            console.log(`The default cooldown has been changed to ${defaultCooldown} seconds.`);
        }
    }

    // if this command does not exist ignore the message
    if (!client.commands.has(commandName)) return message.reply("this command has not been found.");

    // assign command variable
    const command = client.commands.get(commandName);

    // ADMINs do ignore cooldown
    if (!message.member.permissions.has('ADMINISTRATOR')) {
        if (!cooldowns.has(command.name)) {
            cooldowns.set(command.name, new Discord.Collection());
        }
        // COOLDOWN mechanic
        const now = Date.now();
        const timestamps = cooldowns.get(command.name);
        const cooldownAmount = (command.cooldown || defaultCooldown) * 1000;
    
        if (timestamps.has(message.author.id)) {
            const expirationTime = timestamps.get(message.author.id) + cooldownAmount;
    
            if (now < expirationTime) {
                const timeLeft = (expirationTime - now) / 1000;
                return message.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`);
            }
        }
        timestamps.set(message.author.id, now);
        setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
    }

    // ----------------------------------- TRY TO EXECUTE COMMAND -----------------------------------
    try {
        command.execute(message,args);
    } catch (error) {
        console.log("ERROR DETECTED.");
        console.error(error);
        message.reply('There was an error trying to execute that command!');
    }
    // ----------------------------------- END -----------------------------------
    
});

// check for voice channel join of user without ehre
client.on('voiceStateUpdate', (oldState, newState) => {
    let oldUserChannel = oldState.channel;
    let newUserChannel = newState.channel;

    if (oldUserChannel == undefined && newUserChannel != undefined) {
        //USER JOINED CHANNEL
        if (newState.id==="357156269049643019") {
            newUserChannel.join().then(connection => {
                console.log("Benny got rekt eZ in voice channel.");
                const stream = 'https://media.vocaroo.com/mp3/jWCRHXWEsTT';
                const dispatcher = connection.play(stream);
                dispatcher.on('finish',() => newUserChannel.leave());
            })
        }
    }
    else if (newState.id==="242269236511113216") {
        newUserChannel.join().then(connection => {
            console.log("SALAMALAI AUTHOR HAS JOINED THE GAME.");
            const stream = 'https://media1.vocaroo.com/mp3/1lVaCqdxk9vV';
            const dispatcher = connection.play(stream);
            dispatcher.on('finish', () => newUserChannel.leave());
        })
    }

})
            
            

// login token
client.login(process.env.token);

// print out unhandledRejection to console
process.on('unhandledRejection', error => console.error('Uncaught Promise Rejection', error));