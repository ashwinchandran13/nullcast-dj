const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('ready', () => {
    console.log('nullcast dj is online');
})

client.login('ODkxMjE2OTk4Nzk1NzA2Mzg4.YU7Igg.LgE6J2H6oIF6wUAeCoexl5tEMzY');