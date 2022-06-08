const Discord = require ('discord.js');

module.exports = {
    name: "gif-netcat-duele-orejas",
    run: async (client, message, args) => {
        const { MessageEmbed } = require('discord.js');
    const orejas = new MessageEmbed()
        .setTitle(`Gif NetCat duele orejas:`)
        .setColor('RANDOM')
        .setImage("https://media.tenor.com/images/6b757c065bed23ff460518ae2bd5682f/tenor.gif")
        .setTimestamp()
        .setFooter({text:`• Gif para ${message.author.tag}`,iconURL: message.author.displayAvatarURL({format: "png"})});

        message.channel.send({embeds: [orejas]});
    }
}