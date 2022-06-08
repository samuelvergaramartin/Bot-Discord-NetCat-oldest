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
   if(cantidad < 0) return message.channel.send(`:x: **ERROR **: La cantidad introducida no puede ser un número negativo, no puedo borrar ${cantidad} mensajes! no tiene ningún sentido eso!`);
   if(cantidad > 100) return message.channel.send(":x: **ERROR**: La cantidad de mensajes a borrar no puede ser mayor a 100, si desea borrar más de 100 mensajes utilice este comando varias veces, pero ingresando una cantidad a borrar dentro del rango establecido.");
  if(!cantidad) return message.channel.send("Debes decir una cantidad de mensajes a borrar, debe ser entre 1 y 100.");//.then(msg => msg.delete({timeout: 3000}));
message.channel.bulkDelete(cantidad).catch(()=> {
    message.channel.send(":x: **ERROR**: Dentro del rango de mensajes a borrar existen mensajes con una antigüedad superior a 14 días, no puedo borrar mensajes tan antiguos.\nSi aún así desea borrar todos los mensajes de este canal, le sugiero que use el comando `nc/bomba-atómica`");
})
    }
}