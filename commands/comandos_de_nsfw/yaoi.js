const Discord = require ('discord.js');

module.exports = {
    name: "yaoi",
    run: async (client, message, args) => {
        const { MessageEmbed } = require('discord.js');
        if(!message.channel.nsfw) return message.channel.send(":x: || Los comandos NSWF sólo se pueden usar en un canal NSFW")
        const uno = `https://i.pinimg.com/474x/bb/9d/30/bb9d30572e968c2b2d7fe6b19756d6f2.jpg`
  const dos = `https://i.pinimg.com/474x/98/ef/40/98ef40680bb698f9e1755cc75e06194c.jpg`
  const tres = `https://i.pinimg.com/474x/7a/f0/54/7af0548f317cb4c80af185f638fc67cf.jpg`
  const cuatro = `https://i.pinimg.com/474x/40/50/de/4050de59e876c133138baac59b145ba9.jpg`
  const cinco = `https://i.pinimg.com/474x/65/81/a7/6581a739a075f9a70fe03bb788ce90ac.jpg`
  const seis = `https://i.pinimg.com/474x/4e/29/0c/4e290c2b619829478b20b5d2a3d0cce1.jpg`

  const a = [uno, dos, tres, cuatro, cinco, seis]
  let netcat = a[Math.floor(Math.random() * a.length)]
const embed = new MessageEmbed()
        .setTitle('Yaoi:')
        .setDescription(":underage:")
        .setImage(netcat)
        .setColor('RANDOM')
        .setTimestamp()
        .setFooter({text:`• Pedido por ${message.author.tag}`,iconURL: message.author.displayAvatarURL({format: "png"})});
        message.channel.send({embeds: [embed]});
    }
}