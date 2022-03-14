const Discord = require ('discord.js');

module.exports = {
    name: "lick",
    run: async (client, message, args) => {

let user = message.mentions.users.first() 
  if(!user) return message.channel.send(":x: || Debes mencionar a alguien") || client.users.cache.get(args[0]) || message.author;
  const { MessageEmbed } = require('discord.js');
const lick = new MessageEmbed()
        .setTitle(`${message.author.username} ha lamido a ${user.username} `)
        .setColor('RANDOM')
        .setTimestamp()
        .setImage("https://media.discordapp.net/attachments/399448944889036801/719158526588616784/0e2f3f2f-bbef-4f47-a400-247a5f90385f.gif")
        .setFooter({text:`• Hecho por ${message.author.username}`,iconURL: message.author.displayAvatarURL({format: "png"})});
        message.channel.send({embeds: [lick]});
    }
}