const Discord = require ('discord.js');

module.exports = {
    name: "historia-imperio-inca",
    run: async (client, message, args) => {
        let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
        const { MessageEmbed } = require('discord.js');
  const historia = new MessageEmbed()
        .setTitle(`Aquí tienes ${message.author.username}`)
        .setDescription(`Alrededor del siglo XIII d.C. los incas se asentaron en el Cuzco, así se da inicio al Imperio Inca, desde ahí se expandieron por el territorio andino, logrando que el Imperio Inca dominase parte de los actuales territorios de Perú, Bolivia, Chile, Ecuador, Argentina y Colombia`)
        .setColor('RANDOM')
        .setTimestamp()
        .setFooter({text:`• Hecho por ${message.author.tag}`,iconURL: message.author.displayAvatarURL({format: "png"})});

        message.channel.send({embeds: [historia]});
    }
}