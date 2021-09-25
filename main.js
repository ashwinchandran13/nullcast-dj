import { Client, Intents } from 'discord.js';
import { config } from 'dotenv';

const env = config();
if (env.error) {
    throw env.error;
} 

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('ready', () => {
    console.log('nullcast dj is online');
})

client.login(process.env.LOGIN_TOKEN);