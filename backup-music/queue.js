const { fullQueue } = require("../config_music/music-config");
const { getVoiceConnection } = require("@discordjs/voice");

module.exports = {
  name: "queue",
  description: "Ver lista de reproduccion",
  run: async(netcat, message, args, discord) =>{
    const pvc = getVoiceConnection(message.guild.id);
    if (!pvc) return message.reply("No se esta reproduciendo musica");

    const player = getVoiceConnection(message.guild.id).state.subscription
      .player;

    // console.log(player.state.resource.metadata.title);

    const songs = fullQueue(message.guild.id);

    const embed = {
      author: {
        name: "NETCAT MUSIC",
        icon_url:
          "https://cdn.discordapp.com/avatars/962316970131353641/eddbc8163f24e79a3ca1841c9b964b36.png?size=2048",
      },
      title: "Lista de reproduccion",
      description: "Lista de reproduccion:\n\n" + songs.join(""),
      color: "RED",
    };

    message.reply({ embeds: [embed] });
  },
};