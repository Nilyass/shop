const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();
var prefix = "S";
var dat = JSON.parse("{}");




client.on('ready', () => {
   console.log(----------------);
      console.log(Desert Bot- Script By : EX Clan);
        console.log(----------------);
      console.log(ON ${client.guilds.size} Servers '     Script By : EX Clan ');
    console.log(----------------);
  console.log(Logged in as ${client.user.tag}!);
client.user.setGame(Wolf Shop Bot,"http://twitch.tv/Death Shop")
client.user.setStatus("dnd")
});

 
 client.login(process.env.BOT_TOKEN);
 
