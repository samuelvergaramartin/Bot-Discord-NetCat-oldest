const Discord = require ('discord.js');

module.exports = {
    name: "gif-netcat-baile",
    run: async (client, message, args) => {
        const { MessageEmbed } = require('discord.js');
    const gifnetcatbaile = new MessageEmbed()
        .setTitle(`Gif NetCat baile feliz:`)
        .setDescription(`¡Así se baila de verdad miau🐱!`)
        .setColor('RANDOM')
        .setImage("https://media.tenor.com/images/d73fac2da0d8555d8a1dfb4c1ea09ddc/tenor.gif")
        .setTimestamp()
        .setFooter({text:`• Hecho por ${message.author.tag}`,iconURL: message.author.displayAvatarURL({format: "png"})});

        message.channel.send({embeds: [gifnetcatbaile]});
    }
}