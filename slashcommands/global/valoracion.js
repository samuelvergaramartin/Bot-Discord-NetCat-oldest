const { SlashCommandBuilder, 
    ActionRowBuilder, 
    TextInputBuilder,
    ModalBuilder,
    TextInputStyle} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName("valoracion")
    .setDescription("Escribe una reseña de NetCat."),
			
    execute: async(netcat, interaction) => {

        const modal = new ModalBuilder()
        .setTitle("Nueva reseña de NetCat")
        .setCustomId("valoracion")

        const valoracion = new TextInputBuilder()
        .setCustomId("valoracion")
        .setLabel("¿Qué te parece NetCat?")
        .setPlaceholder("Me ha gustado mucho por.../No me ha gustado por...")
        .setStyle(TextInputStyle.Paragraph)

        const row = new ActionRowBuilder().addComponents(valoracion);

        modal.addComponents(row);

        await interaction.showModal(modal);
    }
}