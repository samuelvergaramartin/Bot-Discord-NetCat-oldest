const Discord = require ('discord.js');

module.exports = {
    name: "run",
    run: async (client, message, args) => {
        const { MessageEmbed } = require('discord.js');
    const run = new MessageEmbed()
        .setTitle(`${message.author.username} salió corriendo. ¡Cuánto corre! `)
        .setColor('RANDOM')
        .setImage("https://media.discordapp.net/attachments/399448944889036801/761253916209184779/6dfe6a79-3316-4a21-9827-72ebed0471ac.gif")
        .setTimestamp()
        .setFooter({text:`• Hecho por ${message.author.username}`,iconURL: message.author.displayAvatarURL({format: "png"})});
        message.channel.send({embeds: [run]});
    }
}