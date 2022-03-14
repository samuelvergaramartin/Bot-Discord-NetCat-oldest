const Discord = require ('discord.js');
//const client = new Discord.Client();
//const { Client, MessageEmbed } = require('discord.js');
var ncomando = "send";

module.exports = {
    name: "send",
    run: async (client, message, args) => {
        
        message.channel.send("🟡 Este comando se encuentra fuera de servicio temporalmente. Disculpe las molestias")
       /* var perms = message.member.permissions.has("ADMINISTRADOR")
  if(!perms) return message.channel.send("No tienes suficientes permisos crack!")
       // console.log("ok");
  let persona = message.mentions.users.first()
  let dueño = message.guild.ownerId;
        let eldueño = `<@${dueño}>`;
       //let persona = args[0]=`${eldueño}`;
        //let persona = `${eldueño}`;
 // message.channel.send(`${persona}`)
  if(!persona) return message.channel.send("Debes mencionar a alguien")
        if(persona !== eldueño) return message.channel.send(`Error: Ese no es el dueño del servidor, el dueño del servidor es ${eldueño}, y la mención que has introducido es`);
  var mensaje = args.slice(1).join(" ")
 //var mensaje = args.join(`${eldueño} `)
  if(!mensaje){
    message.channel.send("Debes escribir un mensaje")
  }

  if(mensaje) {
    persona.send(`${mensaje}`)

    return message.channel.send("Mensaje enviado correctamente")
  }*/

    }
}
console.log(`Comando: ${ncomando}: EN MANTENIMIENTO`.yellow)