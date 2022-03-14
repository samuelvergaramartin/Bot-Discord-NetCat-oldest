const Discord = require ('discord.js');

module.exports = {
    name: "scared",
    run: async (client, message, args) => {
        const { MessageEmbed } = require('discord.js');
    const scared = new MessageEmbed()
        .setTitle(`${message.author.username} tiene miedo. ¡¿Por qué?!`)
        .setColor('RANDOM')
        .setImage("https://images-ext-2.discordapp.net/external/ngNXqB72DzairMuoGwrwaozDg7PdYKaPUtU-kXrffIQ/https/media.discordapp.net/attachments/399448944889036801/597135354918731786/a48fb0a16273d6e3762f0f58dd3464e91438448073_full.gif")
        .setTimestamp()
        .setFooter({text:`• Hecho por ${message.author.username}`,iconURL: message.author.displayAvatarURL({format: "png"})});
        message.channel.send({embeds: [scared]});
    }
}