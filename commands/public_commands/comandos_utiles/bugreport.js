const Discord = require ('discord.js');
//const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
//
module.exports = {
    name: "bugreport",
    run: async (client, message, args) => {
      if(client.user.id == "962316970131353641") {
        
      //message.channel.send("Comando deshabilitado temporalmente")
       // if(args[0] ==="bugreport") //Aca decimos que el comando solo funcione si el usuario escribe -reportar bug
    //{
      let bug = args.slice(0).join(" ")
      if(!bug) return message.channel.send("**No has escrito ningún Bug.**")

     //let sv = client.guilds.cache.get("900856291461824562")
      let sv = client.guilds.cache.get("949740275784376371")
/* Aqui pondrian la ID del servidor en el cual llegarian los reportes, normalmente se ponen la ID de los servidores de Soporte del BOT */
      //let channel = sv.channels.cache.get("949745853290119218")
      let channel = sv.channels.cache.get("963171526314692608")

      if(!channel) { 
        let err = sv.channels.cache.filter(s => s.type==="text").random()
        err.send("**No tengo un Canal para reportar los Bugs.**")
        message.channel.send("**No puedo hacer eso ahora**")
        return;
      }
      /* Esto seria por si el BOT no pudo encontrar el Canal */

      let lugar;
      if(message.channel.type ==="dm") {
        lugar="Desde Mensaje Directo"
      } else {
        lugar=`Desde el servidor: **${message.guild.name}**` 
      }
/* Esto seria para describir si el mensaje fue por Privado o desde X servidor */

      const embed = new MessageEmbed()
      .setTitle("Se ha reportado un Error")
      .setDescription(`**Reportado por:** ${message.author.tag}\n${lugar}\n**Descripcion del bug reportado:** ${bug}`)
      .setImage(message.attachments.first()?.url)
      .setColor("RED")
      .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
/* Aca hemos hecho el Embed, sobre lo de "dynamic" significa que si el usuario tiene una imagen animada, la muestre animada */
      message.channel.send("✅ || Se ha reportado el bug correctamente en mi servidor de soporte.")
      //channel.send("<@&911517878505836584>, EMERGENCIA! TENEMOS UN BUG QUE RESOLVER!")
      channel.send("<@&963171436963450950>, Tenemos un bug que resolver.")
     // channel.send(embed) //Mandariamos el Embed al canal de reportes de Bugs
      channel.send({embeds: [embed]});
 // } else {

 //   message.channel.send(`Sintaxis: nc/bugreport`)

 // }
    } else {
         //message.channel.send("Comando deshabilitado temporalmente")
       // if(args[0] ==="bugreport") //Aca decimos que el comando solo funcione si el usuario escribe -reportar bug
    //{
      let bug = args.slice(0).join(" ")
      if(!bug) return message.channel.send("**No has escrito ningún Bug.**")

     let sv = client.guilds.cache.get("900856291461824562")
      //let sv = client.guilds.cache.get("949740275784376371")
/* Aqui pondrian la ID del servidor en el cual llegarian los reportes, normalmente se ponen la ID de los servidores de Soporte del BOT */
      let channel = sv.channels.cache.get("949745853290119218")
      //let channel = sv.channels.cache.get("963171526314692608")

      if(!channel) { 
        let err = sv.channels.cache.filter(s => s.type==="text").random()
        err.send("**No tengo un Canal para reportar los Bugs.**")
        message.channel.send("**No puedo hacer eso ahora**")
        return;
      }
      /* Esto seria por si el BOT no pudo encontrar el Canal */

      let lugar;
      if(message.channel.type ==="dm") {
        lugar="Desde Mensaje Directo"
      } else {
        lugar=`Desde el servidor: **${message.guild.name}**` 
      }
/* Esto seria para describir si el mensaje fue por Privado o desde X servidor */

      const embed = new MessageEmbed()
      .setTitle("Se ha reportado un Error")
      .setDescription(`**Reportado por:** ${message.author.tag}\n${lugar}\n**Descripcion del bug reportado:** ${bug}`)
      .setImage(message.attachments.first()?.url)
      .setColor("RED")
      .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
/* Aca hemos hecho el Embed, sobre lo de "dynamic" significa que si el usuario tiene una imagen animada, la muestre animada */
      message.channel.send("✅ || Se ha reportado el bug correctamente en mi servidor de soporte.")
      //channel.send("<@&911517878505836584>, EMERGENCIA! TENEMOS UN BUG QUE RESOLVER!")
      channel.send("<@&949745775527731221>, Tenemos un bug que resolver.")
     // channel.send(embed) //Mandariamos el Embed al canal de reportes de Bugs
      channel.send({embeds: [embed]});
 // } else {

 //   message.channel.send(`Sintaxis: nc/bugreport`)

 // }
    }
    

}
       }
       