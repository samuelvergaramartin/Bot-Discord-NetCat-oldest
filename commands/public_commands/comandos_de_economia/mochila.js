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
var comandosvip = listallmodules.modulo16;
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


var ncomando = listallcommands.mochila;
var estadomodulo = estadomodulosdb.economia;
var estadocomando = estadocomandosdb.mochila;
var modulodeestecomando = economia;
const serversmodstatusdb = new db.crearDB('serversmodstatus');
const objeto1 = new db.crearDB('objeto1')
const objeto2 = new db.crearDB('objeto2')
const objeto3 = new db.crearDB('objeto3')
const objeto4 = new db.crearDB('objeto4')
const objeto5 = new db.crearDB('objeto5')
const vip = new db.crearDB('vip')

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
                const user = message.author || message.mentions.members.first()
        const { EmbedBuilder } = require('discord.js');

  if(!objeto1.tiene(`${user.id}`)){
    objeto1.establecer(`${user.id}`, 0)
  }
  
  if(!objeto2.tiene(`${user.id}`)){
    objeto2.establecer(`${user.id}`, 0)
  }

  if(!objeto3.tiene(`${user.id}`)){
    objeto3.establecer(`${user.id}`, 0)
  }

  if(!objeto4.tiene(`${user.id}`)){
    objeto4.establecer(`${user.id}`, 0)
  }

  if(!objeto5.tiene(`${user.id}`)){
    objeto5.establecer(`${user.id}`, 0)
  }

  if(!vip.tiene(`${user.id}`)){
    vip.establecer(`${user.id}`, 0)
  }

  const objetonumero1 = await objeto1.obtener(`${user.id}`)
  const objetonumero2 = await objeto2.obtener(`${user.id}`)
  const objetonumero3 = await objeto3.obtener(`${user.id}`)
  const objetonumero4 = await objeto4.obtener(`${user.id}`)
  const objetonumero5 = await objeto5.obtener(`${user.id}`)
  const objetovip = await vip.obtener(`${user.id}`)


  const embed1 = new EmbedBuilder()

    .setAuthor({name:`${message.author.tag}`,iconURL: message.author.displayAvatarURL({format: "png"})})
    .setDescription(`**__Inventario de objetos__**\nZapatillas de deporte: ${objetonumero1}\nPienso para gatos: ${objetonumero2}\nCoche de carreras: ${objetonumero3}\nCapa de invisibilidad: ${objetonumero4}\nGuardaespaldas: ${objetonumero5}\n**Miembro VIP**: ${objetovip}\nTotal de objetos: ${objetonumero1 + objetonumero2 + objetonumero3 + objetonumero4 + objetonumero5 + objetovip}`)
    .setColor('0xff00d9')
    .setFooter({text:`• Bot creado por DragonCat#1063 | Pedido por ${message.author.tag}`,iconURL: message.author.displayAvatarURL({format: "png"})});
//if(message.deletable) message.delete()
message.channel.send({embeds: [embed1]});

    return;
                
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


