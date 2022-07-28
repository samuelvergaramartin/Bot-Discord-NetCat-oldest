const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v10');
const bottoken = require('./token/config.json');
const fs = require('fs');

const commands = [];
const slashcommandsFiles = fs.readdirSync('./slashcommands').filter(file => file.endsWith('.js'));

// Place your client and guild ids here
const clientId = '962316970131353641';
//const guildId = '876543210987654321';

for (const file of slashcommandsFiles) {
    const slash = require(`./slashcommands/${file}`);
    commands.push(slash.data.toJSON());
}

const rest = new REST({ version: '10' }).setToken(bottoken.token);

createSlash()

async function createSlash() {
    try {
        console.log('Started refreshing application (/) commands.');

        await rest.put(
            Routes.applicationCommands(clientId),
            { body: commands },
        );

        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error(error);
    }
}
