module.exports = {
    name: "testembed",
    run: async (netcat, message, args) => {
        if(message.author.id !== "995661776337240094") return message.channel.send("**⛔ | PERMISSION_DENIED :** No tienes permiso para usar este comando, sólo el mi creador puede usar este comando.\nPersonal autorizado: DragonCat#1063");

        message.channel.send("Empty");
          
    }
}