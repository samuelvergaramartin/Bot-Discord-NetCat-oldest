const Discord = require ('discord.js');

module.exports = {
    name: "name-personaje-mujer",
    run: async (client, message, args) => {
      const { MessageEmbed } = require('discord.js');
    let links = ["Ana", "Kyra","Mery", "Marta", "Afrodita"]
  var dado = links[Math.floor(Math.random() * links.length)]
  const embed = new MessageEmbed()
  .setTitle(`${message.author.tag}`)
  .addField("El nombre elegido es:", dado)
  .setColor("RANDOM")
  .setTimestamp()

  message.channel.send({embeds: [embed]});
    }
}