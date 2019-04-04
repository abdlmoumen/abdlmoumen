const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("563411848691580958")
setInterval(function() {
channel.send(`الله اكبر الله اكبر الله اكبر الله اكبر`);
}, 30)
})

client.login(process.env.BOT_TOKEN);