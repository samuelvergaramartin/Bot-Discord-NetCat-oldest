require("dotenv").config();
const discord = require("discord.js");
const { Client, GatewayIntentBits, ActivityType } = require("discord.js");
const botprefix = require('./defaultprefix.json');
const fs = require('fs');
const db = require('megadb');
const afkdb = new db.crearDB('afk');
const prefix_db = new db.crearDB('setprefixdb');
const socket = require('./sistema/sockets/socket.json');
const systemstatus = new db.crearDB('systemstatus');
const commandHandler = require('./handlers/slashcommands');

var idpropietario = socket.ownerid;
const ticketcounter = new db.crearDB('ticketcounter');
const anticrashticketsdb = new db.crearDB('anticrashtickets');
const registroticketscliente = new db.crearDB('registroticketscliente');

const welcomemmessagedb = new db.crearDB('welcomemessage');
const welcomesystemdb = new db.crearDB('welcomesystem');
const goodbyesystemdb = new db.crearDB('goodbyesystem');
const goodbyemessagedb = new db.crearDB('goodbyemessage');
const { ActionRowBuilder, SelectMenuBuilder, ButtonBuilder, ChannelType, PermissionsBitField } = require('discord.js');
var prefix = botprefix.prefix;
/*const client = new Client({
        intents: 
            [GatewayIntentBits.Guilds, 
            GatewayIntentBits.GuildMessages, 
            GatewayIntentBits.MessageContent,
            GatewayIntentBits.GuildMembers]
        //intents: 3276799
});*/ // Pa que tenes esto si ya lo estas haicneo en otro lado

async function messagecommandsHandler() {
    const netcat = require('./core/netcat');
    netcat.comandos = new discord.Collection();

let archivos = fs.readdirSync('./commands').filter((f) => f.endsWith('.js'))

for(var archi of archivos) {
    let comando = require("./commands/" + archi)
    netcat.comandos.set(comando.name, comando)
}

let archivos2 = fs.readdirSync('./commands/public_commands/comandos_de_conversacion').filter((f) => f.endsWith('.js'))

for(var archi2 of archivos2) {
    let comando = require("./commands/public_commands/comandos_de_conversacion/" + archi2)
    netcat.comandos.set(comando.name, comando)
}

let archivos3 = fs.readdirSync('./commands/public_commands/comandos_utiles').filter((f) => f.endsWith('.js'))

for(var archi3 of archivos3) {
    let comando = require("./commands/public_commands/comandos_utiles/" + archi3)
    netcat.comandos.set(comando.name, comando)
}

let archivos4 = fs.readdirSync('./commands/public_commands/comandos_links_netcat').filter((f) => f.endsWith('.js'))

for(var archi4 of archivos4) {
    let comando = require("./commands/public_commands/comandos_links_netcat/" + archi4)
    netcat.comandos.set(comando.name, comando)
}

let archivos5 = fs.readdirSync('./commands/public_commands/comandos_de_reaccion').filter((f) => f.endsWith('.js'))

for(var archi5 of archivos5) {
    let comando = require("./commands/public_commands/comandos_de_reaccion/" + archi5)
    netcat.comandos.set(comando.name, comando)
}

let archivos6 = fs.readdirSync('./commands/public_commands/comandos_de_configuracion').filter((f) => f.endsWith('.js'))

for(var archi6 of archivos6) {
    let comando = require("./commands/public_commands/comandos_de_configuracion/" + archi6)
    netcat.comandos.set(comando.name, comando)
}

let archivos7 = fs.readdirSync('./commands/public_commands/comandos_de_diversion').filter((f) => f.endsWith('.js'))

for(var archi7 of archivos7) {
    let comando = require("./commands/public_commands/comandos_de_diversion/" + archi7)
    netcat.comandos.set(comando.name, comando)
}

let archivos8 = fs.readdirSync('./commands/public_commands/comandos_de_chistes').filter((f) => f.endsWith('.js'))

for(var archi8 of archivos8) {
    let comando = require("./commands/public_commands/comandos_de_chistes/" + archi8)
    netcat.comandos.set(comando.name, comando)
}

let archivos9 = fs.readdirSync('./commands/public_commands/comandos_de_gifs').filter((f) => f.endsWith('.js'))

for(var archi9 of archivos9) {
    let comando = require("./commands/public_commands/comandos_de_gifs/" + archi9)
    netcat.comandos.set(comando.name, comando)
}

let archivos10 = fs.readdirSync('./commands/public_commands/comandos_de_juegos').filter((f) => f.endsWith('.js'))

for(var archi10 of archivos10) {
    let comando = require("./commands/public_commands/comandos_de_juegos/" + archi10)
    netcat.comandos.set(comando.name, comando)
}

let archivos11 = fs.readdirSync('./commands/public_commands/comandos_de_economia').filter((f) => f.endsWith('.js'))

for(var archi11 of archivos11) {
    let comando = require("./commands/public_commands/comandos_de_economia/" + archi11)
    netcat.comandos.set(comando.name, comando)
}

let archivos12 = fs.readdirSync('./commands/public_commands/comandos_de_moderacion').filter((f) => f.endsWith('.js'))

for(var archi12 of archivos12) {
    let comando = require("./commands/public_commands/comandos_de_moderacion/" + archi12)
    netcat.comandos.set(comando.name, comando)
}

let archivos13 = fs.readdirSync('./commands/public_commands/comandos_de_nsfw').filter((f) => f.endsWith('.js'))

for(var archi13 of archivos13) {
    let comando = require("./commands/public_commands/comandos_de_nsfw/" + archi13)
    netcat.comandos.set(comando.name, comando)
}

let archivos14 = fs.readdirSync('./commands/public_commands/comandos_para_hacer_chuletas_de_examenes_de_historia').filter((f) => f.endsWith('.js'))

for(var archi14 of archivos14) {
    let comando = require("./commands/public_commands/comandos_para_hacer_chuletas_de_examenes_de_historia/" + archi14)
    netcat.comandos.set(comando.name, comando)
}

let archivos15 = fs.readdirSync('./commands/public_commands/comandos_vip').filter((f) => f.endsWith('.js'))

for(var archi15 of archivos15) {
    let comando = require("./commands/public_commands/comandos_vip/" + archi15)
    netcat.comandos.set(comando.name, comando)
}

let archivos16 = fs.readdirSync('./commands/only_dev_commands').filter((f) => f.endsWith('.js'))

for(var archi16 of archivos16) {
    let comando = require("./commands/only_dev_commands/" + archi16)
    netcat.comandos.set(comando.name, comando)
}

let archivos17 = fs.readdirSync('./commands/public_commands').filter((f) => f.endsWith('.js'))

for(var archi17 of archivos17) {
    let comando = require("./commands/public_commands/" + archi17)
    netcat.comandos.set(comando.name, comando)
}

let archivos18 = fs.readdirSync('./commands/public_commands/comandos_de_musica').filter((f) => f.endsWith('.js'))

for(var archi18 of archivos18) {
    let comando = require("./commands/public_commands/comandos_de_musica/" + archi18)
    netcat.comandos.set(comando.name, comando)
}

let archivos19 = fs.readdirSync('./commands/public_commands/comandos_de_informacion').filter((f) => f.endsWith('.js'))

for(var archi19 of archivos19) {
    let comando = require("./commands/public_commands/comandos_de_informacion/" + archi19)
    netcat.comandos.set(comando.name, comando)
}

/*netcat.once("ready", (bot) => {

    const { slash } = require('./handlers/slashcommands')

        bot.application.commands.set(slash)

   /* netcat.user.setActivity({ name: 'EN MANTENIMIENTO', type: ActivityType.Playing });
    netcat.user.setStatus('idle')

    console.log(`Bot: ${bot.user.username}\nStatus: ${bot.presence.status}`);*//*
    
})*/

/*netcat.on('interactionCreate', async interaction => {
    if(interaction.isModalSubmit()) {
        if(interaction.customId === "valoracion") {
            const nombre = interaction.fields.getTextInputValue("nombre");
            const valoracion = interaction.fields.getTextInputValue("valoracion");

            var servidoroficial = netcat.guilds.cache.get("900856291461824562");
            var canaldevaloraciones = servidoroficial.channels.cache.get("1014277782655737876");

           interaction.reply("Su reseña se ha enviado correctamente a mi servidor de soporte.");
            canaldevaloraciones.send(`<@${idpropietario}> ! Me han hecho una reseña! Aquí te dejo los datos de la reseña que me acaban de hacer 😺\nNombre: ${nombre}\nValoración: ${valoracion}`)
        }
    }
	if (!interaction.isCommand()) return;

    const slashcmds = netcat.slashcommands.get(interaction.commandName)

    if(!slashcmds) return;

    try {
        await slashcmds.run(netcat, interaction)
    } catch(e) {
        console.error(e);
    }
    
});*/


/*netcat.on("messageCreate", async message => {
    
    
    
    //if (!message.guild.channel.me.permissions.has("SendMessages")) return message.author.send("Error, no tengo permisos.").catch(()=>{ return;});
   /* if (!message.guild.members.me.permissions.has("Administrator")) {
        return message.channel.send("No tengo los permisos necesarios. Permisos que me faltan: `ADMINISTRADOR`. Lo sé , es exagerado, mi creador está trabajando en ajustar esto mejor, por ahora requiero permisos de administrador a modo de parche para no caerme.")
        }*//*


})*/

}
module.exports = messagecommandsHandler;