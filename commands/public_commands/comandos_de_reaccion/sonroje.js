const Discord = require ('discord.js');
var ncomando = "sonroje";

module.exports = {
    name: "sonroje",
    run: async (client, message, args) => {
let user = message.mentions.users.first() 
  if(!user) return message.channel.send(":x: || Debes mencionar a alguien") || client.users.cache.get(args[0]) || message.author;
  const { MessageEmbed } = require('discord.js');
const blushotro = new MessageEmbed()
        .setTitle(`${message.author.username} se sonrojó al ver/por culpa de ${user.username} `)
        .setColor('RANDOM')
        .setTimestamp()
        .setImage("https://media.tenor.com/images/78d22835091a757fb19b3e6ddaef0b84/tenor.gif")
        .setFooter({text:`• Hecho por ${message.author.username}`,iconURL: message.author.displayAvatarURL({format: "png"})});
        message.channel.send({embeds: [blushotro]});
    }
}
console.log(`Comando: ${ncomando}: OK`.green)