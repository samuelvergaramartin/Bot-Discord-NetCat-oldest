module.exports = {
    name: "ping",
    run: async (client, message, args) => {
  
      message.channel.send("Midiendo latencia...")
          const time = Date.now()
          message.channel.send("Bip...bop...bip...🤖").then(msg => {
              let tiempoTotal = time - Date.now()
              var resultado = Math.abs(tiempoTotal);
              msg.edit("`Discord API:` " +client.ws.ping+ " ms\n`Tiempo de respuesta del bot:` " +resultado+ " ms")
          })
  
    }
  }
  