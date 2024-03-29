const { eliminar } = require("../config_music/music-config");


module.exports = {
    name: "delsong",
    description: "Elimina una cancion",
    aliases: ["delS", "DS"],
    run: async(netcat, message, args, discord) =>{
      const res = eliminar({title: eliminar.title, GuildID: message.guild.id});
      //const res = eliminar(message.options.getString("titulo"), message.guild.id);
      const embed = {
        author: {
          name: "NETCAT MUSIC",
          icon_url:
            "https://cdn.discordapp.com/avatars/962316970131353641/eddbc8163f24e79a3ca1841c9b964b36.png?size=2048",
        },
        title: `${res.msg}`,
        description: `Cancion: **${res.title}**`,
        color: "RED",
      };
      
      message.reply({ embeds: [embed] });
    },
  };
  