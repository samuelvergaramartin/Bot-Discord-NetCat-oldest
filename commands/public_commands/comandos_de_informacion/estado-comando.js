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

var ncomando = listallcommands.estadocomando;
var estadomoduloinformacion = estadomodulosdb.informacion;
var estadomoduloconfiguracion = estadomodulosdb.configuracion;
var estadomodulomoderacion = estadomodulosdb.moderacion;

module.exports = {
    name: `${ncomando}`,
    run: async(netcat, message, args) => {
        var estadosistema = await systemstatus.obtener("mode");
        var nombredelcomando = args[0];
        if(!nombredelcomando) {
            message.channel.send("**:x: | ERROR:** Debes introducir el nombre del comando cuyo estado desea saber.\nSintaxis: `nc/estado-comando` <nombre del comando>\nPor ejemplo: `nc/estado-comando` ban");

        }
        else {
       
            var varnombredelcomando = listallcommands[nombredelcomando];
        if(!varnombredelcomando) {
                message.channel.send("**:x: | ERROR:** El nombre del comando introducido no existe. Por favor, revise si ha escrito bien el nombre del comando.");

        }
        else {
            
        

        if(estadosistema === "under-maintenance") {
             message.channel.send(`Estado del comando ${nombredelcomando}: ${commandisenmantenimiento} (Motivo: Sistema en mantenimiento)`); 
            
    
        }
        if(estadosistema === "online") {
           var estadodelcomando = await commandstatusdb.obtener(nombredelcomando);
           message.channel.send(`Estado del comando ${nombredelcomando}: ${estadodelcomando}`);
            
        }
    }
    }
    }
}
console.log(`Comando: ${ncomando}: INMUNE`.bgMagenta);