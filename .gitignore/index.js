const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
    console.log("Connecté en tant que " + client.user.tag + " !")

//client.user.setPresence(dnd);
client.user.setPresence({ game: { name: 'with depression' }, status: 'online' });

client.login(process.env.TOKEN1)
