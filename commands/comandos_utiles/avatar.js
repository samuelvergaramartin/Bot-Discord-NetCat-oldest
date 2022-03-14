module.exports = {
    name: "avatar",
    run: async (client, message, args) => {
        const { MessageEmbed } = require('discord.js');
        let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
  
        let avatar = user.avatarURL({ dynamic: true, format: "png", size: 1024 });
        const embed = new MessageEmbed()
         .setColor('RANDOM') 
         .setTitle(`Foto de perfil de ${user.username}`) 
         .setImage(avatar) 
         .setFooter({text:`• Pedido por ${message.author.tag}`,iconURL: message.author.displayAvatarURL({format: "png"})})
         message.channel.send({embeds: [embed]});    
    }
}