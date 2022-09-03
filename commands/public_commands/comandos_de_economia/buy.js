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


var ncomando = listallcommands.buy;
var estadomodulo = estadomodulosdb.economia;
var estadocomando = estadocomandosdb.buy;
var modulodeestecomando = economia;
const serversmodstatusdb = new db.crearDB('serversmodstatus');
const dinero = new db.crearDB('dinero')
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
                
     const user = message.author;
     
     const objeto = args[0]
     if(!objeto) return message.channel.send("Debes decir el objeto que deseas comprar.\nSintaxsis: `nc/buy` <nombre-del-objeto>.\nPor ejemplo: nc/buy zapatillas-de-deporte")
     
     if(objeto === 'zapatillas-de-deporte') {
         const dineroencartera = await dinero.obtener(`${user.id}`)

         if(dineroencartera < 500) return message.channel.send("No tienes suficiente dinero para comprar este objeto")

         if (!dinero.tiene(`${user.id}`))
         dinero.establecer(`${user.id}`, 0)
         if (!objeto1.tiene(`${user.id}`))
         objeto1.establecer(`${user.id}`, 0)

         let precio = Math.floor(Math.random() * 0) + 500
         let objetocomprado = Math.floor(Math.random() * 0) + 1

         dinero.restar(`${user.id}`, precio)
         objeto1.sumar(`${user.id}`, objetocomprado)

         return message.channel.send("Has comprado el objeto `zapatillas de deporte`. Gracias por tu compra 😺!\nTe he metido el objeto que has comprado en tu mochila, para verlo usa el comando `nc/mochila`\nEn tu mochila verás todos los objetos que hayas comprado y no hayas usado.\nSi quieres comprar algo más dimelo 😺, yo estaré por aquí miau miau 😺.")
     }

     if(objeto === 'pienso-para-gatos') {
        const dineroencartera = await dinero.obtener(`${user.id}`)

        if(dineroencartera < 1000) return message.channel.send("No tienes suficiente dinero para comprar este objeto")

        if (!dinero.tiene(`${user.id}`))
        dinero.establecer(`${user.id}`, 0)
        if (!objeto2.tiene(`${user.id}`))
        objeto2.establecer(`${user.id}`, 0)

        let precio = Math.floor(Math.random() * 0) + 1000
        let objetocomprado = Math.floor(Math.random() * 0) + 1

        dinero.restar(`${user.id}`, precio)
        objeto2.sumar(`${user.id}`, objetocomprado)

        return message.channel.send("Has comprado el objeto `pienso para gatos`. Gracias por tu compra 😺!\nTe he metido el objeto que has comprado en tu mochila, para verlo usa el comando `nc/mochila`\nEn tu mochila verás todos los objetos que hayas comprado y no hayas usado.\nSi quieres comprar algo más dimelo 😺, yo estaré por aquí miau miau 😺.")
    }

    if(objeto === 'coche-de-carreras') {
        const dineroencartera = await dinero.obtener(`${user.id}`)

        if(dineroencartera < 5000) return message.channel.send("No tienes suficiente dinero para comprar este objeto")

        if (!dinero.tiene(`${user.id}`))
        dinero.establecer(`${user.id}`, 0)
        if (!objeto3.tiene(`${user.id}`))
        objeto3.establecer(`${user.id}`, 0)

        let precio = Math.floor(Math.random() * 0) + 5000
        let objetocomprado = Math.floor(Math.random() * 0) + 1

        dinero.restar(`${user.id}`, precio)
        objeto3.sumar(`${user.id}`, objetocomprado)

        return message.channel.send("Has comprado el objeto `coche de carreras`. Gracias por tu compra 😺!\nTe he metido el objeto que has comprado en tu mochila, para verlo usa el comando `nc/mochila`\nEn tu mochila verás todos los objetos que hayas comprado y no hayas usado.\nSi quieres comprar algo más dimelo 😺, yo estaré por aquí miau miau 😺.")
    }

    if(objeto === 'capa-de-invisibilidad') {
        const dineroencartera = await dinero.obtener(`${user.id}`)

        if(dineroencartera < 7500) return message.channel.send("No tienes suficiente dinero para comprar este objeto")

        if (!dinero.tiene(`${user.id}`))
        dinero.establecer(`${user.id}`, 0)
        if (!objeto4.tiene(`${user.id}`))
        objeto4.establecer(`${user.id}`, 0)

        let precio = Math.floor(Math.random() * 0) + 7500
        let objetocomprado = Math.floor(Math.random() * 0) + 1

        dinero.restar(`${user.id}`, precio)
        objeto4.sumar(`${user.id}`, objetocomprado)

        return message.channel.send("Has comprado el objeto `capa de invisibilidad`. Gracias por tu compra 😺!\nTe he metido el objeto que has comprado en tu mochila, para verlo usa el comando `nc/mochila`\nEn tu mochila verás todos los objetos que hayas comprado y no hayas usado.\nSi quieres comprar algo más dimelo 😺, yo estaré por aquí miau miau 😺.")
    }

    if(objeto === 'guardaespaldas') {
        const dineroencartera = await dinero.obtener(`${user.id}`)

        if(dineroencartera < 10000) return message.channel.send("No tienes suficiente dinero para comprar este objeto")

        if (!dinero.tiene(`${user.id}`))
        dinero.establecer(`${user.id}`, 0)
        if (!objeto5.tiene(`${user.id}`))
        objeto5.establecer(`${user.id}`, 0)

        let precio = Math.floor(Math.random() * 0) + 10000
        let objetocomprado = Math.floor(Math.random() * 0) + 1

        dinero.restar(`${user.id}`, precio)
        objeto5.sumar(`${user.id}`, objetocomprado)

        return message.channel.send("Has comprado el objeto `guardaespaldas`. Gracias por tu compra 😺!\nTe he metido el objeto que has comprado en tu mochila, para verlo usa el comando `nc/mochila`\nEn tu mochila verás todos los objetos que hayas comprado y no hayas usado.\nSi quieres comprar algo más dimelo 😺, yo estaré por aquí miau miau 😺.")
    }

    if(objeto === 'miembro-VIP') {
        
         if (!vip.tiene(`${user.id}`))
         vip.establecer(`${user.id}`, 0)
         const objetovip = await vip.obtener(`${user.id}`)

         if(objetovip === 0){
         const dineroencartera = await dinero.obtener(`${user.id}`)

         if(dineroencartera < 100000) return message.channel.send("No tienes suficiente dinero para comprar este objeto")

         if (!dinero.tiene(`${user.id}`))
         dinero.establecer(`${user.id}`, 0)
         

         let precio = Math.floor(Math.random() * 0) + 100000
         let objetocomprado = Math.floor(Math.random() * 0) + 1

         dinero.restar(`${user.id}`, precio)
         vip.sumar(`${user.id}`, objetocomprado)

         return message.channel.send("Has comprado el objeto `miembro VIP`. FELICIDADES! AHORA TIENES ACCESO A LOS COMANDOS VIP DE NETCAT! 🎉🎉🎉. Gracias por tu compra 😺!\nTe he metido el objeto que has comprado en tu mochila, para verlo usa el comando `nc/mochila`\nEn tu mochila verás todos los objetos que hayas comprado y no hayas usado.\nAh si! El objeto `miembro VIP` es un objeto super especial, sólo se puede comprar una sola vez, te lo digo por si tuvieras intenciones de comprarlo otra vez, que no te dejaré hacerlo, vale?. En fin...\nSi quieres comprar algo más dimelo 😺, yo estaré por aquí miau miau 😺.")

        }

        if(objetovip === 1){
            message.channel.send("Lo siento, pero ya eres miembro VIP, recuerdas lo que te dije cuando comprastes el objeto `miembro VIP` el otro día? Te dije que sólo puedes comprar uno. En fin...te gustaría comprar alguna otra cosa?")
        }
        
    }
                
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

