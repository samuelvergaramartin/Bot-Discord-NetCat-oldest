const Discord = require('discord.js');
const db = require('megadb');
const systemstatus = new db.crearDB('systemstatus');
const estadosistemadb = require('../../mega_databases/systemstatus.json');
var estadosistema = estadosistemadb.mode;
const estadomodulosdb = require('../../mega_databases/modulestatusdb.json')
const estadocomandosdb = require('../../mega_databases/commandstatusdb.json');
const color = require('colors');
const listallcommands = require('../../sistema/modulos/listado-comandos.json');
const listallmodules = require('../../sistema/modulos/modulos.json');
var configuracion = listallmodules.modulo3;
var informacion = listallmodules.modulo1;
var moderacion = listallmodules.modulo2;
const modconfiguracion = require('../../sistema/modulos/mod-configuracion.json');
const modinformacion = require('../../sistema/modulos/mod-informacion.json');
const modmoderacion = require('../../sistema/modulos/mod-moderacion.json');

const comstatus = require('../../sistema/modulos/com-status-list.json');
var commandisok = comstatus.green;
var commandisenmantenimiento = comstatus.yellow;
var commandiserror = comstatus.red;
var commandisoffline = comstatus.grey;
const modstatus = require('../../sistema/modulos/mod-status-list.json');
var modisonline = modstatus.online;
var modisundermaintenance = modstatus.undermaintenance;
var modisoffline = modstatus.offline;
var modisoutofservice = modstatus.outofservice;
const privados = require('../../sistema/modulos/com-privados.json');
const socket = require('../../sistema/sockets/socket.json');
var nombrepropietario = socket.ownername;
var idpropietario = socket.ownerid;

const commandstatusdb = new db.crearDB('commandstatusdb');
const modulestatusdb = new db.crearDB('modulestatusdb');

var ncomando = listallcommands.eval;
var estadomodulo = estadomodulosdb.informacion;
var estadocomando = estadocomandosdb.eval;
var modulodeestecomando = informacion;

const { create } = require('sourcebin')
const { Client, EmbedBuilder, Intents } = require("discord.js");
//const mega = require('megadb'), quick = require('quick.db');
const ms = require('ms')



module.exports = {
    name: `${ncomando}`,
    run: async(netcat, message, args) => {
        var estadosistema = await systemstatus.obtener("mode");
        function ejecutarcomandoisOK() {
			if(!args[0]) return message.channel.send(':x: | Debes escribir algo para evaluar.\nSintaxis: `lobito/eval <código a evaluar>`\nPor ejemplo: `lobito/eval` message.author.id');

			//Eval
			async function enviar(mensaje) {
				return await message.channel.send(mensaje);
			};
		
			async function exec(codigo) {
				return await require('child_process').execSync(codigo);
			};
		
			function mayuscula(string) {
				string = string.replace(/[^a-z]/gi, '');
				return string[0].toUpperCase() + string.slice(1);
			};
		
			let tiempo1 = Date.now();
		//:stopwatch:
			const edit = new Discord.EmbedBuilder()
				.setDescription(':stopwatch: Evaluando...')
				.setColor('0x7289DA');
			message.channel.send({ embeds: [edit] }).then(async pito => {
				try {
					let code = args.join(' ');
					let evalued = await eval(code);
					let tipo = typeof evalued || 'Tipo no encontrado.';
					if(typeof evalued !== 'string')
						evalued = require('util').inspect(evalued, {
							depth: 0,
							maxStringLength: 2000
						});
					let txt = '' + evalued;
		
					if(txt.length >= 1024) {
						create([
							{
								content: `- - - Eval - - -\n\n${txt.replace(netcat.token, 'Wow, un token').replace(/(bot)/g, 'bot')}`,
								language: 'javascript'
							},
						],
						{
							title: 'Eval',
							description: 'El eval es muy largo'
						}).then(owo => {
							const embed = new Discord.EmbedBuilder()
                            .addFields([
                                {  name: ':inbox_tray: Entrada', value: `\`\`\`js\n${code.slice(0, 748)}\n\`\`\`` },
                                {  name: ':outbox_tray: Salida', value: `\`El codigo es muy largo, link:\` ${owo.url}` },
                                {  name: ':file_folder: Tipo', value: `\`\`\`js\n${mayuscula(tipo)}\n\`\`\`` },
                                {  name: ':stopwatch: Tiempo', value: `\`\`\`fix\n${Date.now() - tiempo1}ms\n\`\`\`` },
                            ])
							.setColor('0x7289DA');
							
		pito.edit({ embeds: [embed] });
						});
					} else {
						const embed = new Discord.EmbedBuilder()
                        .addFields([
                            {  name: ':inbox_tray: Entrada', value: `\`\`\`js\n${code.slice(0, 748)}\n\`\`\`` },
                            {  name: ':outbox_tray: Salida', value: `\`\`\`js\n${txt.replace(netcat.token, '🔴|No tengo la autoricacion para revelar eso.').replace(/(bot)/g, 'bot')}\n\`\`\`` },
                            {  name: ':file_folder: Tipo', value: `\`\`\`js\n${mayuscula(tipo)}\n\`\`\`` },
                            {  name: ':stopwatch: Tiempo', value: `\`\`\`fix\n${Date.now() - tiempo1}ms\n\`\`\`` },
                        ])
						.setColor('0x7289DA');
		pito.edit({ embeds: [embed] });
					}
				} catch (err) {
					let code = args.join(' ');
					const embed = new Discord.EmbedBuilder()
						.setAuthor({name:`Error en el eval`,iconURL: netcat.user.displayAvatarURL({ dynamic: true })})
						.addFields([
                            {  name: ':inbox_tray: Entrada', value: `\`\`\`js\n${code.slice(0, 748)}\n\`\`\`` },
                            {  name: ':outbox_tray: Salida', value: `\`\`\`js\n${err}\n\`\`\`` },
                            {  name: ':file_folder: Tipo', value: `\`\`\`js\nError\n\`\`\`` },
                        ])
						.setColor('0xFE2D00');
		pito.edit({ embeds: [embed] });
				};
			});
    
}
        if(ncomando == privados.eval) {
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

