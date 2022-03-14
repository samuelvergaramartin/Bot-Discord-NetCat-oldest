const Discord = require ('discord.js');

module.exports = {
    name: "gif-netcat-bailando",
    run: async (client, message, args) => {
        const { MessageEmbed } = require('discord.js');
    const gifnetcatbailando = new MessageEmbed()
        .setTitle(`Gif NetCat bailando:`)
        .setDescription(`🎵 Mueve tu colita, ¡miau, miau! 🎵`)
        .setColor('RANDOM')
        .setImage("https://media.tenor.com/images/cf0b7d9efe8619d036d9b7ec77d425c3/tenor.gif")
        .setTimestamp()
        .setFooter({text:`• Hecho por ${message.author.tag}`,iconURL: message.author.displayAvatarURL({format: "png"})});

        message.channel.send({embeds: [gifnetcatbailando]});
    }
}