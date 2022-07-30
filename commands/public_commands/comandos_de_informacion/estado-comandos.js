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

var ncomando = listallcommands.estadocomandos;
var estadomoduloinformacion = estadomodulosdb.informacion;
var estadomoduloconfiguracion = estadomodulosdb.configuracion;
var estadomodulomoderacion = estadomodulosdb.moderacion;

module.exports = {
    name: `${ncomando}`,
    run: async(client, message, args) => {
        var estadosistema = await systemstatus.obtener("mode");
        var estadoping = await commandstatusdb.obtener("ping");
        var estadosetprefix = await commandstatusdb.obtener("setprefix");
        var estadocleanall = await commandstatusdb.obtener("cleanall");
        var estadohelp = await commandstatusdb.obtener("help");
        var estadoserverinfo = await commandstatusdb.obtener("serverinfo");
        var estadokick = await commandstatusdb.obtener("kick");
        const { MessageEmbed } = require('discord.js');
        const embed = new Discord.MessageEmbed()
        .setTitle("__**Lista de los estados de los comandos de DexterBot**__:")
        .setDescription(`__**Comando**__: ${listallcommands.ping} :arrow_right: **${estadoping}**
        __**Comando**__: ${listallcommands.setprefix} :arrow_right: **${estadosetprefix}**
        __**Comando**__: ${listallcommands.cleanall} :arrow_right: **${estadocleanall}**
        __**Comando**__: ${listallcommands.estadocomandos} :arrow_right: **🔵 INMUNE 🔵**
        __**Comando**__: ${listallcommands.estadomodulos} :arrow_right: **🔵 INMUNE 🔵**
        __**Comando**__: ${listallcommands.help} :arrow_right: **${estadohelp}**
        __**Comando**__: ${listallcommands.serverinfo} :arrow_right: **${estadoserverinfo}**
        __**Comando**__: ${listallcommands.kick} :arrow_right: **${estadokick}**`)
        .setColor('ff00d9')
        .setTimestamp()
        .setFooter({text:`• Bot creado por ${nombrepropietario} | Pedido por ${message.author.tag}`,iconURL: message.author.displayAvatarURL({format: "png"})})

        const embed2 = new Discord.MessageEmbed()
        .setTitle("__**Lista de los estados de los comandos de DexterBot**__:")
        .setDescription(`__**Comando**__: ${listallcommands.ping} :arrow_right: **${commandisenmantenimiento} (Motivo: Sistema en mantenimiento)**
        __**Comando**__: ${listallcommands.setprefix} :arrow_right: **${commandisenmantenimiento} (Motivo: Sistema en mantenimiento)**
        __**Comando**__: ${listallcommands.cleanall} :arrow_right: **${commandisenmantenimiento} (Motivo: Sistema en mantenimiento)**
        __**Comando**__: ${listallcommands.estadocomandos} :arrow_right: **🔵 INMUNE 🔵**
        __**Comando**__: ${listallcommands.estadomodulos} :arrow_right: **🔵 INMUNE 🔵**
        __**Comando**__: ${listallcommands.help} :arrow_right: **${commandisenmantenimiento} (Motivo: Sistema en mantenimiento)**
        __**Comando**__: ${listallcommands.serverinfo} :arrow_right: **${commandisenmantenimiento} (Motivo: Sistema en mantenimiento)**
        __**Comando**__: ${listallcommands.kick} :arrow_right: **${commandisenmantenimiento} (Motivo: Sistema en mantenimiento)**`)
        .setColor('ff00d9')
        .setTimestamp()
        .setFooter({text:`• Bot creado por ${nombrepropietario} | Pedido por ${message.author.tag}`,iconURL: message.author.displayAvatarURL({format: "png"})})

        if(estadosistema === "under-maintenance") {
                
            message.channel.send({embeds: [embed2]});
    
        }
        if(estadosistema === "online") {
           
            message.channel.send({embeds: [embed]});
        }
    }
}
console.log(`Comando: ${ncomando}: INMUNE`.bgMagenta);