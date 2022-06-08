const Discord = require ('discord.js');

module.exports = {
    name: "gif-netcat-manzana",
    run: async (client, message, args) => {
        const { MessageEmbed } = require('discord.js');
    const gifnetcatmanzana = new MessageEmbed()
        .setTitle(`Gif NetCat manzana:`)
        .setDescription(`Hmmmmm... Deliciosa 😸`)
        .setColor('RANDOM')
        .setImage("https://media.tenor.com/images/a1aea29065c5c2011aba6bdcaca6f1eb/tenor.gif")
        .setTimestamp()
        .setFooter({text:`• Hecho por ${message.author.tag}`,iconURL: message.author.displayAvatarURL({format: "png"})});

        message.channel.send({embeds: [gifnetcatmanzana]});
    }
}