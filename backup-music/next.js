const { getVoiceConnection } = require("@discordjs/voice");

const { nextSong } = require("../config_music/music-config");

module.exports = {
  name: "next",
  description: "Pasa a la sigueinte cancion",
  run: async(netcat, message, args, discord) =>{
    const mvc = message.member.voice.channel.id;
    const pvc = getVoiceConnection(message.guild.id);

    if (!pvc) return message.reply("No se esta reproduciendo musica");

    if (mvc != pvc.joinConfig.channelId) {
      return message.reply("Tienes que estar en el mismo canal de voz");
    }

    const player = getVoiceConnection(message.guild.id).state.subscription
      .player;

    nextSong(
      message.guild.id,
      player.state.resource.metadata.key,
      message,
      player,
      pvc,
      "cmd"
    );
  },
};