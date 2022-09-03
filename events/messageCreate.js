const netcat = require('../core/netcat');
const { messages } = require('../messages/messages') 
const { afk } = require('../messages/afk')

module.exports = {
    name: 'messageCreate',
    once: false,
    /**
     * @param {netcat} netcat
     * @param {message} message
     */
    execute: async(netcat, message) => {
        if(!message.guild) return;

        if(!message.channel) return;

        if(message.author.id === netcat.user.id) return;

        await afk(netcat, message)
        await messages(netcat, message)
    
    }
};