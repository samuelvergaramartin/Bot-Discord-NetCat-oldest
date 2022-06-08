const Discord = require ('discord.js');

module.exports = {
    name: "gif-netcat-mueve-cola",
    run: async (client, message, args) => {
        const { MessageEmbed } = require('discord.js');
    const cola = new MessageEmbed()
        .setTitle(`Gif NetCat mueve cola:`)
        .setColor('RANDOM')
        .setImage("https://media.tenor.com/images/c2f1e7d17828e1ffd248df91f011c90a/tenor.gif")
        .setTimestamp()
        .setFooter({text:`• Gif para ${message.author.tag}`,iconURL: message.author.displayAvatarURL({format: "png"})});

        message.channel.send({embeds: [cola]});
    }
}