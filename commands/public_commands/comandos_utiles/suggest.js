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


var ncomando = listallcommands.suggest;
var estadomodulo = estadomodulosdb.utiles;
var estadocomando = estadocomandosdb.suggest;
var modulodeestecomando = utiles;
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
                // if(netcat.user.id == "962316970131353641") {
        //message.channel.send("Comando deshabilitado temporalmente")
       // if(args[0] ==="bugreport") //Aca decimos que el comando solo funcione si el usuario escribe -reportar bug
    //{
      let bug = args.slice(0).join(" ")
      if(!bug) return message.channel.send("**No has escrito ninguna sugerencia.**")

      //let sv = netcat.guilds.cache.get("900856291461824562")
      let sv = netcat.guilds.cache.get("900856291461824562")
/* Aqui pondrian la ID del servidor en el cual llegarian los reportes, normalmente se ponen la ID de los servidores de Soporte del BOT */
     //let channel = sv.channels.cache.get("949745852346417172")
      let channel = sv.channels.cache.get("965333897233711164")//

      if(!channel) { 
        let err = sv.channels.cache.filter(s => s.type==="text").random()
        err.send("**No tengo un Canal para mandar las sugerencias**")
        message.channel.send("**No puedo hacer eso ahora**")
        return;
      }
      /* Esto seria por si el BOT no pudo encontrar el Canal */

      let lugar;
      if(message.channel.type ==="dm") {
        lugar="Desde Mensaje Directo"
      } else {
        lugar=`Desde el servidor: **${message.guild.name}**` 
      }
/* Esto seria para describir si el mensaje fue por Privado o desde X servidor */

      const embed = new Discord.EmbedBuilder()
      .setTitle("Se ha realizado una sugerencia")
      .setDescription(`**Sugerido por:** ${message.author.tag}\n${lugar}\n**Descripcion de la sugerencia** ${bug}`)
      .setImage(message.attachments.first()?.url)
      .setColor('0xFE2D00')
      .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
/* Aca hemos hecho el Embed, sobre lo de "dynamic" significa que si el usuario tiene una imagen animada, la muestre animada */
      message.channel.send("✅ || Se ha enviado tu sugerencia a mi servidor de soporte. Gracias por tu aportación miau miau 😽.")
      //channel.send("<@&911517878505836584>, EMERGENCIA! TENEMOS UN BUG QUE RESOLVER!")
      channel.send("Atención equipo! Nueva sugerencia. Echenle un vistazo cuando puedan.\nPing: <@995661776337240094>")
     // channel.send(embed) //Mandariamos el Embed al canal de reportes de Bugs
      channel.send({embeds: [embed]});
 // } else {

 //   message.channel.send(`Sintaxis: nc/bugreport`)

 // }

    //} else {
        //message.channel.send("Comando deshabilitado temporalmente")
       // if(args[0] ==="bugreport") //Aca decimos que el comando solo funcione si el usuario escribe -reportar bug
    //{
      /*let bug = args.slice(0).join(" ")
      if(!bug) return message.channel.send("**No has escrito ninguna sugerencia.**")

      let sv = netcat.guilds.cache.get("900856291461824562")
     // let sv = netcat.guilds.cache.get("949740275784376371")
/* Aqui pondrian la ID del servidor en el cual llegarian los reportes, normalmente se ponen la ID de los servidores de Soporte del BOT */
    /* let channel = sv.channels.cache.get("949745852346417172")
      //let channel = sv.channels.cache.get("963171525274529852")

      if(!channel) { 
        let err = sv.channels.cache.filter(s => s.type==="text").random()
        err.send("**No tengo un Canal para mandar las sugerencias**")
        message.channel.send("**No puedo hacer eso ahora**")
        return;
      }
      /* Esto seria por si el BOT no pudo encontrar el Canal */

    /*  let lugar;
      if(message.channel.type ==="dm") {
        lugar="Desde Mensaje Directo"
      } else {
        lugar=`Desde el servidor: **${message.guild.name}**` 
      }
/* Esto seria para describir si el mensaje fue por Privado o desde X servidor */

     /* const embed = new EmbedBuilder()
      .setTitle("Se ha realizado una sugerencia")
      .setDescription(`**Sugerido por:** ${message.author.tag}\n${lugar}\n**Descripcion de la sugerencia** ${bug}`)
      .setImage(message.attachments.first()?.url)
      .setColor('0xFE2D00')
      .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
/* Aca hemos hecho el Embed, sobre lo de "dynamic" significa que si el usuario tiene una imagen animada, la muestre animada */
     /* message.channel.send("✅ || Se ha enviado tu sugerencia a mi servidor de soporte. Gracias por tu aportación miau miau 😽.")
      //channel.send("<@&911517878505836584>, EMERGENCIA! TENEMOS UN BUG QUE RESOLVER!")
      channel.send("Atención equipo! Nueva sugerencia. Echenle un vistazo cuando puedan.\nPing: <@911352430963347537>")
     // channel.send(embed) //Mandariamos el Embed al canal de reportes de Bugs
      channel.send({embeds: [embed]});
 // } else {

 //   message.channel.send(`Sintaxis: nc/bugreport`)

 // }

   // }*/
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
