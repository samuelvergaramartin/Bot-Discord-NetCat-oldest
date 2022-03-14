module.exports = {
    name: "testembed",
    run: async (client, message, args) => {
        message.channel.send("Probando los embed...")
        const { MessageEmbed } = require('discord.js');
        var server = message.guild;
        const embed = new MessageEmbed()
         //.setThumbnail(server.iconURL())
         .setAuthor({name:`${message.author.tag}`,iconURL: message.author.displayAvatarURL({format: "png"})})
         //.setTitle(`Embed de prueba`)
         //.setDescription(`Descripción del embed`)
         .setColor('ff00d9')
         //.setImage("https://c.tenor.com/9f1lboKKmBUAAAAM/keyboard-hyperx.gif")
         .addField('Sección 1', 'Contenido 1')
         .addField('Sección 2', 'Contenido 2')
         .setTimestamp()
         .setFooter({text:`• Bot creado por Sam170703#6466 | Pedido por ${message.author.tag}`,iconURL: message.author.displayAvatarURL({format: "png"})})
         message.channel.send({embeds: [embed]});    
    }
}