require("dotenv").config();
const discord = require("discord.js");
const fs = require('fs');
const botprefix = require('./defaultprefix.json');
const db = require('megadb');
const systemstatus = new db.crearDB('systemstatus');
const prefixdb = new db.crearDB('setprefixdb');
const commandstatusdb = new db.crearDB('commandstatusdb');
const modulestatusdb = new db.crearDB('modulestatusdb');
const socket = require('./sistema/sockets/socket.json');
var nombrepropietario = socket.ownername;
var idpropietario = socket.ownerid;
const client = new discord.Client({
    intents: 98303
    //intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS"]
});

var prefix = botprefix.prefix;

client.comandos = new discord.Collection();

let archivos = fs.readdirSync('./comandos').filter((f) => f.endsWith('.js'))

for(var archi of archivos) {
let comando = require("./comandos/" + archi)
 client.comandos.set(comando.name, comando)
}

let archivos2 = fs.readdirSync('./comandos/privados').filter((f) => f.endsWith('.js'))

for(var archi2 of archivos2) {
let comando = require("./comandos/privados/" + archi2)
 client.comandos.set(comando.name, comando)
}

let archivos3 = fs.readdirSync('./comandos/publicos').filter((f) => f.endsWith('.js'))

for(var archi3 of archivos3) {
let comando = require("./comandos/publicos/" + archi3)
 client.comandos.set(comando.name, comando)
}

let archivos4 = fs.readdirSync('./comandos/publicos/informacion').filter((f) => f.endsWith('.js'))

for(var archi4 of archivos4) {
let comando = require("./comandos/publicos/informacion/" + archi4)
 client.comandos.set(comando.name, comando)
}

let archivos5 = fs.readdirSync('./comandos/publicos/moderacion').filter((f) => f.endsWith('.js'))

for(var archi5 of archivos5) {
let comando = require("./comandos/publicos/moderacion/" + archi5)
 client.comandos.set(comando.name, comando)
}

let archivos6 = fs.readdirSync('./comandos/publicos/configuracion').filter((f) => f.endsWith('.js'))

for(var archi6 of archivos6) {
let comando = require("./comandos/publicos/configuracion/" + archi6)
 client.comandos.set(comando.name, comando)
}

let archivos7 = fs.readdirSync('./comandos/publicos/musica').filter((f) => f.endsWith('.js'))

for(var archi7 of archivos7) {
let comando = require("./comandos/publicos/musica/" + archi7)
 client.comandos.set(comando.name, comando)
}


client.on("ready", (bot) => {
    client.user.setPresence({activities: [{name: 'lobito/help | v1.0 | Lanzamiento oficial | Listo para la acción', type: "PLAYING"}], status: "online"});
    console.log(`Bot encendido.\nNombre del bot: ${bot.user.username}\nStatus: ${bot.presence.status}`);
})
//
//Bot en mantenimiento | Disculpen las molestias
client.on("guildMemberAdd", (member) => {
    const canalbienvenida = member.guild.channels.cache.find(channel => channel.id === "784128607714934855");
        canalbienvenida.send("Tenemos un nuevo lobito!");
         canalbienvenida.send(`Hola ${member.user} bienvenid@ a la familia Dexterpe Community !`);
         canalbienvenida.send("https://tenor.com/view/bozqurd-%D1%81%D0%B5%D1%80%D1%8B%D0%B9%D0%B2%D0%BE%D0%BB%D0%BA-the-gray-wolf-yalquzaq-gri-kurt-gif-13610898")
    
})

client.on("guildMemberRemove", (member) => {
    const canaldespedida = member.guild.channels.cache.find(channel => channel.id === "790544766898929714");
        
         canaldespedida.send(`${member.user} se fue del servidor, buen viaje! Vuelve pronto! 👋\nhttps://tenor.com/view/airbus-plane-airplane-aviation-take-off-gif-14487641`);
         
    
})

client.on("messageCreate", async message => {
    
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let prefix;


    if(prefixdb.tiene(message.guild.id)) {
    prefix = await prefixdb.obtener(message.guild.id)
    } else {
    prefix = `${botprefix.prefix}`;
    }

    const args = message.content.slice(prefix.length).trim().split(" ");
    const command = args.shift().toLowerCase();
    
    
     
     if(!message.content.startsWith(prefix)) return;
     if(!message.channel.permissionsFor(client.user).has('SEND_MESSAGES')) return message.author.send("Error, no tengo permisos suficientes.").catch(()=>{ return;});
     const variablesystemstatus = await systemstatus.obtener("mode").catch(()=>{ return message.channel.send(":x: **| ERROR: index.js: line 41 |**\nAnti-crash-system: **ON**\nPor favor, revise los errores detectados en index.js!")});
     if(!variablesystemstatus) {
        message.channel.send(":x: **| ERROR: System-status database not found!**\nCreating a new  System-status database...")
        systemstatus.set("mode", "online").catch(()=>{ return message.channel.send(":x: **| ERROR: index.js: line 43 |**\nAnti-crash-system: **ON**\nPor favor, revise los errores detectados en index.js!")});
     }
     /*if(variablesystemstatus == "under-maintenance") {
     if(message.author.id !== idpropietario) return message.channel.send("**:warning: | SYSTEM_UNDER_MAINTENANCE: ** Sistema en mantenimiento, bot en mantenimiento, disculpe las molestias.");
     }*/
     /*switch(command) {
        case "test":
           // message.channel.send("Wow wow lobito wow wow")
           // message.channel.send("https://tenor.com/view/bozqurd-%D1%81%D0%B5%D1%80%D1%8B%D0%B9%D0%B2%D0%BE%D0%BB%D0%BA-the-gray-wolf-yalquzaq-gri-kurt-gif-13610898")
          
           message.channel.send("todo ok")
            break;
   
    } */
    let cmd = client.comandos.get(command)
    if(cmd) {
        return cmd.run(client, message, args)
    }
})
client.login(process.env.TOKEN);

