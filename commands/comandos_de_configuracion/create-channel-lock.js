const Discord = require ('discord.js');


module.exports = {
    name: "create-channel-lock",
    run: async (client, message, args) => {
        let everyone = message.guild.roles.cache.find(rol => rol.name == "@everyone");
        if(!message.member.permissions.has("MANAGE_CHANNELS")) return message.channel.send("No tienes el permiso `MANAGE_CHANNELS`")
        if (!message.guild.me.permissions.has("MANAGE_CHANNELS")) {
            return message.channel.send("**❌ | ERROR: **No tengo los permisos necesarios.\n Permisos que me faltan: `MANAGE_CHANNELS`.")
            }

        //let (e) = message.guild.channels.cache.find(canal => canal.name == `canal${message.author.username}`)
        const nombre = args.join(" ")
        //let canalseleccionado = message.guild.channels.cache.find(canal => canal.name == `${nombre}`);
        if(!nombre) {
            message.channel.send("Debes escribir el nombre del canal que deseas crear.\nSintaxis: `nc/create-channel-lock` <nombre del canal a crear>\nPor ejemplo: nc/create-channel-lock Mi churri.")
        }

        if(nombre){
            message.guild.channels.create(nombre, {
                permissionOverwrites: [
                    {
                        id: everyone.id,
                        allow: ["VIEW_CHANNEL"],
                        deny: ["SEND_MESSAGES"]
                    },
                    {
                        id: message.author.id,
                        allow: ["VIEW_CHANNEL"]
                    }
                ]
            })
            message.channel.send(`✅ || Canal creado satisfactoriamente!\n__Nombre del canal creado__: **${nombre}**.\n__Tipo de canal__: **PÚBLICO**.\n__Permiso para enviar mensajes__: **DENEGADO PARA "Everyone". **`)
            
        }

        

       
       }
}