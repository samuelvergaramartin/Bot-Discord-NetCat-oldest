const { SlashCommandBuilder } = require('@discordjs/builders');
const Discord = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName("test")
    .setDescription("Ejecuta tu primer slashcommand")
    .addSubcommand(subcommand =>
		subcommand
			.setName('user')
			.setDescription('Info about a user')
			.addUserOption(option => option.setName('target').setDescription('The user')))
	.addSubcommand(subcommand =>
		subcommand
			.setName('server')
			.setDescription('Info about the server')),
			
    run: async(client, interaction) => {
        interaction.reply({ content: "**:x: | ERROR:** Interacción no detectada!", ephemeral: true });
    }
}