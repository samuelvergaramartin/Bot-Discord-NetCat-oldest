const Discord = require('discord.js');
const db = require('megadb');
const systemstatus = new db.crearDB('systemstatus');
const estadosistemadb = require('../../../mega_databases/systemstatus.json');

const estadomodulosdb = require('../../../mega_databases/modulestatusdb.json')
const estadocomandosdb = require('../../../mega_databases/commandstatusdb.json');
const color = require('colors');
const listallcommands = require('../../../sistema/modulos/listado-comandos.json');
const listallmodules = require('../../../sistema/modulos/modulos.json');
var configuracion = listallmodules.modulo3;
var informacion = listallmodules.modulo1;
var moderacion = listallmodules.modulo2;
const modconfiguracion = require('../../../sistema/modulos/mod-configuracion.json');
const modinformacion = require('../../../sistema/modulos/mod-informacion.json');
const modmoderacion = require('../../../sistema/modulos/mod-moderacion.json');

const comstatus = require('../../../sistema/modulos/com-status-list.json');
var commandisok = comstatus.green;
var commandisenmantenimiento = comstatus.yellow;
var commandiserror = comstatus.red;
var commandisoffline = comstatus.grey;
const modstatus = require('../../../sistema/modulos/mod-status-list.json');
var modisonline = modstatus.online;
var modisundermaintenance = modstatus.undermaintenance;
var modisoffline = modstatus.offline;
var modisoutofservice = modstatus.outofservice;
const privados = require('../../../sistema/modulos/com-privados.json');
const socket = require('../../../sistema/sockets/socket.json');
var nombrepropietario = socket.ownername;
var idpropietario = socket.ownerid;

const commandstatusdb = new db.crearDB('commandstatusdb');
const modulestatusdb = new db.crearDB('modulestatusdb');

var ncomando = listallcommands.help;
var estadomodulo = estadomodulosdb.informacion;
var estadocomando = estadocomandosdb.help;
var modulodeestecomando = informacion;

const prefixdb = new db.crearDB('setprefixdb');

module.exports = {
    name: `${ncomando}`,
    run: async(client, message, args) => {
        var estadosistema = await systemstatus.obtener("mode");
        var prefix = await prefixdb.obtener("778352952544329738");
        async function ejecutarcomandoisOK() {
            const { Client, MessageEmbed, MessageMenuOption, MessageMenu} = require('discord.js');
            const user = message.author;
            const embed = new MessageEmbed()

            .setTitle('📖Comandos de DexterBot📖:')
            .addField('Comandos de configuración:', `${prefix}${listallcommands.setprefix}`)
            .setColor('ff00d9')
            .setTimestamp()
            .setFooter({text:`• Bot creado por ${nombrepropietario} | Pedido por ${message.author.tag}`,iconURL: message.author.displayAvatarURL({format: "png"})})
          
            const embed2 = new MessageEmbed()
          
            .setTitle('📖Comandos de DexterBot📖:')
            .addField('Comandos de información:', `${prefix}${listallcommands.estadocomandos}\n${prefix}${listallcommands.estadomodulos}\n${prefix}${listallcommands.help}\n${prefix}${listallcommands.ping}\n${prefix}${listallcommands.serverinfo}`)
            .setColor('ff00d9')
            .setTimestamp()
            .setFooter({text:`• Bot creado por ${nombrepropietario} | Pedido por ${message.author.tag}`,iconURL: message.author.displayAvatarURL({format: "png"})})
          
            const embed3 = new MessageEmbed()
          
            .setTitle('📖Comandos de DexterBot📖:')
            .addField('Comandos de moderación:', `${prefix}${listallcommands.cleanall}\n${prefix}${listallcommands.kick}`)
            .setColor('ff00d9')
            .setTimestamp()
            .setFooter({text:`• Bot creado por ${nombrepropietario} | Pedido por ${message.author.tag}`,iconURL: message.author.displayAvatarURL({format: "png"})})

            const embedprincipal = new MessageEmbed()
          
            .setTitle("📖Comandos de DexterBot📖: Menú de módulos")
            .setDescription("Para ver los comandos de cualquier módulo seleccione el módulo que desee ver en la barra de menú situada abajo de este mensaje.")
            .addField('__📜Listado de módulos📜:__', ' - Comandos de configuración\n- Comandos de información\n- Comandos de moderación')
            .addField('Links de DexterBot', '[Canal de Twitch de Dexterpe](https://www.twitch.tv/dexterpe) y [Link permanente del servidor de Discord de Dexterpe](https://discord.gg/zu2DZry3fJ) ')
            .setFooter({text:`• Bot creado por ${nombrepropietario} | Pedido por ${message.author.tag}`,iconURL: message.author.displayAvatarURL({format: "png"})})
            .setColor('ff00d9')
            .setTimestamp()

            const row = new Discord.MessageActionRow()
			.addComponents(
				new Discord.MessageSelectMenu()
					.setCustomId('select')
					.setPlaceholder('Haz click aquí para desplegar el listado de módulos')
					.addOptions([
						{
							label: 'Comandos de configuración',
							description: 'Hacer click aquí para ver: Comandos de configuración',
							value: '1',
                            emoji: "⚙️"
						},
						{
							label: 'Comandos de información',
							description: 'Hacer click aquí para ver: Comandos de información',
							value: '2',
                            emoji: "ℹ️"
						},
                        {
							label: 'Comandos de moderación',
							description: 'Hacer click aquí para ver: Comandos de moderación',
							value: '3',
                            emoji: "💂"
						},
						{
							label: 'Menú principal',
							description: 'Regresa al menú principal',
							value: '4',
                            emoji: "◀️"
						},
                        
					]),
			);

            const msg = await message.channel.send({embeds: [embedprincipal], components: [row]});
          
            const filtro = i => i.user.id === message.author.id;
            const collector = msg.createMessageComponentCollector({filter: filtro,  time: 3600000 })

            collector.on('collect', async menu => {
                if(menu.values[0] === '1') {
                    await menu.deferUpdate();
                    menu.editReply({embeds: [embed]});
                }
                if(menu.values[0] === '2') {
                    await menu.deferUpdate();
                    menu.editReply({embeds: [embed2]});
                }
                if(menu.values[0] === '3') {
                    await menu.deferUpdate();
                    menu.editReply({embeds: [embed3]});
                }
                if(menu.values[0] === '4') {
                    await menu.deferUpdate();
                    menu.editReply({embeds: [embedprincipal]});
                }
                
            })
}
        if(ncomando == privados.test) {
            if(message.author.id !== idpropietario) {
                message.channel.send(`**⛔ | PERMISSION_DENIED :** No tienes permiso para usar este comando, sólo mi creador puede usar este comando.\nPersonal autorizado: ${nombrepropietario}`);
            }
            else {
                ejecutarcomandoisOK();
            }
        }
        else {
            if(estadosistema === "under-maintenance") {
                if(message.author.id !== idpropietario) {
                    message.channel.send("**:warning: | SYSTEM_UNDER_MAINTENANCE: ** Sistema en mantenimiento, bot en mantenimiento, disculpe las molestias.")
                }
                else {
                    ejecutarcomandoisOK();
                }
            }
            else {
                if(estadosistema === "online") {
                    if(estadomodulo == modisonline) {
                       
                       if(estadocomando == commandisok) {
                        ejecutarcomandoisOK();
                       }
                       if(estadocomando == commandisenmantenimiento) {
                        if(message.author.id !== idpropietario) {
                            message.channel.send(`**:warning: | COMMAND_UNDER_MAINTENANCE :** Comando en mantenimiento, disculpe las molestias.`);
                        }
                        else {
                            ejecutarcomandoisOK();
                        }
                       }
                       if(estadocomando == commandiserror) {
                        message.channel.send("**:x: | ERROR:** Error detectado! Anti-Crash-System: ACTIVATED!\nPor favor, reporte este error al staff del server o al desarrollador del bot.")
                       }
                       if(estadocomando == commandisoffline) {
                        message.channel.send("**:x: | COMMAND_UNAVALIABLE:** Comando no disponible indefinidamente. Disculpe las molestias.")
                       }
                    }
                    if(estadomodulo == modisundermaintenance) {
                        if(estadocomando == commandisoffline) {
                            message.channel.send("**:x: | COMMAND_UNAVALIABLE:** Comando no disponible indefinidamente. Disculpe las molestias.")
                           }
                           else {
                            if(message.author.id !== idpropietario) {
                                message.channel.send(`**:warning: | MODULE_UNDER_MAINTENANCE :** Módulo de ${modulodeestecomando} en mantenimiento, disculpe las molestias.`);
                            }
                            else {
                                ejecutarcomandoisOK();
                            }
                           
                           }
                    }
                    if(estadomodulo == modisoffline) {
                        if(estadocomando == commandisoffline) {
                            message.channel.send("**:x: | COMMAND_UNAVALIABLE:** Comando no disponible indefinidamente. Disculpe las molestias.")
                           }
                           else {
                            message.channel.send(`**:x: | MODULE_OFFLINE:** Módulo de ${modulodeestecomando} apagado\nSi desea usar este comando, encienda el módulo.`);
                           }
                    }
                    if(estadomodulo == modisoutofservice) {
                        if(estadocomando == commandisoffline) {
                            message.channel.send("**:x: | COMMAND_UNAVALIABLE:** Comando no disponible indefinidamente. Disculpe las molestias.")
                           }
                           else {
                            message.channel.send("**:x: | MODULE_UNAVALIABLE:** Módulo no disponible indefinidamente. Disculpe las molestias.")
                           }
                    }
            
                }
                else {
                    message.channel.send("**:x: | ERROR:** Error detectado! Anti-Crash-System: ACTIVATED!\nPor favor, reporte este error al staff del server o al desarrollador del bot.")
                }
            }
        }
    }
}
var estadosistema = estadosistemadb.mode;
if(estadosistema === "under-maintenance") {
    console.log(`Comando: ${ncomando}: ${commandisenmantenimiento} (Motivo: Sistema en mantenimiento)`.yellow);
}
else {
    if(estadosistema === "online") {
        
        if(estadomodulo == modisonline) {
           
           if(estadocomando == commandisok) {
            console.log(`Comando: ${ncomando}: ${commandisok}`.green);
           }
           if(estadocomando == commandisenmantenimiento) {
            console.log(`Comando: ${ncomando}: ${commandisenmantenimiento}`.yellow);
           }
           if(estadocomando == commandiserror) {
            console.log(`Comando: ${ncomando}: ${commandiserror}`.red);
           }
           if(estadocomando == commandisoffline) {
            console.log(`Comando: ${ncomando}: ${commandisoffline}`.grey);
           }
        }
        if(estadomodulo == modisundermaintenance) {
            if(estadocomando == commandisoffline) {
                console.log(`Comando: ${ncomando}: ${commandisoffline}`.grey);
               }
               else {
                console.log(`Comando: ${ncomando}: ${commandisenmantenimiento} (Motivo: Module: ${modulodeestecomando}: ${modisundermaintenance})`.yellow);
               }
        }
        if(estadomodulo == modisoffline) {
            if(estadocomando == commandisoffline) {
                console.log(`Comando: ${ncomando}: ${commandisoffline}`.grey);
               }
               else {
                console.log(`Comando: ${ncomando}: ${commandisoffline} (Motivo: Module: ${modulodeestecomando}: ${modisoffline})`.grey);
               }
        }
        if(estadomodulo == modisoutofservice) {
            if(estadocomando == commandisoffline) {
                console.log(`Comando: ${ncomando}: ${commandisoffline}`.grey);
               }
               else {
                console.log(`Comando: ${ncomando}: ${commandisoffline} (Motivo: Module: ${modulodeestecomando}: ${modisoutofservice})`.grey);
               }
        }

    }
    else {
        console.log(`Comando: ${ncomando}: ${commandiserror}`.red);
    }
}