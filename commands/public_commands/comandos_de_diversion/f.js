const Discord = require ('discord.js');

module.exports = {
    name: "f",
    run: async (client, message, args) => {
        const { MessageEmbed } = require('discord.js');
    const efe = new MessageEmbed()
        .setTitle(`Estoy de acuerdo ${message.author.username}`)
        .setColor('RANDOM')
        .setImage("https://c.tenor.com/rAuQOw-WY7IAAAAM/press-f-pay-respect.gif")
        .setTimestamp()
        .setFooter({text:`• F por ${message.author.tag}`,iconURL: message.author.displayAvatarURL({format: "png"})});
        message.channel.send({embeds: [efe]});
    }
}