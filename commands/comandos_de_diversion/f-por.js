const Discord = require ('discord.js');

module.exports = {
    name: "f-por",
    run: async (client, message, args) => {
    let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
    const { MessageEmbed } = require('discord.js');
  /*message.delete(10000);*/
  const ff = new MessageEmbed()
        .setTitle(`${message.author.username} le dedica una F a ${user.username}`)
        .setColor('RANDOM')
        .setImage("https://images-ext-1.discordapp.net/external/bEgp1XQu2GM_xLGkZTJ7Mrzj_BXaU7TOuS945oKkMJs/https/media.tenor.com/images/4e853c084da94c0e43a3179e1af344b7/tenor.gif")
        .setTimestamp()
        .setFooter({text:`• F por ${user.username}`,iconURL: message.author.displayAvatarURL({format: "png"})});
        message.channel.send({embeds: [ff]});
    }
}