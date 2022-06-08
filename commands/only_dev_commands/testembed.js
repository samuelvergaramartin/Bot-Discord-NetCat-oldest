module.exports = {
    name: "testembed",
    run: async (client, message, args) => {
        if(message.author.id !== "911352430963347537") return message.channel.send("**⛔ | PERMISSION_DENIED :** No tienes permiso para usar este comando, sólo el mi creador puede usar este comando.\nPersonal autorizado: Sam170703#6466");

        message.channel.send("Empty");
          
    }
}