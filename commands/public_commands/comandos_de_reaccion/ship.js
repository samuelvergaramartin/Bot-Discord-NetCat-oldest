const Discord = require('discord.js');
const db = require('megadb');
const systemstatus = new db.crearDB('systemstatus');
const estadosistemadb = require('../../../mega_databases/systemstatus.json');
var estadosistema = estadosistemadb.mode;
const estadomodulosdb = require('../../../mega_databases/modulestatusdb.json')
const estadocomandosdb = require('../../../mega_databases/commandstatusdb.json');
const color = require('colors');
const listallcommands = require('../../../sistema/modulos/listado-comandos.json');
const listallmodules = require('../../../sistema/modulos/modulos.json');
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
const modconfiguracion = require('../../../sistema/modulos/mod-configuracion.json');
const modinformacion = require('../../../sistema/modulos/mod-informacion.json');
const modmoderacion = require('../../../sistema/modulos/mod-moderacion.json');
const modmusica = require('../../../sistema/modulos/mod-musica.json');
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


var ncomando = listallcommands.ship;
var estadomodulo = estadomodulosdb.reaccion;
var estadocomando = estadocomandosdb.ship;
var modulodeestecomando = reaccion;
const serversmodstatusdb = new db.crearDB('serversmodstatus');

module.exports = {
    name: `${ncomando}`,
    run: async(netcat, message, args) => {
        var estadosistema = await systemstatus.obtener("mode");
        var estadomodulochistes = estadomodulosdb.chistes;
        var estadomoduloconfiguracion = estadomodulosdb.configuracion;
        var estadomoduloconversacion = estadomodulosdb.conversacion;
        var estadomodulodiversion = estadomodulosdb.diversion;
        var estadomoduloeconomia = estadomodulosdb.economia;
        var estadomodulogifs = estadomodulosdb.gifs;
        var estadomoduloinformacion = estadomodulosdb.informacion;
        var estadomodulojuegos = estadomodulosdb.juegos;
        var estadomodulomoderacion = estadomodulosdb.moderacion;
        var estadomodulomusica = estadomodulosdb.musica;
        var estadomodulonsfw = estadomodulosdb.nsfw;
        var estadomoduloreaccion = estadomodulosdb.reaccion;
        var estadomodulolinks = estadomodulosdb.links;
        var estadomodulohistoria = estadomodulosdb.historia;
        var estadomoduloutiles = estadomodulosdb.utiles;
        var estadomodulovip = estadomodulosdb.vip;
        async function ejecutarcomandoisOK() {
            async function ejecutarcomando() {
                message.channel.send("Lets go! Lets ready!"); 
            }
       let iddelservidorejecutor = message.guild.id;
       
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
                message.channel.send(`**:x: | MODULE_OFFLINE:** Módulo de ${modulodeestecomando} apagado\nSi desea usar este comando, encienda el módulo.`);
            }
            if(estadosvmodulo !== modisonline && estadosvmodulo !== modisoffline) {
                message.channel.send("**:x: | ERROR:** Error detectado! Anti-Crash-System: ACTIVATED!\nPor favor, reporte este error al staff del server o al desarrollador del bot.")
            }
        }
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
/*
const Discord = require ('discord.js');
const color = require('colors');
var ncomando = "ship";

module.exports = {
    name: `${ncomando}`,
    run: async (netcat, message, args) => {
      message.channel.send("**:x: | ERROR:** Comando averiado, por favor, reporte el error con el comando `nc/bugreport`.");
    /*let user = message.mentions.users.first() 
  if(!user) return message.channel.send(":x: || Debes mencionar a alguien") || netcat.users.cache.get(args[0]) || message.author;
  const { EmbedBuilder } = require('discord.js');
  const cero = `https://cdn.discordapp.com/attachments/791270423630315521/817739616408961024/Noembed.png`
  const diez = `https://cdn.discordapp.com/attachments/791270423630315521/817739571386515526/10.png`
  const veinticinco = `https://cdn.discordapp.com/attachments/791270423630315521/817739573181284372/25.png`
  const treinta = `https://cdn.discordapp.com/attachments/791270423630315521/817739574948003850/30.png`
  const cuarentayocho = `https://cdn.discordapp.com/attachments/791270423630315521/817739576729927690/48.png`
  const cincuenta = `https://cdn.discordapp.com/attachments/791270423630315521/817739578529021997/50.png`
  const sesentaysiete = `https://cdn.discordapp.com/attachments/791270423630315521/817739580060860444/67.png`
  const setentaydos = `https://cdn.discordapp.com/attachments/791270423630315521/817739581365551164/72.png`
  const ochentaycuatro = `https://cdn.discordapp.com/attachments/791270423630315521/817739583344345138/84.png`
  const noventaynueve = `https://cdn.discordapp.com/attachments/791270423630315521/817739585127317534/99.png`
  const cien = `https://cdn.discordapp.com/attachments/791270423630315521/817739587203104778/100.png`
  
  const lol = [cero, diez, veinticinco, treinta, cuarentayocho, cincuenta, sesentaysiete, setentaydos, ochentaycuatro, noventaynueve, cien]
  let amor = lol[Math.floor(Math.random() * lol.length)]
  const embed = new EmbedBuilder()
  .setTitle(`${message.author.username} y ${user.username} son compatilbes un...`)
  .setImage(amor)
  .setTimestamp()
  .setFooter({text:`• Bot creado por DragonCat#1063 | Pedido por ${message.author.tag}`,iconURL: message.author.displayAvatarURL({format: "png"})})
        message.channel.send({embeds: [embed]});*//*
}
    
}
console.log(`Comando: ${ncomando}: ERROR`.red);*/