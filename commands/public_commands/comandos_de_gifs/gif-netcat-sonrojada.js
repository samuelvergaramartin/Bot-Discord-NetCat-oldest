const Discord = require ('discord.js');

module.exports = {
    name: "gif-netcat-sonrojada",
    run: async (client, message, args) => {
        const { MessageEmbed } = require('discord.js');
    const gifnetcatsonrojada = new MessageEmbed()
        .setTitle(`Gif NetCat sonrojada:`)
        .setDescription(`O- oye, n- no me mires nya...`)
        .setColor('RANDOM')
        .setImage("https://media.tenor.com/images/78d22835091a757fb19b3e6ddaef0b84/tenor.gif")
        .setTimestamp()
        .setFooter({text:`• Gif para ${message.author.tag}`,iconURL: message.author.displayAvatarURL({format: "png"})});

        message.channel.send({embeds: [gifnetcatsonrojada]});
    }
}