const Discord = require ('discord.js');

module.exports = {
    name: "exit",
    run: async (client, message, args) => {
        message.channel.send("Comando deshabilitado temporalmente.")
       /* let ID = ["911352430963347537"]

  if(!ID.includes(message.author.id)) return message.channel.send("** ⛔ | Error :** Sólo mi creador, Sam170703#6466, puede usar este comando.")
        message.author.send(":white_check_mark: ||  Servidor abandonado")
        message.channel.send("Abandonando servidor...")
        message.guild.leave();*/
    }
}