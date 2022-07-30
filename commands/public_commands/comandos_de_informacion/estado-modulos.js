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

var ncomando = listallcommands.estadomodulos;
var estadomoduloinformacion = estadomodulosdb.informacion;
var estadomoduloconfiguracion = estadomodulosdb.configuracion;
var estadomodulomoderacion = estadomodulosdb.moderacion;
//var estadocomando = estadocomandosdb.modulosinfo;




module.exports = {
    name: `${ncomando}`,
    run: async(client, message, args) => {
        var estadosistema = await systemstatus.obtener("mode");
            const { MessageEmbed } = require('discord.js');
            const embed = new Discord.MessageEmbed()
                .setTitle("__Listado de módulos de comandos de DexterBot:__")
                .setDescription(`__**Módulo:**__ ${informacion} :arrow_right: **${modisundermaintenance} (Motivo: Sistema en mantenimiento)**\n__**Módulo:**__ ${moderacion} :arrow_right: **${modisundermaintenance} (Motivo: Sistema en mantenimiento)**\n__**Módulo:**__ ${configuracion} :arrow_right: **${modisundermaintenance} (Motivo: Sistema en mantenimiento)**`)
                .setColor('ff00d9')
                .setTimestamp()
                .setFooter({text:`• Bot creado por ${nombrepropietario} | Pedido por ${message.author.tag}`,iconURL: message.author.displayAvatarURL({format: "png"})})

                const embed2 = new Discord.MessageEmbed()
                .setTitle("__Listado de módulos de comandos de DexterBot:__")
                .setDescription(`__**Módulo:**__ ${informacion} :arrow_right: **${estadomoduloinformacion}**\n__**Módulo:**__ ${moderacion} :arrow_right: **${estadomodulomoderacion}**\n__**Módulo:**__ ${configuracion} :arrow_right: **${estadomoduloconfiguracion}**`)
                .setColor('ff00d9')
                .setTimestamp()
                .setFooter({text:`• Bot creado por ${nombrepropietario} | Pedido por ${message.author.tag}`,iconURL: message.author.displayAvatarURL({format: "png"})})
        
            if(estadosistema === "under-maintenance") {
                
                message.channel.send({embeds: [embed]});
        
            }
            if(estadosistema === "online") {
               
                message.channel.send({embeds: [embed2]});
            }
                   
      
    }
}
console.log(`Comando: ${ncomando}: INMUNE`.bgMagenta);
