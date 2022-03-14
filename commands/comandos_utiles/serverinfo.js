const Discord = require ('discord.js');

module.exports = {
    name: "serverinfo",
    run: async (client, message, args) => {
    const { MessageEmbed } = require('discord.js');
    var server = message.guild;
    const owner = message.guild.fetchOwner();
    var nv = server.verificationLevel;
    var canales = server.channels.cache;
    if(nv === "NONE"){
        var nv = "⚪ Ninguno"
    } 
    if(nv === "LOW"){
        var nv = "🟢 Bajo"
    } 
    if(nv === "MEDIUM"){
        var nv = "🟡 Medio"
    } 
    if(nv === "HIGH"){
        var nv = "🟠 Alto"
    } 
    if(nv === "VERY_HIGH"){
        var nv = "🔴 Muy alto"
    } 
  
    const embed = new MessageEmbed()
         .setThumbnail(server.iconURL())
         .setAuthor({name: server.name,iconURL: server.iconURL()})
         .addField("ID del Servidor", `${server.id}`, true)
         .addField('Número de Bots', `${server.members.cache.filter(m => m.user.bot).size}`, true)
         .addField('Creado el', `${server.createdAt}`, true)
         .addField('Dueño del Servidor', `${await owner}`, true)
         .addField('Número de Miembros',` ${server.memberCount}`, true)
         .addField('Número de Roles',` ${server.roles.cache.size}`, true)
         .addField("Número de emojis del servidor", `${server.emojis.cache.size}`, true)
         .addField("Boosts", `${server.premiumSubscriptionCount.toString()}`, true)
         .addField("Nivel de verificación del servidor", `${nv}`, true)
         .addField("Número total de canales", `${canales.size}`, true)
         .addField("Número de canales de texto", `${canales.filter(channel => channel.type === "GUILD_TEXT").size}`, true)
         .addField("Número de canales de voz", `${canales.filter(channel => channel.type === "GUILD_VOICE").size}`, true)
        // .addField('Testeador', `${canales.filter(channel => channel.type === "GUILD_ANNOUNCEMENT").size}`, true)
         .setColor("RANDOM")
         message.channel.send({embeds: [embed]}); 
    }
}