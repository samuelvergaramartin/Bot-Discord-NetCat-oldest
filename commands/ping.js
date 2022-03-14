module.exports = {
    name: "ping",
    run: async (client, message, args) => {
        message.channel.send(`__**Latencia**__:\nPing: ${client.ws.ping} ms`)
    }
}