const Discord = require ('discord.js');

module.exports = {
    name: "hug",
    run: async (client, message, args) => {

let user = message.mentions.users.first() 
  if(!user) return message.channel.send(":x: || Debes mencionar a alguien") || client.users.cache.get(args[0]) || message.author;
  const { MessageEmbed } = require('discord.js');
const hug = new MessageEmbed()
        .setTitle(`${message.author.username} abrazó a ${user.username} con amor uwu`)
        .setColor('RANDOM')
        .setImage("https://images-ext-2.discordapp.net/external/jPfhLMLWt1mTbu_r2ixcriD-XvsykKceSH2d7fij0vg/https/imgur.com/9x8xYSx.gif")
        .setTimestamp()
        .setFooter({text:`• Hecho por ${message.author.username}`,iconURL: message.author.displayAvatarURL({format: "png"})});
        message.channel.send({embeds: [hug]});
    }
}