const Discord = require("discord.js");
var colors = require('colors');
var ncomando = "a-bailar-netcat";
module.exports = {
    name: `${ncomando}`,
    run: async (client, message, args) => {
        message.channel.send("Siiiiiiiiii! Un Bailesito para celebrar mi cumple, let's go baby! come on!");
        message.channel.send("https://tenor.com/view/sophia-dance-cat-gif-15184082");
    }
}
console.log(`Comando: ${ncomando}: OK`.green)