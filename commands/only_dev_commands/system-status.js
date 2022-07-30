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

var ncomando = listallcommands.systemstatus;
var estadomodulo = estadomodulosdb.informacion;
var estadocomando = estadocomandosdb.systemstatus;
var modulodeestecomando = informacion;


module.exports = {
    name: `${ncomando}`,
    run: async(client, message, args) => {
        var estado = await systemstatus.obtener("mode");
        function ejecutarcomandoisOK() {
            
            message.channel.send(`System Status Mode: ${estado}`);
    
    
}
        if(ncomando == privados.systemstatus) {
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
