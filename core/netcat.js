const {Client, GatewayIntentBits} = require('discord.js');
const {token} = require('../token/config.json');
const eventHandler = require('../handlers/events');
const commandHandler = require('../handlers/slashcommands');
const messagecommandsHandler = require('../index');

class netcat extends Client{
    constructor(){
        super({ intents: 
            [GatewayIntentBits.Guilds, 
            GatewayIntentBits.GuildMessages, 
            GatewayIntentBits.MessageContent,
            GatewayIntentBits.GuildMembers]});
        //intents: 3276799});
    };

    start(){
        commandHandler(this);
        eventHandler(this);
        messagecommandsHandler(this);
        this.login(token);
    };
};

module.exports = netcat;