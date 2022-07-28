const { SlashCommandBuilder } = require('@discordjs/builders');
const Discord = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName("helloworld")
    .setDescription("Ejecuta tu primer slashcommand"),
			
    run: async(client, interaction) => {
        interaction.reply({ content: "Hola mundo!", ephemeral: false });
    }
}