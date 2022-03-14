const Discord = require ('discord.js');

module.exports = {
    name: "gif-netcat-sad",
    run: async (client, message, args) => {
        const { MessageEmbed } = require('discord.js');
    const gifnetcatsad = new MessageEmbed()
        .setTitle(`Gif NetCat sad:`)
        .setColor('RANDOM')
        .setImage("https://media.tenor.com/images/076279f24133f5327e694da07a33aeaa/tenor.gif")
        .setTimestamp()
        .setFooter({text:`• Gif para ${message.author.tag}`,iconURL: message.author.displayAvatarURL({format: "png"})});

        message.channel.send({embeds: [gifnetcatsad]});
    }
}