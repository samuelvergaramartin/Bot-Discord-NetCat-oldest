const Discord = require("discord.js");
var colors = require('colors');
var ncomando = "happy-birthday";
module.exports = {
    name: `${ncomando}`,
    run: async (client, message, args) => {
        message.channel.send("Muchas gracias! 😸 uwu 😽")
    }
}
console.log(`Comando: ${ncomando}: OK`.green)