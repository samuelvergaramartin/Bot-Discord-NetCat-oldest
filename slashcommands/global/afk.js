const db = require('megadb');
const { SlashCommandBuilder } = require('discord.js')
const systemstatus = new db.crearDB('systemstatus');
const estadosistemadb = require('../../mega_databases/systemstatus.json');
const estadomodulosdb = require('../../mega_databases/modulestatusdb.json')
const estadocomandosdb = require('../../mega_databases/commandstatusdb.json');
const listallcommands = require('../../sistema/modulos/listado-comandos.json');
const listallmodules = require('../../sistema/modulos/modulos.json');
const comstatus = require('../../sistema/modulos/com-status-list.json');
const modstatus = require('../../sistema/modulos/mod-status-list.json');
const privados = require('../../sistema/modulos/com-privados.json');
const {ownerid, ownername} = require('../../sistema/sockets/socket.json');
const serversmodstatusdb = new db.crearDB('serversmodstatus');
const afkdb = new db.crearDB(`afk`)

var estadosistema = estadosistemadb.mode;
var chistes = listallmodules.modulo1;
var configuracion = listallmodules.modulo2;
var conversacion = listallmodules.modulo3;
var diversion = listallmodules.modulo4;
var economia = listallmodules.modulo5;
var gifs = listallmodules.modulo6;
var informacion = listallmodules.modulo7;
var juegos = listallmodules.modulo8;
var moderacion = listallmodules.modulo9;
var musica = listallmodules.modulo10;
var nsfw = listallmodules.modulo11;
var reaccion = listallmodules.modulo12;
var links = listallmodules.modulo13;
var historia = listallmodules.modulo14;
var utiles = listallmodules.modulo15;
var vip = listallmodules.modulo16;
var commandisok = comstatus.green;
var commandisenmantenimiento = comstatus.yellow;
var commandiserror = comstatus.red;
var commandisoffline = comstatus.grey;
var modisonline = modstatus.online;
var modisundermaintenance = modstatus.undermaintenance;
var modisoffline = modstatus.offline;
var modisoutofservice = modstatus.outofservice;
var ncomando = listallcommands.afk;
var estadomodulo = estadomodulosdb.utiles;
var estadocomando = estadocomandosdb.akf;
var modulodeestecomando = utiles;

module.exports = {
    data: new SlashCommandBuilder()
    .setName("afk")
    .setDescription("Necesitas que nadie te moleste mientras estas ocupado?")
    .addStringOption(reason => 
        reason.setName('reason')
        .setDescription('Coloca la razon de su afk')),
			
    execute: async(netcat, interaction) => {

        console.log('..')
        var estadosistema = await systemstatus.obtener("mode");
//ok, mira, muy sencillo, yo tengo los comandos de Netcat en modulos, entonces, lo del ejecutarcomandoisOk es una funcion q tengo yo en todos los archivos de cada comando del bot, y q la tengo conectada directamente al megadb de los estados de los comandos 
        //Explicame como funciona eso de ejecutarcomandoisOK
        async function ejecutarcomandoisOK() {
            async function ejecutarcomando() {
                const razon = interaction.options.getString('reason') || 'Sin razon'

                if(afkdb.has(`afk-${interaction.user.id}+${interaction.guild.id}`)){
                    return interaction.reply(`Hey ya estabas afk, si quieres salirte solo escribe en este canal`)
                }
//en plan.., todo esto, a ver, q te digo


                await afkdb.set(`afk-${interaction.user.id}+${interaction.guild.id}`, razon)
                 return interaction.reply(`${interaction.user}, Ahora estás en modo AFK por el siguiente motivo: **${razon}**.\nAvisaré a quienes te mencionen de que estás en modo AFK.`)
            }

       let iddelservidorejecutor = interaction.guildId;
       
       let laidservidorejecutor = await serversmodstatusdb.obtener(iddelservidorejecutor);
        if(!laidservidorejecutor) {
            serversmodstatusdb.set(`${iddelservidorejecutor}.${chistes}`, `${modisonline}`);
            serversmodstatusdb.set(`${iddelservidorejecutor}.${configuracion}`, `${modisonline}`);
            serversmodstatusdb.set(`${iddelservidorejecutor}.${conversacion}`, `${modisonline}`);
            serversmodstatusdb.set(`${iddelservidorejecutor}.${diversion}`, `${modisonline}`);
            serversmodstatusdb.set(`${iddelservidorejecutor}.${economia}`, `${modisonline}`);
            serversmodstatusdb.set(`${iddelservidorejecutor}.${gifs}`, `${modisonline}`);
            serversmodstatusdb.set(`${iddelservidorejecutor}.${informacion}`, `${modisonline}`);
            serversmodstatusdb.set(`${iddelservidorejecutor}.${juegos}`, `${modisonline}`);
            serversmodstatusdb.set(`${iddelservidorejecutor}.${moderacion}`, `${modisonline}`);
            serversmodstatusdb.set(`${iddelservidorejecutor}.${musica}`, `${modisonline}`);
            serversmodstatusdb.set(`${iddelservidorejecutor}.${nsfw}`, `${modisonline}`);
            serversmodstatusdb.set(`${iddelservidorejecutor}.${reaccion}`, `${modisonline}`);
            serversmodstatusdb.set(`${iddelservidorejecutor}.${links}`, `${modisonline}`);
            serversmodstatusdb.set(`${iddelservidorejecutor}.${historia}`, `${modisonline}`);
            serversmodstatusdb.set(`${iddelservidorejecutor}.${utiles}`, `${modisonline}`);
            serversmodstatusdb.set(`${iddelservidorejecutor}.${vip}`, `${modisonline}`);
            ejecutarcomando();

        }
        else {
            var estadosvmodulo = await serversmodstatusdb.obtener(`${iddelservidorejecutor}.${modulodeestecomando}`);
            if(estadosvmodulo === modisonline) {
                ejecutarcomando();
            }
            if(estadosvmodulo === modisoffline) {
                return interaction.reply(`**:x: | MODULE_OFFLINE:** Módulo de ${modulodeestecomando} apagado\nSi desea usar este comando, encienda el módulo.`);
            }
            if(estadosvmodulo !== modisonline && estadosvmodulo !== modisoffline) {
                return interaction.reply("**:x: | ERROR:** Error detectado! Anti-Crash-System: ACTIVATED!\nPor favor, reporte este error al staff del server o al desarrollador del bot.")
            }
        }
}
        if(ncomando == privados.test) {
            if(interaction.user.id !== ownerid) {
                return interaction.reply(`**⛔ | PERMISSION_DENIED :** No tienes permiso para usar este comando, sólo mi creador puede usar este comando.\nPersonal autorizado: ${ownername}`);
            }
            else {
                ejecutarcomandoisOK();
            }
        }
        else {
            if(estadosistema === "under-maintenance") {
                if(interaction.user.id !== ownerid) {
                return interaction.reply("**:warning: | SYSTEM_UNDER_MAINTENANCE: ** Sistema en mantenimiento, bot en mantenimiento, disculpe las molestias.")
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
                        if(interaction.user.id !== ownerid) {
                            return interaction.reply(`**:warning: | COMMAND_UNDER_MAINTENANCE :** Comando en mantenimiento, disculpe las molestias.`);
                        }
                        else {
                            ejecutarcomandoisOK();
                        }
                       }
                       if(estadocomando == commandiserror) {
                        return interaction.reply("**:x: | ERROR:** Error detectado! Anti-Crash-System: ACTIVATED!\nPor favor, reporte este error al staff del server o al desarrollador del bot.")
                       }
                       if(estadocomando == commandisoffline) {
                        return interaction.reply("**:x: | COMMAND_UNAVALIABLE:** Comando no disponible indefinidamente. Disculpe las molestias.")
                       }
                    }
                    if(estadomodulo == modisundermaintenance) {
                        if(estadocomando == commandisoffline) {
                            return interaction.reply("**:x: | COMMAND_UNAVALIABLE:** Comando no disponible indefinidamente. Disculpe las molestias.")
                           }
                           else {
                            if(interaction.user.id !== ownerid) {
                                return interaction.reply(`**:warning: | MODULE_UNDER_MAINTENANCE :** Módulo de ${modulodeestecomando} en mantenimiento, disculpe las molestias.`);
                            }
                            else {
                                ejecutarcomandoisOK();
                            }
                           
                           }
                    }
                    if(estadomodulo == modisoffline) {
                        if(estadocomando == commandisoffline) {
                            return interaction.reply("**:x: | COMMAND_UNAVALIABLE:** Comando no disponible indefinidamente. Disculpe las molestias.")
                           }
                           else {
                            return interaction.reply(`**:x: | MODULE_OFFLINE:** Módulo de ${modulodeestecomando} apagado\nSi desea usar este comando, encienda el módulo.`);
                           }
                    }
                    if(estadomodulo == modisoutofservice) {
                        if(estadocomando == commandisoffline) {
                            return interaction.reply("**:x: | COMMAND_UNAVALIABLE:** Comando no disponible indefinidamente. Disculpe las molestias.")
                           }
                           else {
                            return interaction.reply("**:x: | MODULE_UNAVALIABLE:** Módulo no disponible indefinidamente. Disculpe las molestias.")
                           }
                    }
            
                }
                else {
                    return interaction.reply("**:x: | ERROR:** Error detectado! Anti-Crash-System: ACTIVATED!\nPor favor, reporte este error al staff del server o al desarrollador del bot.")
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

