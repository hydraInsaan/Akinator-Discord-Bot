const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Yo boi!!'));

app.listen(port, () =>
	console.log(`Your app is listening to http://localhost:${port}`)
);

const discord = require('discord.js')
const akinator = require('discord.js-akinator')

const { Client } = require("discord.js");

const client = new Client({
    intents: 32767,
});
module.exports = client;

//Bot prefix
const prefix = "Tantra."
//

//Status
client.on("ready", () => {
  let statusList = [`${prefix}Chalo Bhai`, `GaMeonic Studio`];
    setInterval(function() {
  		let status = statusList[Math.floor(Math.random()*statusList.length)];
  		client.user.setActivity('Tantra.Chalo Bhai | GaMeonic Studio',{
   type:"STREAMING",
   url:"https://www.youtube.com/watch?v=MbD0m0h7Q2c&t=6s&ab_channel=GaMeonicStudio"
      });
  	}, 10000)

    console.log(`${client.user.tag} has been successfully deployed!! 🚀`)
});
//

//Akinator Command
client.on("messageCreate", async message => {
    if(message.content.startsWith(`${prefix}Chalo Bhai`)) {
        akinator(message, client, "en");
    }
});
//

client.login(process.env.token) 
