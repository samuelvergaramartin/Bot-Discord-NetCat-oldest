const Discord = require ('discord.js');
const db = require('megadb')
const afkdb = new db.crearDB(`afk`)

module.exports = {
    name: "afk",
    run: async (client, message, args) => {
        
      if(!args.join(" ")){
          razon = 'No especificada'
      } else {
          razon = args.join(" ")
      }
        await afkdb.set(`afk-${message.author.id}+${message.guild.id}`, razon)
        message.channel.send(`${message.author}, Ahora estás en modo AFK por el siguiente motivo: **${razon}**.\nAvisaré a quienes te mencionen de que estás en modo AFK.`)

        

       
       }
}