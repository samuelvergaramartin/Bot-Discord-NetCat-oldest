const Discord = require('discord.js');
const color = require('colors');
const listallcommands = require('../../sistema/modulos/listado-comandos.json');
var ncomando = listallcommands.reboot;
const socket = require('../../sistema/sockets/socket.json');
var nombrepropietario = socket.ownername;
var idpropietario = socket.ownerid;

module.exports = {
    name: `${ncomando}`,
    run: (netcat, message, args) => {
        if(message.author.id !== "995661776337240094") {
            message.channel.send(`**⛔ | PERMISSION_DENIED :** No tienes permiso para usar este comando, sólo mi creador puede usar este comando.\nPersonal autorizado: ${nombrepropietario}`);
        }
        else {
            const comds = netcat.comandos.size;

            const fs = require('fs')
            
            const afld = fs.readdirSync('./comandos');
            
            for (const folder of afld) {
            
            const Files = fs.readdirSync(`./comandos/${folder}`).filter(file => file.endsWith('.js'));
            
                for (const file of Files) {
            
            delete require.cache[require.resolve(`../../comandos/${folder}/${file}`)] 
            
                    const command = require(`../../comandos/${folder}/${file}`);
            
            netcat.comandos.set(command.name, command)
            
            }

            
            }
            
                
            
            message.channel.send(`
            🔄 |Reinicio! 
            
        ❗|Comandos Nuevos:\`\`\`${netcat.comandos.size - comds} \`\`\`
        :warning: |Ejecutor del reinicio:\`\`\`${message.author.username} \`\`\`
         ℹ️ |Soy:\`\`\`${netcat.user.username}! \`\`\`
            `)  
        }
    }
}
console.log(`Comando: ${ncomando}: INMUNE`.bgMagenta);