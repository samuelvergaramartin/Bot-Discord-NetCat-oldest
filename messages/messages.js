const db = require('megadb');
const discord = require("discord.js"); // ?//si, esq me lo pedia abajo, en la línea 100
const afkdb = new db.crearDB('afk');
const prefix_db = new db.crearDB('setprefixdb');
const botprefix = require('../defaultprefix.json');
const systemstatus = new db.crearDB('systemstatus');
const { ownerid } = require('../sistema/sockets/socket.json');
var idpropietario = ownerid;

module.exports = {
    messages: async (netcat, message) => {

let prefix;


if(prefix_db.tiene(message.guild.id)) {
    prefix = await prefix_db.obtener(message.guild.id)
} else {
    prefix = 'nc/'
}

    const args = message.content.slice(prefix.length).trim().split(" ");
   const command = args.shift().toLowerCase();
   
   
    
    if(!message.content.startsWith(prefix)) return;
    if(!message.channel.permissionsFor(netcat.user).has('SendMessages')) return message.author.send("**:x: | ERROR:** No tengo permisos suficientes. Permisos que me faltan: `SendMessages`").catch(()=>{ return;});
    if(!message.channel.permissionsFor(netcat.user).has('EmbedLinks')) return message.channel.send("**:x: | ERROR:** No tengo permisos suficientes. Permisos que me faltan: `EmbedLinks`").catch(()=>{ return;});

    if(message.author.id == "519634005226815492") return;
    const variablesystemstatus = await systemstatus.obtener("mode").catch(()=>{ return message.channel.send(":x: **| ERROR: index.js: line 41 |**\nAnti-crash-system: **ON**\nPor favor, revise los errores detectados en index.js!")});
     if(!variablesystemstatus) {
        message.channel.send(":x: **| ERROR: System-status database not found!**\nCreating a new  System-status database...")
        systemstatus.set("mode", "online").catch(()=>{ return message.channel.send(":x: **| ERROR: index.js: line 43 |**\nAnti-crash-system: **ON**\nPor favor, revise los errores detectados en index.js!")});
     }
     
    const serversmodstatusdb = new db.crearDB('serversmodstatus');
    let iddelservidorejecutor = message.guild.id;
    const modstatus = require('../sistema/modulos/mod-status-list.json');
    var modisonline = modstatus.online;
    let laidservidorejecutor = await serversmodstatusdb.obtener(iddelservidorejecutor);
    const listallmodules = require('../sistema/modulos/modulos.json');
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
        let cmd = netcat.comandos.get(command)
        if(cmd) {
        return cmd.run(netcat, message, args, discord)
        }

    }

   /* if(message.author.id !== "995661776337240094") return message.channel.send("**⛔ | PERMISSION_DENIED :** No tienes permiso para los usar comandos de este bot.\nPersonal autorizado: Sam170703#6466");*/
    /*switch(command) {
        case "test":
            message.channel.send("Todo en orden")
            break;
   
    } */
    
    let cmd = netcat.comandos.get(command)//el error me lo da aqui!
    if(cmd) {
        return cmd.run(netcat, message, args, discord)//aqui
    }

  }
};