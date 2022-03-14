const Discord = require ('discord.js');

module.exports = {
    name: "gif-netcat-enfado",
    run: async (client, message, args) => {
        const { MessageEmbed } = require('discord.js');
        
    const gifnetcatenfado = new MessageEmbed()
        .setTitle(`Gif NetCat enfado:`)
        .setDescription(`¡Déjame en paz! 😾`)
        .setColor('RANDOM')
        .setImage("https://media.tenor.com/images/34b7d7dff9373f0d81ce5a3508782e13/tenor.gif")
        .setTimestamp()
        .setFooter({text:`• Gif para ${message.author.tag}`,iconURL: message.author.displayAvatarURL({format: "png"})});

        message.channel.send({embeds: [gifnetcatenfado]});
    }
}