const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
    console.log("Connecté en tant que " + client.user.tag + " !")

    client.user.setPresence({
        game: {
            name: "Overwatch",
            type: 1,
        }
    });
})

client.login(process.env.TOKEN1)
