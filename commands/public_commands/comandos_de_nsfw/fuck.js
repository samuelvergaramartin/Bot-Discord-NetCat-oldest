const Discord = require ('discord.js');

module.exports = {
    name: "fuck",
    run: async (client, message, args) => {
        const { MessageEmbed } = require('discord.js');
        let user = message.mentions.users.first() 
  if(!message.channel.nsfw) return message.channel.send(":x: || Los comandos NSWF sólo se pueden usar en un canal NSFW")
  if(!user) return message.channel.send(":x: || Debes mencionar alguien") || client.users.cache.get(args[0]) || message.author;
  //message.delete(10000);
  const fuck = new MessageEmbed()
        .setTitle(`¡${message.author.username} está follándose a ${user.username}`)
        .setColor('RANDOM')
        .setImage("https://images-ext-1.discordapp.net/external/k9LK9at2vo54jlkrbTuVrqEGaFe1yB6KTc50b0pxPyU/https/wetgif.com/wp-content/uploads/hentai-9.gif?width=722&height=406")
        .setTimestamp()
        .setFooter({text:`• Hecho por ${message.author.tag}`,iconURL: message.author.displayAvatarURL({format: "png"})});

        message.channel.send({embeds: [fuck]});
    }
}