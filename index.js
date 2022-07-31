require("dotenv").config();
const discord = require("discord.js");
const botprefix = require('./defaultprefix.json');
const fs = require('fs');
const db = require('megadb')
const afkdb = new db.crearDB('afk')
const prefix_db = new db.crearDB('setprefixdb')
const { arch } = require('os');
const { create } = require('sourcebin')
const commandstatusdb = new db.crearDB('commandstatusdb');
const modulestatusdb = new db.crearDB('modulestatusdb');
const socket = require('./sistema/sockets/socket.json');
const systemstatus = new db.crearDB('systemstatus');
var nombrepropietario = socket.ownername;
var idpropietario = socket.ownerid;
//const mega = require('megadb')
//const quick = require('quick.db');
//var hostcontrol = panel.power;
//const disbut = require('discord-buttons');
//disbut(client);
//const serverinfo = require("./commands/comandos_utiles/serverinfo");
var prefix = botprefix.prefix;
const client = new discord.Client({
    intents: 98303
    //intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS"]
});

client.comandos = new discord.Collection();

let archivos = fs.readdirSync('./commands').filter((f) => f.endsWith('.js'))

for(var archi of archivos) {
    let comando = require("./commands/" + archi)
    client.comandos.set(comando.name, comando)
}

let archivos2 = fs.readdirSync('./commands/public_commands/comandos_de_conversacion').filter((f) => f.endsWith('.js'))

for(var archi2 of archivos2) {
    let comando = require("./commands/public_commands/comandos_de_conversacion/" + archi2)
    client.comandos.set(comando.name, comando)
}

let archivos3 = fs.readdirSync('./commands/public_commands/comandos_utiles').filter((f) => f.endsWith('.js'))

for(var archi3 of archivos3) {
    let comando = require("./commands/public_commands/comandos_utiles/" + archi3)
    client.comandos.set(comando.name, comando)
}

let archivos4 = fs.readdirSync('./commands/public_commands/comandos_links_netcat').filter((f) => f.endsWith('.js'))

for(var archi4 of archivos4) {
    let comando = require("./commands/public_commands/comandos_links_netcat/" + archi4)
    client.comandos.set(comando.name, comando)
}

let archivos5 = fs.readdirSync('./commands/public_commands/comandos_de_reaccion').filter((f) => f.endsWith('.js'))

for(var archi5 of archivos5) {
    let comando = require("./commands/public_commands/comandos_de_reaccion/" + archi5)
    client.comandos.set(comando.name, comando)
}

let archivos6 = fs.readdirSync('./commands/public_commands/comandos_de_configuracion').filter((f) => f.endsWith('.js'))

for(var archi6 of archivos6) {
    let comando = require("./commands/public_commands/comandos_de_configuracion/" + archi6)
    client.comandos.set(comando.name, comando)
}

let archivos7 = fs.readdirSync('./commands/public_commands/comandos_de_diversion').filter((f) => f.endsWith('.js'))

for(var archi7 of archivos7) {
    let comando = require("./commands/public_commands/comandos_de_diversion/" + archi7)
    client.comandos.set(comando.name, comando)
}

let archivos8 = fs.readdirSync('./commands/public_commands/comandos_de_chistes').filter((f) => f.endsWith('.js'))

for(var archi8 of archivos8) {
    let comando = require("./commands/public_commands/comandos_de_chistes/" + archi8)
    client.comandos.set(comando.name, comando)
}

let archivos9 = fs.readdirSync('./commands/public_commands/comandos_de_gifs').filter((f) => f.endsWith('.js'))

for(var archi9 of archivos9) {
    let comando = require("./commands/public_commands/comandos_de_gifs/" + archi9)
    client.comandos.set(comando.name, comando)
}

let archivos10 = fs.readdirSync('./commands/public_commands/comandos_de_juegos').filter((f) => f.endsWith('.js'))

for(var archi10 of archivos10) {
    let comando = require("./commands/public_commands/comandos_de_juegos/" + archi10)
    client.comandos.set(comando.name, comando)
}

let archivos11 = fs.readdirSync('./commands/public_commands/comandos_de_economia').filter((f) => f.endsWith('.js'))

for(var archi11 of archivos11) {
    let comando = require("./commands/public_commands/comandos_de_economia/" + archi11)
    client.comandos.set(comando.name, comando)
}

let archivos12 = fs.readdirSync('./commands/public_commands/comandos_de_moderacion').filter((f) => f.endsWith('.js'))

for(var archi12 of archivos12) {
    let comando = require("./commands/public_commands/comandos_de_moderacion/" + archi12)
    client.comandos.set(comando.name, comando)
}

let archivos13 = fs.readdirSync('./commands/public_commands/comandos_de_nsfw').filter((f) => f.endsWith('.js'))

for(var archi13 of archivos13) {
    let comando = require("./commands/public_commands/comandos_de_nsfw/" + archi13)
    client.comandos.set(comando.name, comando)
}

let archivos14 = fs.readdirSync('./commands/public_commands/comandos_para_hacer_chuletas_de_examenes_de_historia').filter((f) => f.endsWith('.js'))

for(var archi14 of archivos14) {
    let comando = require("./commands/public_commands/comandos_para_hacer_chuletas_de_examenes_de_historia/" + archi14)
    client.comandos.set(comando.name, comando)
}

let archivos15 = fs.readdirSync('./commands/public_commands/comandos_vip').filter((f) => f.endsWith('.js'))

for(var archi15 of archivos15) {
    let comando = require("./commands/public_commands/comandos_vip/" + archi15)
    client.comandos.set(comando.name, comando)
}

let archivos16 = fs.readdirSync('./commands/only_dev_commands').filter((f) => f.endsWith('.js'))

for(var archi16 of archivos16) {
    let comando = require("./commands/only_dev_commands/" + archi16)
    client.comandos.set(comando.name, comando)
}

let archivos17 = fs.readdirSync('./commands/public_commands').filter((f) => f.endsWith('.js'))

for(var archi17 of archivos17) {
    let comando = require("./commands/public_commands/" + archi17)
    client.comandos.set(comando.name, comando)
}

let archivos18 = fs.readdirSync('./commands/public_commands/comandos_de_musica').filter((f) => f.endsWith('.js'))

for(var archi18 of archivos18) {
    let comando = require("./commands/public_commands/comandos_de_musica/" + archi18)
    client.comandos.set(comando.name, comando)
}

let archivos19 = fs.readdirSync('./commands/public_commands/comandos_de_informacion').filter((f) => f.endsWith('.js'))

for(var archi19 of archivos19) {
    let comando = require("./commands/public_commands/comandos_de_informacion/" + archi19)
    client.comandos.set(comando.name, comando)
}

client.slashcommands = new discord.Collection();
const slashcommandsFiles = fs.readdirSync('./slashcommands').filter((f) => f.endsWith('.js'));

for(const file of slashcommandsFiles) {
    const slash = require("./slashcommands/" + file)
    client.slashcommands.set(slash.data.name, slash)
}

client.once("ready", (bot) => {

    client.user.setPresence({activities: [{name: 'nc/help | NetCat v4.3 | NetCat discord.js v13 | Estoy lista para la acción', type: "PLAYING"}], status: "online"});

    console.log(`Bot: ${bot.user.username}\nStatus: ${bot.presence.status}`);
    
    
})
//
client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

    const slashcmds = client.slashcommands.get(interaction.commandName)

    if(!slashcmds) return;

    try {
        await slashcmds.run(client, interaction)
    } catch(e) {
        console.error(e);
    }
	
});


client.on("messageCreate", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    
    
    //if (!message.guild.channel.me.permissions.has("SEND_MESSAGES")) return message.author.send("Error, no tengo permisos.").catch(()=>{ return;});
   /* if (!message.guild.me.permissions.has("ADMINISTRATOR")) {
        return message.channel.send("No tengo los permisos necesarios. Permisos que me faltan: `ADMINISTRADOR`. Lo sé , es exagerado, mi creador está trabajando en ajustar esto mejor, por ahora requiero permisos de administrador a modo de parche para no caerme.")
        }*/

///SECCIÓN DEL COMANDO AFK///PRINCIPIO

if(afkdb.has(`afk-${message.author.id}+${message.guild.id}`)){
    await afkdb.delete(`afk-${message.author.id}+${message.guild.id}`)
    message.channel.send(`Bienvenido ${message.author}, su estado afk ha sido removido`)
}

if(message.mentions.members.first()){

    if(afkdb.has(`afk-${message.mentions.members.first().id}+${message.guild.id}`)){
        message.channel.send(`${message.author}, ${message.mentions.users.first().username} está en modo AFK. Intente ponerse en contacto con él/ella en otro momento por favor.`)
    }
}

///FIN DE LA SECCIÓN DEL COMANDO AFK///

let prefix;


if(prefix_db.tiene(message.guild.id)) {
    prefix = await prefix_db.obtener(message.guild.id)
} else {
    prefix = 'nc/'
}

    const args = message.content.slice(prefix.length).trim().split(" ");
   const command = args.shift().toLowerCase();
   
   
    
    if(!message.content.startsWith(prefix)) return;
    if(!message.channel.permissionsFor(client.user).has('SEND_MESSAGES')) return message.author.send("Error, no tengo permisos suficientes.").catch(()=>{ return;});
    if(message.author.id == "519634005226815492") return;
    const variablesystemstatus = await systemstatus.obtener("mode").catch(()=>{ return message.channel.send(":x: **| ERROR: index.js: line 41 |**\nAnti-crash-system: **ON**\nPor favor, revise los errores detectados en index.js!")});
     if(!variablesystemstatus) {
        message.channel.send(":x: **| ERROR: System-status database not found!**\nCreating a new  System-status database...")
        systemstatus.set("mode", "online").catch(()=>{ return message.channel.send(":x: **| ERROR: index.js: line 43 |**\nAnti-crash-system: **ON**\nPor favor, revise los errores detectados en index.js!")});
     }

   /* if(message.author.id !== "995661776337240094") return message.channel.send("**⛔ | PERMISSION_DENIED :** No tienes permiso para los usar comandos de este bot.\nPersonal autorizado: Sam170703#6466");*/
    /*switch(command) {
        case "test":
            message.channel.send("Todo en orden")
            break;
   
    } */
    
    let cmd = client.comandos.get(command)
    if(cmd) {
        return cmd.run(client, message, args, discord)
    }
})



client.login(process.env.TOKEN);

