const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
    console.log("Connecté en tant que " + client.user.tag + " !")
    //client.user.setPresence({game: {type: "dnd",}});
    client.user.setActivity('Skyforge', { type: 'PLAYING' });
});

client.login(process.env.TOKEN)
