const Discord = require ('discord.js');

module.exports = {
    name: "servidores",
    run: async (netcat, message, args) => {
        let ID = ["995661776337240094"]

  if(!ID.includes(message.author.id)) return message.channel.send("**<:aviso:925769011822727209>| Error :** No tienes permisos")//.then(msg => msg.delete({timeout: 9000}));
;
  message.channel.send("**_///////////_ Servidores _///////////_**")
  message.channel.send(`${netcat.guilds.cache.map(g => g.name).join('\n')}`)
  message.channel.send("**_///////////_ |=| _///////////_**")
    }
}