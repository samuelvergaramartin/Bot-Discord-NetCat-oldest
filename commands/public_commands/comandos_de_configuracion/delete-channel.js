const Discord = require ('discord.js');

module.exports = {
    name: "delete-channel",
    run: async (client, message, args) => {
        if(!message.member.permissions.has("MANAGE_CHANNELS")) return message.channel.send("No tienes el permiso `MANAGE_CHANNELS`")
        if (!message.guild.me.permissions.has("MANAGE_CHANNELS")) {
            return message.channel.send("**❌ | ERROR: **No tengo los permisos necesarios.\n Permisos que me faltan: `MANAGE_CHANNELS`.")
            }
        message.author.send(":white_check_mark: || Canal eliminado correctamente")
  message.channel.delete();
    }
}