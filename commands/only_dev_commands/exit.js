const Discord = require ('discord.js');
var color = require('colors');
var ncomando = "exit";

module.exports = {
    name: "exit",
    run: async (netcat, message, args) => {
        //message.channel.send("🟡Este comando se encuentra fuera de servicio temporalmente. Disculpe las molestias")
        let ID = ["995661776337240094"]

  if(!ID.includes(message.author.id)) return message.channel.send("** ⛔ | Error :** Sólo mi creador, DragonCat#1063, puede usar este comando.")
        message.author.send(":white_check_mark: ||  Servidor abandonado")
        message.channel.send("Abandonando servidor...")
        message.guild.leave();
    }
}
console.log(`Comando: ${ncomando}: OK`.green)