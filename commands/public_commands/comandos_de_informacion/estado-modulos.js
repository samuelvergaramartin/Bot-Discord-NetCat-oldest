const Discord = require('discord.js');
const db = require('megadb');
const systemstatus = new db.crearDB('systemstatus');
const estadosistemadb = require('../../../mega_databases/systemstatus.json');

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

//var estadocomando = estadocomandosdb.modulosinfo;




module.exports = {
    name: `${ncomando}`,
    run: async(netcat, message, args) => {
        
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
        
        var estadosistema = await systemstatus.obtener("mode");
            const { EmbedBuilder } = require('discord.js');
            const embed = new Discord.EmbedBuilder()
                .setTitle("__Listado de módulos de comandos de NetCat:__")
                .setDescription(`__**Módulo:**__ ${chistes} :arrow_right: **${modisundermaintenance} (Motivo: Sistema en mantenimiento)**\n__**Módulo:**__ ${configuracion} :arrow_right: **${modisundermaintenance} (Motivo: Sistema en mantenimiento)**\n__**Módulo:**__ ${conversacion} :arrow_right: **${modisundermaintenance} (Motivo: Sistema en mantenimiento)**\n__**Módulo:**__ ${diversion} :arrow_right: **${modisundermaintenance} (Motivo: Sistema en mantenimiento)**\n__**Módulo:**__ ${economia} :arrow_right: **${modisundermaintenance} (Motivo: Sistema en mantenimiento)**\n__**Módulo:**__ ${gifs} :arrow_right: **${modisundermaintenance} (Motivo: Sistema en mantenimiento)**\n__**Módulo:**__ ${informacion} :arrow_right: **${modisundermaintenance} (Motivo: Sistema en mantenimiento)**\n__**Módulo:**__ ${juegos} :arrow_right: **${modisundermaintenance} (Motivo: Sistema en mantenimiento)**\n__**Módulo:**__ ${moderacion} :arrow_right: **${modisundermaintenance} (Motivo: Sistema en mantenimiento)**\n__**Módulo:**__ ${musica} :arrow_right: **${modisundermaintenance} (Motivo: Sistema en mantenimiento)**\n__**Módulo:**__ ${nsfw} :arrow_right: **${modisundermaintenance} (Motivo: Sistema en mantenimiento)**\n__**Módulo:**__ ${reaccion} :arrow_right: **${modisundermaintenance} (Motivo: Sistema en mantenimiento)**\n__**Módulo:**__ ${links} :arrow_right: **${modisundermaintenance} (Motivo: Sistema en mantenimiento)**\n__**Módulo:**__ ${historia} :arrow_right: **${modisundermaintenance} (Motivo: Sistema en mantenimiento)**\n__**Módulo:**__ ${utiles} :arrow_right: **${modisundermaintenance} (Motivo: Sistema en mantenimiento)**\n__**Módulo:**__ ${vip} :arrow_right: **${modisundermaintenance} (Motivo: Sistema en mantenimiento)**`)
                .setColor('0xff00d9')
                .setTimestamp()
                .setFooter({text:`• Bot creado por ${nombrepropietario} | Pedido por ${message.author.tag}`,iconURL: message.author.displayAvatarURL({format: "png"})})

                const embed2 = new Discord.EmbedBuilder()
                .setTitle("__Listado de módulos de comandos de NetCat:__")
                .setDescription(`__**Módulo:**__ ${chistes} :arrow_right: **${estadomodulochistes}**\n__**Módulo:**__ ${configuracion} :arrow_right: **${estadomoduloconfiguracion}**\n__**Módulo:**__ ${conversacion} :arrow_right: **${estadomoduloconversacion}**\n__**Módulo:**__ ${diversion} :arrow_right: **${estadomodulodiversion}**\n__**Módulo:**__ ${economia} :arrow_right: **${estadomoduloeconomia}**\n__**Módulo:**__ ${gifs} :arrow_right: **${estadomodulogifs}**\n__**Módulo:**__ ${informacion} :arrow_right: **${estadomoduloinformacion}**\n__**Módulo:**__ ${juegos} :arrow_right: **${estadomodulojuegos}**\n__**Módulo:**__ ${moderacion} :arrow_right: **${estadomodulomoderacion}**\n__**Módulo:**__ ${musica} :arrow_right: **${estadomodulomusica}**\n__**Módulo:**__ ${nsfw} :arrow_right: **${estadomodulonsfw}**\n__**Módulo:**__ ${reaccion} :arrow_right: **${estadomoduloreaccion}**\n__**Módulo:**__ ${links} :arrow_right: **${estadomodulolinks}**\n__**Módulo:**__ ${historia} :arrow_right: **${estadomodulohistoria}**\n__**Módulo:**__ ${utiles} :arrow_right: **${estadomoduloutiles}**\n__**Módulo:**__ ${vip} :arrow_right: **${estadomodulovip}**`)
                .setColor('0xff00d9')
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
