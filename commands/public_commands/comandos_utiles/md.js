const Discord = require ('discord.js');

module.exports = {
    name: "md",
    run: async (client, message, args) => {
        message.channel.send("🟡 Este comando se encuentra fuera de servicio temporalmente. Disculpe las molestias")
/*let mensaje = args.join(" ");

if(!mensaje) return message.channel.send(`Escriba un mensaje para enviartelo al MD`);

const uno = `:white_check_mark: || Ya te envié el mensaje al privado`
const dos = `${message.author.username}, revisa tu MD`
const final = [uno, dos]
let awa = final[Math.floor(Math.random() * final.length)]


message.author.send(mensaje);

message.channel.send(uno)/*.then(msg =>{
    msg.delete()

})*/
//message.channel.send(dos)
    }
}