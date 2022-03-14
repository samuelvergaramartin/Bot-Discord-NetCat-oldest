const Discord = require ('discord.js');
//const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const db = require('megadb')
const muterol = new db.crearDB('muterol')

module.exports = {
    name: "mute",
    run: async (client, message, args) => {
        var perms = message.member.permissions.has("MANAGE_ROLES")
  if(!perms) return message.channel.send("No tienes suficientes permisos")
  if (!message.guild.me.permissions.has("MANAGE_ROLES")) {
    return message.channel.send("**❌ | ERROR: **No tengo los permisos necesarios.\n Permisos que me faltan: `MANAGE_ROLES`.")
    }
  
  let mencionado = message.mentions.members.last()
  if(!mencionado) return message.channel.send("Debes mencionar a alguien")

  /*if(mencionado === message.guild.owner) {
    return message.channel.send("No puedes mutear al owner")
  }*/
  var razon = args.slice(1).join(" ")
  if(!razon){
    razon = 'No especificado'
  }

  if(!muterol.tiene(message.guild.id)) return message.channel.send("Este servidor no tiene ningun rol para mutear. Para añadirlo, use el comando `nc/muterol`")

  let rol = await muterol.obtener(message.guild.id)

  if(mencionado.roles.cache.has(rol)) return message.channel.send("Este usuario ya esta muteado")

  mencionado.roles.add(rol)

  let canal = message.channel;

  canal.permissionOverwrites.create(mencionado, { SEND_MESSAGES: false });

  const mom = new MessageEmbed()
  .setTitle(`:mute: Usuario muteado`)
  .setDescription(`El usuario ${mencionado} ha sido muteado.`)
  .addField("Razón:", `${razon}`)
  .addField("Staff responsable:", `${message.author.tag}`)
  .setColor("RANDOM")

  message.channel.send({embeds: [mom]});

    }
}