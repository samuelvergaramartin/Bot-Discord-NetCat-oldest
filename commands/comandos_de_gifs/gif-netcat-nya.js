const Discord = require ('discord.js');

module.exports = {
    name: "gif-netcat-nya",
    run: async (client, message, args) => {
        const { MessageEmbed } = require('discord.js');
    const gifnetcatnya = new MessageEmbed()
        .setTitle("Gif NetCat nya:")
        .setDescription("¡Nya! :3")
        .setColor('RANDOM')
        .setImage("https://media.tenor.com/images/543f9ffd0b3e1d95cd940aeccf1bb259/tenor.gif")
        .setTimestamp()
        .setFooter({text:`• Hecho por ${message.author.tag}`,iconURL: message.author.displayAvatarURL({format: "png"})});
        message.channel.send({embeds: [gifnetcatnya]});
    }
}