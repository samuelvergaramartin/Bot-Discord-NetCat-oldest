const Discord = require ('discord.js');
//const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const db = require('megadb');
const prefix_db = new db.crearDB('prefix')

module.exports = {
    name: "setprefix",
    run: async (client, message, args) => {
        var perms = message.member.permissions.has("ADMINISTRATOR")
        
  if(!perms) return message.channel.send("No tienes suficientes permisos")

  if(!args[0]) return message.channel.send("Debes elejir un prefijo nuevo")


  prefix_db.establecer(message.guild.id, args[0]).catch(err => { return message.channel.send(err)})

  /*let dueño = message.guild.ownerId;
  let eldueño = `<@${dueño}>`;
  let punto = ".";
  let palabramaestra = "message";
  let aeldueño = `${palabramaestra}${punto}${eldueño}`;
  //let dueño = message.guild.fetchOwner();
  aeldueño.send(`El prefix a cambiado a **${args[0]}**`).catch(err=> { return;})*/

  message.channel.send(`El prefix ha sido cambiado a **${args[0]}**`)
message.delete()
//message.channel.send("Comando temporalmente fuera de servicio")
    }
}
