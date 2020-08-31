const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const text2wav = require('text2wav');
var streamBuffers = require('stream-buffers');
const {OpusEncoder} = require('@discordjs/opus');
 
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
const ytdl = require('ytdl-core');
let defaultCooldown = 3;

const cooldowns = new Discord.Collection();

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}
let prefix = "sb";

client.once('ready', () => {
    console.log('Bot has been initialized.');
    client.user.setPresence({ activity: { type: 'LISTENING', name: `${prefix} info` }, status: 'online'});
    console.log('Bot presence has been set.')
});

client.on('message',async message => {
    if (message.channel.type != "text" && message.author.id != "304354151578599428") {
        return message.channel.send("Sorry, my commands are only made to be used in/on server text channels.");
    }
    if (message.content === "SOUPBOT.KILLSWITCH") {
        message.channel.send("This bot is resetting...");
        prefix = "sb";
        client.user.setPresence({ activity: { type: 'LISTENING', name: `${prefix} info` }, status: 'online'});
        defaultCooldown = 3;
        message.channel.send("Bot has been reset.");
        console.log("SOUPBOT.KILLSWITCH HAS BEEN EXECUTED. BOT HAS BEEN RESET.")
    }
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    if (message.member.id == '357156269049643019') {
        console.log("Benny tried to use bot. Got rekt eZ.")
        return message.reply("you are not allowed to use this bot.\nReason: Lack of EHRE.");
    }

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    if (commandName === "prefix") {
        if (!message.member.permissions.has('MANAGE_CHANNELS')) {
            return message.reply("you are not allowed to change the prefix.\nYou need to be allowed to manage channels to execute this.");
        }
        if (!args.length) {
            return message.reply('you need to provide a new prefix.');
        }
        else {
            prefix = args[0];
            message.reply(`The prefix has been changed to ${prefix}.`)
            client.user.setPresence({ activity: { type: 'LISTENING', name: `${prefix} info` }, status: 'online'});
            console.log(`Prefix has been changed to ${prefix}`);
        }
    }

    if (commandName === "yt") {
        const voiceChannel = message.member.voice.channel;
		if (!voiceChannel) {
            return message.reply('you need to be connected to a voice channel.');
        }
            message.channel.send("Trying to play audio.\nCAUTION: This command is extremely unfinished.\nIf I fail to play the song, you should try to disconnect me from the voice channel manually.");
            voiceChannel.join().then(connection => {
            const stream = ytdl(args[0], {filter: 'audioonly'});
            const dispatcher = connection.play(stream);

            dispatcher.on('finish', () => voiceChannel.leave());
        })
    }

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

    if (!client.commands.has(commandName)) return;

    const command = client.commands.get(commandName);

    if (!message.member.permissions.has('ADMINISTRATOR')) {
        if (!cooldowns.has(command.name)) {
            cooldowns.set(command.name, new Discord.Collection());
        }
    
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

    try {
        command.execute(message,args);
    } catch (error) {
        console.log("ERROR DETECTED.");
        console.error(error);
        message.reply('There was an error trying to execute that command!');
    }

    
});

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

})
            
            


client.login(process.env.token);

process.on('unhandledRejection', error => console.error('Uncaught Promise Rejection', error));