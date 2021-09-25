import { Client, Intents } from 'discord.js';
import { config } from 'dotenv';

const env = config();
if (env.error) {
    throw env.error;
} 

const prefix = '-';

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('ready', () => {
    console.log('nullcast dj is online');
});

client.on('message', message => {

    console.log(message);
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    
    if (command === 'ping') {
        message.channel.send('pong!')
    }
})

client.login(process.env.LOGIN_TOKEN);