const Discord = require ('discord.js');
const color = require('colors');
var ncomando = "handjob";

module.exports = {
    name: `${ncomando}`,
    run: async (client, message, args) => {
        message.channel.send("**:x: | ERROR:** Comando averiado, por favor, reporte el error con el comando `nc/bugreport`.");
        /*const { MessageEmbed } = require('discord.js');
        let user = message.mentions.users.first() 
  if(!message.channel.nsfw) return message.channel.send(":x: || Los comandos NSWF sólo se pueden usar en un canal NSFW")
  if(!user) return message.channel.send(":x: || Debes mencionar alguien") || client.users.cache.get(args[0]) || message.author;
  //message.delete(10000);
  const handjob = new MessageEmbed()
        .setTitle(`${message.author.username} le está haciendo un handjob a ${user.username}`)
        .setColor('RANDOM')
        .setImage("https://media.discordapp.net/attachments/791270423630315521/815300902763888660/NSFW.gif")
        .setTimestamp()
        .setFooter({text:`• Hecho por ${message.author.tag}`,iconURL: message.author.displayAvatarURL({format: "png"})});

        message.channel.send({embeds: [handjob]});*/
    }
}
console.log(`Comando: ${ncomando}: ERROR`.red);