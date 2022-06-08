const Discord = require ('discord.js');

module.exports = {
    name: "idoly",
    run: async (client, message, args) => {
let user = message.mentions.users.first() 
  if(!user) return message.channel.send(":x: || Debes mencionar a alguien") || client.users.cache.get(args[0]) || message.author;
  const { MessageEmbed } = require('discord.js');
const idol = new MessageEmbed()
        .setTitle(`${user.username} es el/la ídolo de ${message.author.username}`)
        .setColor('RANDOM')
        .setImage("https://media.discordapp.net/attachments/752854053226151997/815292742397460500/Idol.gif")
        .setTimestamp()
        .setFooter({text:`• Hecho por ${message.author.username}`,iconURL: message.author.displayAvatarURL({format: "png"})});
        message.channel.send({embeds: [idol]});
    }
}