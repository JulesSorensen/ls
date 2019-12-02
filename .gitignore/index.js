const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
    console.log("Connecté en tant que " + client.user.tag + " !")
    //client.user.setStatus('dnd', 'Made by KwinkyWolf')
    client.user.setActivity("with depression", {
  type: "STREAMING",
  url: "https://www.twitch.tv/monstercat"
});

client.login(process.env.TOKEN1)
