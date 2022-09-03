const { ActivityType } = require("discord.js")

module.exports = {
    name: 'ready',
    once: false,
    execute: async(netcat) => {

        netcat.user.setActivity({ name: 'nc/help | v.5.1 | Estado del host: ONLINE | Discord.js v 14.3', type: ActivityType.Playing });
        netcat.user.setStatus('online')
        
        console.log(`Bot: ${netcat.user.username}\nStatus: ${netcat.presence.status}`);
    }
};