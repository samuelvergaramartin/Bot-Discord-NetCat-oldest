module.exports = {
    name: "ping",
    run: async (client, message, args) => {
        const { MessageEmbed } = require('discord.js');
        const time = Date.now()
        const embed = new MessageEmbed()
        .setTitle("Midiendo latencia...")
        .setDescription("Discord API: Calculando...\nTiempo de respuesta del bot: Calculando...")
        .setColor('ff00d9')
        message.channel.send({ embeds: [embed] }).then(msg => {
            let tiempoTotal = time - Date.now()
            var resultado = Math.abs(tiempoTotal);
            const embed2 = new MessageEmbed()
            .setTitle("Pong! 🏓")
            .setDescription("`Discord API:` " +client.ws.ping+ " ms\n`Tiempo de respuesta del bot:` " +resultado+ " ms")
            .setColor('ff00d9')
            msg.edit({ embeds: [embed2] });
        })
          
    }
  }
  