const Discord = require ('discord.js');

module.exports = {
    name: "clear",
    run: async (client, message, args) => {
        if(!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send("No tienes el permiso `MANAGE_MESSAGES`")
        if (!message.guild.me.permissions.has("MANAGE_MESSAGES")) {
            return message.channel.send("**❌ | ERROR: **No tengo los permisos necesarios.\n Permisos que me faltan: `MANAGE_MESSAGES`.")
            }

//if(message.deletable) message.delete()
   let cantidad = parseInt(args[0]);
  if(!cantidad) return message.channel.send("Debes decir una cantidad de mensajes a borrar, debe ser entre 1 y 100.");//.then(msg => msg.delete({timeout: 3000}));
message.channel.bulkDelete(cantidad);
    }
}