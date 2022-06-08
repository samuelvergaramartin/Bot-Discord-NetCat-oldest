const Discord = require ('discord.js');
var ncomando = "webnetcathost";
var colors = require('colors');

module.exports = {
    name: `${ncomando}`,
    run: async (client, message, args) => {
        const { MessageEmbed } = require ('discord.js');

        const webnetcathost = new MessageEmbed()
        .setTitle("Link del sitio web oficial de NetCat Host")
        .setDescription("Este es el link de la página web oficial de mi host oficial! 😸 : https://netcatoficialhost.wordpress.com")
        .setColor('RANDOM')
        .setTimestamp()
        .setThumbnail('https://images-ext-1.discordapp.net/external/ZXUqPw7g0BVqD-hI7x-6DD3br0lLVQDkklYuxsNx_q0/https/cdn.discordapp.com/avatars/787735373304299581/163f7e5c8ae413578ce17fb3596bedc2.webp')
        .setFooter({text:`• Pedido por ${message.author.tag}`,iconURL: message.author.displayAvatarURL({format: "png"})});
        
        message.channel.send({embeds: [webnetcathost]});
        message.channel.send("https://netcatoficialhost.wordpress.com/")
    }
}
console.log(`Comando: ${ncomando}: OK`.green);