const Discord = require ('discord.js');

module.exports = {
    name: "angry",
    run: async (client, message, args) => {
let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
const { MessageEmbed } = require('discord.js');
  const angry = new MessageEmbed()
        .setTitle(`${message.author.username} se enfadó 🙀`)
        .setColor('RANDOM')
        .setTimestamp()
        .setImage("https://images-ext-1.discordapp.net/external/QHZFZlLCZi4r9wZOJoFBvANZH3nid0CVHEYStRQ9G6M/https/imgur.com/q59E1sF.gif")
        .setFooter({text:`• Hecho por ${message.author.username}`,iconURL: message.author.displayAvatarURL({format: "png"})});
        message.channel.send({embeds: [angry]}); 
    }
}