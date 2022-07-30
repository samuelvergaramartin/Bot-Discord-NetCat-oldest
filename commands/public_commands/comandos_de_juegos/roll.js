const Discord = require ('discord.js');
const color = require('colors');
var ncomando = "roll";

module.exports = {
    name: `${ncomando}`,
    run: async (client, message, args) => {
      message.channel.send("**:x: | ERROR:** Comando averiado, por favor, reporte el error con el comando `nc/bugreport`.");
     /* const { MessageEmbed } = require('discord.js');
    let links = ["https://cdn.discordapp.com/attachments/684757256658747451/794277079243685888/dado-1.png", "https://cdn.discordapp.com/attachments/684757256658747451/794277107537805332/dado-2.png", "https://cdn.discordapp.com/attachments/684757256658747451/794277142800105483/dado-3.png", "https://cdn.discordapp.com/attachments/684757256658747451/794277176592826368/dado-4.png", "https://cdn.discordapp.com/attachments/684757256658747451/794277207619010590/dado-5.png", "https://cdn.discordapp.com/attachments/684757256658747451/794277245157113866/dado-6.png"]
  var dado = links[Math.floor(Math.random() * links.length)]
  const embed = new MessageEmbed()
  .setTitle(`${message.author.username} ha tirado el dado.`)
  .setDescription("El dado a caido en:")
  .setImage(dado)
  .setColor("RANDOM")

  message.channel.send({embeds: [embed]});*/
    }
}
console.log(`Comando: ${ncomando}: ERROR`.red);