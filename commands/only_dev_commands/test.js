const Discord = require('discord.js');

module.exports = {
    name: "test",
    run: async(netcat, message, args) =>{
        /*var embed = new Discord.EmbedBuilder()
        .setTitle("Titulo")
        .addFields([
            { name: 'one' , value: 'valor 1'},
            { name: 'two' , value: 'valor 2' },
        ]);
        message.channel.send({ embeds: [embed] });*/
        message.channel.send("Nada por testear)");
    }
}