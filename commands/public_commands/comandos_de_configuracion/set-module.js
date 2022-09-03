const Discord = require('discord.js');
const db = require('megadb');
const color = require('colors');
const systemstatus = new db.crearDB('systemstatus');
const estadosistemadb = require('../../../mega_databases/systemstatus.json');
var estadosistema = estadosistemadb.mode;
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
const serversmodstatusdb = new db.crearDB('serversmodstatus');
const modstatus = require('../../../sistema/modulos/mod-status-list.json');
const modulestatusdb = new db.crearDB('modulestatusdb');
const socket = require('../../../sistema/sockets/socket.json');
var nombrepropietario = socket.ownername;
var idpropietario = socket.ownerid;

const listallcommands = require('../../../sistema/modulos/listado-comandos.json');
var ncomando = listallcommands.setmodule;

module.exports = {
    name: `${ncomando}`,
    run: async(netcat, message, args) => {
        var estadosistema = await systemstatus.obtener("mode");
        var serverid = message.guild.id;

        var estadomodulochistes = await modulestatusdb.obtener("chistes");
        var estadomoduloconfiguracion = await modulestatusdb.obtener("configuracion");
        var estadomoduloconversacion = await modulestatusdb.obtener("conversacion");
        var estadomodulodiversion = await modulestatusdb.obtener("diversion");
        var estadomoduloeconomia = await modulestatusdb.obtener("economia");
        var estadomodulogifs = await modulestatusdb.obtener("gifs");
        var estadomoduloinformacion = await modulestatusdb.obtener("informacion");
        var estadomodulojuegos = await modulestatusdb.obtener("juegos");
        var estadomodulomoderacion = await modulestatusdb.obtener("moderacion");
        var estadomodulomusica = await modulestatusdb.obtener("musica");
        var estadomodulonsfw = await modulestatusdb.obtener("nsfw");
        var estadomoduloreaccion = await modulestatusdb.obtener("reaccion");
        var estadomodulolinks = await modulestatusdb.obtener("links");
        var estadomodulohistoria = await modulestatusdb.obtener("historia");
        var estadomoduloutiles = await modulestatusdb.obtener("utiles");
        var estadomodulovip = await modulestatusdb.obtener("vip");

        var modisonline = modstatus.online;
        var modisoffline = modstatus.offline;

        var modisundermaintenance = modstatus.undermaintenance;
        var modisoutofservice = modstatus.outofservice;

        let argumentos = args.join(" ");

        let valoresnombresmodulos = ["chistes", "configuracion", "conversacion", "diversion", "economia", "gifs", "informacion", "juegos", "moderacion", "musica", "nsfw", "reaccion", "links", "historia", "utiles", "vip"];
        let valortrue = 'TRUE';
        let valoruno = '1';
        let valorfalse = 'FALSE';
        let valorcero = '0';

        const argumentonombremodulo = args[0]
        const argumentoestadomodulo = args[1]
        
        var perms = message.member.permissions.has("Administrator")
        
        if(!perms) return message.channel.send("**:x: | ERROR:** No tienes suficientes permisos.\nPermisos necesarios: **Administrator**");

        async function ejecutarcomandoisOK() {
            if(argumentoestadomodulo === valortrue || argumentoestadomodulo === valoruno) {
                serversmodstatusdb.set(`${serverid}.${argumentonombremodulo}`, `${modisonline}`);
                message.channel.send(`**Modulo de ${argumentonombremodulo}** : Activado correctamente.`);
            }
            if(argumentoestadomodulo === valorfalse || argumentoestadomodulo === valorcero) {
                serversmodstatusdb.set(`${serverid}.${argumentonombremodulo}`, `${modisoffline}`);
                message.channel.send(`**Modulo de ${argumentonombremodulo}** : Desactivado correctamente.`);
            }
        }

        if(estadosistema === "online") {
            if(!argumentos) {
                message.channel.send("**:x:| ERROR:** Faltan argumentos.\nDebes introducir el nombre del módulo a configurar y el estado que desea para encender o apagar mediante un valor booleano.\n__Sintaxis__: `nc/set-module` <nombre del modulo> <estado del modulo en booleano>\nPor ejemplo (con `TRUE` para encender): `nc/set-module economia TRUE`\nOtro ejemplo (con `FALSE` para apagar): `nc/set-module historia FALSE`\nOtro ejemplo (con `1` para encender): `nc/set-module utiles 1`\nOtro ejemplo (con `0` para apagar): `nc/set-module nsfw 0` .");
            }
            else  {
                let i = 0;
                for (let valores in valoresnombresmodulos) {
                    if(argumentonombremodulo === valoresnombresmodulos[valores]) {
                        if(!argumentoestadomodulo) {
                            message.channel.send("**:x:| ERROR:** Faltan argumentos. No has introducido el estado del módulo.\n__Sintaxis__: `nc/set-module` <nombre del modulo> <estado del modulo en booleano>\nPor ejemplo (con `TRUE` para encender): `nc/set-module economia TRUE`\nOtro ejemplo (con `FALSE` para apagar): `nc/set-module historia FALSE`\nOtro ejemplo (con `1` para encender): `nc/set-module utiles 1`\nOtro ejemplo (con `0` para apagar): `nc/set-module nsfw 0` .");
                            break;
                        }
                        if(argumentoestadomodulo === valortrue || argumentoestadomodulo === valoruno || argumentoestadomodulo === valorfalse || argumentoestadomodulo === valorcero) {
                            let estadoactualdelmodulomencionado = await modulestatusdb.obtener(`${argumentonombremodulo}`);
                            if(estadoactualdelmodulomencionado === modisundermaintenance) {
                                ejecutarcomandoisOK();
                                message.channel.send("**:warning: | MODULO INTRODUCIDO EN MANTENIMIENTO** Los cambios realizados tomarán efecto cuando finalicen las labores de mantenimiento del módulo introducido.\nDisculpe las molestias. ");
                                break;
                            }
                            if(estadoactualdelmodulomencionado === modisoffline) {
                                message.channel.send("**:x: | ERROR:** El módulo introducido se encuentra actualmente fuera de servicio. Disculpe las molestias.");
                                break;
                            }
                            if(estadoactualdelmodulomencionado === modisoutofservice) {
                                message.channel.send("**:x: | ERROR:** El módulo introducido se encuentra actualmente fuera de servicio. Disculpe las molestias.");
                                break;
                            }
                            if(estadoactualdelmodulomencionado === modisonline) {
                                ejecutarcomandoisOK();
                                break;
                            }
                            if(estadoactualdelmodulomencionado !== modisundermaintenance && estadoactualdelmodulomencionado !== modisoffline && estadoactualdelmodulomencionado !== modisoutofservice && estadoactualdelmodulomencionado !== modisonline) {
                                message.channel.send("**:x: | ERROR:** Error detectado! Anti-Crash-System: ACTIVATED!\nPor favor, reporte este error al staff del server o al desarrollador del bot.");
                                break;
                            }
                            
                        }
                        else {
                            message.channel.send("**:x:| ERROR:** Error en el segundo argumento. Valor del estado del módulo no valido.\nListado de valores válidos para el segundo argumento: `TRUE` , `FALSE` , `1` , `0` .\n__Sintaxis__: `nc/set-module` <nombre del modulo> <estado del modulo en booleano>\nPor ejemplo (con `TRUE` para encender): `nc/set-module economia TRUE`\nOtro ejemplo (con `FALSE` para apagar): `nc/set-module historia FALSE`\nOtro ejemplo (con `1` para encender): `nc/set-module utiles 1`\nOtro ejemplo (con `0` para apagar): `nc/set-module nsfw 0` .");
                            break;
                        }
                    }
                    else {
                        ++i;
            
                        if(i === 16) {
                            message.channel.send("**:x:| ERROR:** Error en el primer argumento.\nNo existe el nombre del módulo que has introducido. Por favor, introduzca un nombre de un módulo válido.\nPara ver el listado de módulos use el comando `nc/help` o `nc/estado-modulos` .\n__Sintaxis__: `nc/set-module` <nombre del modulo> <estado del modulo en booleano>\nPor ejemplo (con `TRUE` para encender): `nc/set-module economia TRUE`\nOtro ejemplo (con `FALSE` para apagar): `nc/set-module historia FALSE`\nOtro ejemplo (con `1` para encender): `nc/set-module utiles 1`\nOtro ejemplo (con `0` para apagar): `nc/set-module nsfw 0` .");
                        break;
                        }
                    }
                }
                
            }
        }    
        if(estadosistema === "under-maintenance") {
            if(!argumentos) {
                message.channel.send("**:x:| ERROR: **Debes introducir el nombre del módulo a configurar y el estado que desea para encender o apagar mediante un valor booleano.\n__Sintaxis__: `nc/set-module` <nombre del modulo> <estado del modulo en booleano>\nPor ejemplo (con `TRUE` para encender): `nc/set-module economia TRUE`\nOtro ejemplo (con `FALSE` para apagar): `nc/set-module historia FALSE`\nOtro ejemplo (con `1` para encender): `nc/set-module utiles 1`\nOtro ejemplo (con `0` para apagar): `nc/set-module nsfw 0` .");
            }
            else {
                let i = 0;
                for (let valores in valoresnombresmodulos) {
                    if(argumentonombremodulo === valoresnombresmodulos[valores]) {
                        if(!argumentoestadomodulo) {
                            message.channel.send("**:x:| ERROR:** Faltan argumentos. No has introducido el estado del módulo.\n__Sintaxis__: `nc/set-module` <nombre del modulo> <estado del modulo en booleano>\nPor ejemplo (con `TRUE` para encender): `nc/set-module economia TRUE`\nOtro ejemplo (con `FALSE` para apagar): `nc/set-module historia FALSE`\nOtro ejemplo (con `1` para encender): `nc/set-module utiles 1`\nOtro ejemplo (con `0` para apagar): `nc/set-module nsfw 0` .");
                            break;
                        }
                        if(argumentoestadomodulo === valortrue || argumentoestadomodulo === valoruno || argumentoestadomodulo === valorfalse || argumentoestadomodulo === valorcero) {
                            let estadoactualdelmodulomencionado = await modulestatusdb.obtener(`${argumentonombremodulo}`);
                            if(estadoactualdelmodulomencionado === modisundermaintenance) {
                                ejecutarcomandoisOK();
                                message.channel.send("**:warning: | MODULO INTRODUCIDO EN MANTENIMIENTO** Los cambios realizados tomarán efecto cuando finalicen las labores de mantenimiento del módulo introducido.\nDisculpe las molestias. ");
                                message.channel.send("**:warning: | SYSTEM_UNDER_MAINTENANCE: ** Sistema en mantenimiento! Bot en mantenimiento! Los cambios realizados tomarán efecto cuando finalicen las labores de mantenimiento.\nDisculpe las molestias.");
                                break;
                            }
                            if(estadoactualdelmodulomencionado === modisoffline) {
                                message.channel.send("**:x: | ERROR:** El módulo introducido se encuentra actualmente fuera de servicio. Disculpe las molestias.");
                                break;
                            }
                            if(estadoactualdelmodulomencionado === modisoutofservice) {
                                message.channel.send("**:x: | ERROR:** El módulo introducido se encuentra actualmente fuera de servicio. Disculpe las molestias.");
                                break;
                            }
                            if(estadoactualdelmodulomencionado === modisonline) {
                                ejecutarcomandoisOK();
                                message.channel.send("**:warning: | SYSTEM_UNDER_MAINTENANCE: ** Sistema en mantenimiento! Bot en mantenimiento! Los cambios realizados tomarán efecto cuando finalicen las labores de mantenimiento.\nDisculpe las molestias.");
                                break;
                            }
                            if(estadoactualdelmodulomencionado !== modisundermaintenance && estadoactualdelmodulomencionado !== modisoffline && estadoactualdelmodulomencionado !== modisoutofservice && estadoactualdelmodulomencionado !== modisonline) {
                                message.channel.send("**:x: | ERROR:** Error detectado! Anti-Crash-System: ACTIVATED!\nPor favor, reporte este error al staff del server o al desarrollador del bot.");
                                break;
                            }
                           
                            
                           
                            
                        }
                        else {
                            message.channel.send("**:x:| ERROR:** Error en el segundo argumento. Valor del estado del módulo no valido.\nListado de valores válidos para el segundo argumento: `TRUE` , `FALSE` , `1` , `0` .\n__Sintaxis__: `nc/set-module` <nombre del modulo> <estado del modulo en booleano>\nPor ejemplo (con `TRUE` para encender): `nc/set-module economia TRUE`\nOtro ejemplo (con `FALSE` para apagar): `nc/set-module historia FALSE`\nOtro ejemplo (con `1` para encender): `nc/set-module utiles 1`\nOtro ejemplo (con `0` para apagar): `nc/set-module nsfw 0` .");
                            break;
                        }
                    }
                    else {
                        ++i;
            
                        if(i === 16) {
                            message.channel.send("**:x:| ERROR:** Error en el primer argumento.\nNo existe el nombre del módulo que has introducido. Por favor, introduzca un nombre de un módulo válido.\nPara ver el listado de módulos use el comando `nc/help` o `nc/estado-modulos` .\n__Sintaxis__: `nc/set-module` <nombre del modulo> <estado del modulo en booleano>\nPor ejemplo (con `TRUE` para encender): `nc/set-module economia TRUE`\nOtro ejemplo (con `FALSE` para apagar): `nc/set-module historia FALSE`\nOtro ejemplo (con `1` para encender): `nc/set-module utiles 1`\nOtro ejemplo (con `0` para apagar): `nc/set-module nsfw 0` .");
                        break;
                        }
                    }
                }
               
                
            }
           
        }
        if(estadosistema !== "online" && estadosistema !== "under-maintenance") {
            message.channel.send("**:x: | ERROR:** Error detectado! Anti-Crash-System: ACTIVATED!\nPor favor, reporte este error al staff del server o al desarrollador del bot.");
        }
    
}
}
console.log(`Comando: ${ncomando}: INMUNE`.bgMagenta);