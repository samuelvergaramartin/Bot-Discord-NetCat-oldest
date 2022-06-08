const Discord = require ('discord.js');

module.exports = {
    name: "invite",
    run: async (client, message, args) => {
        const { MessageEmbed } = require('discord.js');

    const invite = new MessageEmbed()
        .setTitle('Link de invitación de NetCat')
        .setDescription('Esta es mi invitación 😺~ [haz click aquí para invitarme a tu servidor](https://discord.com/oauth2/authorize?client_id=900470345809674260&scope=bot&permissions=8)')
        .setColor('RANDOM')
        .setTimestamp()
        .setThumbnail('https://images-ext-1.discordapp.net/external/ZXUqPw7g0BVqD-hI7x-6DD3br0lLVQDkklYuxsNx_q0/https/cdn.discordapp.com/avatars/787735373304299581/163f7e5c8ae413578ce17fb3596bedc2.webp')
        .setFooter({text:`• Pedido por ${message.author.tag}`,iconURL: message.author.displayAvatarURL({format: "png"})});

        message.channel.send({embeds: [invite]});
    }
}