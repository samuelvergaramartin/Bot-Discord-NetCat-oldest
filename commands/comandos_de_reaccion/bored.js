const Discord = require ('discord.js');

module.exports = {
    name: "bored",
    run: async (client, message, args) => {
let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
const { MessageEmbed } = require('discord.js');
const bored = new MessageEmbed()
        .setTitle(`${message.author.username} está aburrido/a`)
        .setColor('RANDOM')
        .setTimestamp()
        .setImage("https://media.discordapp.net/attachments/399448944889036801/659843676109013022/giphy.gif")
        .setFooter({text:`• Hecho por ${message.author.username}`,iconURL: message.author.displayAvatarURL({format: "png"})});
        message.channel.send({embeds: [bored]});
    }
}