const Discord = require ('discord.js');

module.exports = {
    name: "gif-f",
    run: async (client, message, args) => {
        const { MessageEmbed } = require('discord.js');
    const f = new MessageEmbed()
        .setTitle(`Gif F:`)
        .setColor('RANDOM')
        .setImage("https://c.tenor.com/9f1lboKKmBUAAAAM/keyboard-hyperx.gif")
        .setTimestamp()
        .setFooter({text:`• Gif para ${message.author.tag}`,iconURL: message.author.displayAvatarURL({format: "png"})});

        message.channel.send({embeds: [f]});
    }
}