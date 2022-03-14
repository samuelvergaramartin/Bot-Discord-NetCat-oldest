const Discord = require ('discord.js');

module.exports = {
    name: "gif-netcat-muerde-dedo",
    run: async (client, message, args) => {
        const { MessageEmbed } = require('discord.js');
    const gifnetcatmuerdededo = new MessageEmbed()
        .setTitle(`Gif NetCat muerde dedo:`)
        .setDescription(`Ñan, ñam :p`)
        .setImage("https://media.tenor.com/images/ae20222d721d258464174bf553728bbf/tenor.gif")
        .setTimestamp()
        .setFooter({text:`• Gif para ${message.author.tag}`,iconURL: message.author.displayAvatarURL({format: "png"})});

        message.channel.send({embeds: [gifnetcatmuerdededo]});
    }
}