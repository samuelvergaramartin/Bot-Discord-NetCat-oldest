const db = require('megadb');
const afkdb = new db.crearDB('afk');

module.exports = {
    afk: async(netcat, message) => {

        if(afkdb.has(`afk-${message.author.id}+${message.guild.id}`)){
            await afkdb.delete(`afk-${message.author.id}+${message.guild.id}`)
            message.channel.send(`Bienvenido ${message.author}, su estado afk ha sido removido`)

        } else if(message.mentions.members.first()){
    
            if(afkdb.has(`afk-${message.mentions.members.first().id}+${message.guild.id}`)){
                message.channel.send(`${message.author}, ${message.mentions.users.first().username} está en modo AFK. Intente ponerse en contacto con él/ella en otro momento por favor.`)
            }
        }
        ///SECCIÓN DEL COMANDO AFK///PRINCIPIO

if(afkdb.has(`afk-${message.author.id}+${message.guild.id}`)){
    await afkdb.delete(`afk-${message.author.id}+${message.guild.id}`)
    message.channel.send(`Bienvenido ${message.author}, su estado afk ha sido removido`)
}

if(message.mentions.members.first()){

    if(afkdb.has(`afk-${message.mentions.members.first().id}+${message.guild.id}`)){
        message.channel.send(`${message.author}, ${message.mentions.users.first().username} está en modo AFK. Intente ponerse en contacto con él/ella en otro momento por favor.`)
    }
}

    }
}