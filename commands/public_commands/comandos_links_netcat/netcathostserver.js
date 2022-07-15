const Discord = require ('discord.js');
var ncomando = "netcathostserver";
var colors = require('colors');

module.exports = {
    name: `${ncomando}`,
    run: async (client, message, args) => {
        const { MessageEmbed } = require ('discord.js');

        const netcathostserver = new MessageEmbed()
        .setTitle("Link del servidor de Discord oficial de NetCat Host")
        .setDescription("Este es el link de invitación del servidor de Discord oficial de NetCat Host 😸 : https://discord.gg/s7GGuHdvaS")
        .setColor('RANDOM')
        .setTimestamp()
        .setThumbnail('https://images-ext-1.discordapp.net/external/ZXUqPw7g0BVqD-hI7x-6DD3br0lLVQDkklYuxsNx_q0/https/cdn.discordapp.com/avatars/787735373304299581/163f7e5c8ae413578ce17fb3596bedc2.webp')
        .setFooter({text:`• Pedido por ${message.author.tag}`,iconURL: message.author.displayAvatarURL({format: "png"})});
        
        message.channel.send({embeds: [netcathostserver]});
        message.channel.send("https://discord.gg/s7GGuHdvaS");
    }
}
console.log(`Comando: ${ncomando}: OK`.green);