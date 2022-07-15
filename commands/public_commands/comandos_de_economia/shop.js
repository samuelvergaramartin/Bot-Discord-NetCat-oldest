const Discord = require ('discord.js');

module.exports = {
    name: "shop",
    run: async (client, message, args) => {
        const { MessageEmbed } = require('discord.js');
        const embed = new MessageEmbed()

        .setTitle('Tienda de objetos de NetCat:')
        .setDescription('Hola! Bienvenid@ a la tienda de objetos de NetCat, para comprar un objeto, use el comando `nc/buy`.\nAquí tienes un ejemplo: nc/buy zapatillas-de-deporte')
        .addField('Objetos disponibles:', '+ __zapatillas de deporte__  - 500:coin:\n+ __pienso para gatos__  - 1.000:coin:\n+ __coche de carreras__  - 5.000:coin:\n+ __capa de invisibilidad__  - 7.500:coin:\n+ __guardaespaldas__  - 10.000:coin:\n+ __**miembro VIP**__  - 100.000:coin:')
        .setColor("BLUE")
        .setFooter({text:`• Bot creado por DragonCat#1063 | Pedido por ${message.author.tag}`,iconURL: message.author.displayAvatarURL({format: "png"})})

        message.channel.send({embeds: [embed]}); 
    }
}