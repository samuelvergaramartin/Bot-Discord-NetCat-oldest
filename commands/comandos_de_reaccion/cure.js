const Discord = require ('discord.js');

module.exports = {
    name: "cure",
    run: async (client, message, args) => {
    let user = message.mentions.users.first() 
        if(!user) return message.channel.send(":x: || Debes mencionar a alguien") || client.users.cache.get(args[0]) || message.author;
        const { MessageEmbed } = require('discord.js');
        const cure = new MessageEmbed()
              .setTitle(`${message.author.username} cura a ${user.username}`)
              .setColor('RANDOM')
              .setImage("https://media.discordapp.net/attachments/791270423630315521/815681314149761035/Curar.gif")
              .setTimestamp()
              .setFooter({text:`• Hecho por ${message.author.username}`,iconURL: message.author.displayAvatarURL({format: "png"})});
        message.channel.send({embeds: [cure]}); 
    }
}