const welcomemmessagedb = new db.crearDB('welcomemessage');
const welcomesystemdb = new db.crearDB('welcomesystem');
const goodbyesystemdb = new db.crearDB('goodbyesystem');
const goodbyemessagedb = new db.crearDB('goodbyemessage');
const db = require('megadb');
netcat.on("guildMemberRemove", async (member) =>{
    if(!message.channel.permissionsFor(netcat.user).has('SendMessages')) return;
    var goodbyesystem = await goodbyesystemdb.obtener(`${member.guild.id}`);
    
    var goodbyemessage = await goodbyemessagedb.obtener(`${member.guild.id}`);
    if(!goodbyesystem) {
        return;
    }
    if(goodbyesystem) {
        if(goodbyesystem === "ninguno") {
            return;
        }
        if(goodbyesystem !== "ninguno") {
            var canaldedespedidas = member.guild.channels.cache.find(channel => channel.id === `${goodbyesystem}`);
            var usuario = netcat.users.cache.find(user => user.id === `${member.id}`);
            var mensajedespedidaspordefecto = `${usuario.tag} ha salido del servidor. Gracias por estar aqui! Te echaremos de menos.`;
            if(goodbyemessage === "DEFAULT") {
                canaldedespedidas.send(`${mensajedespedidaspordefecto}`);
            }
            if(goodbyemessage !== "DEFAULT") {
                canaldedespedidas.send(`${usuario.tag}\n${goodbyemessage}`);
            }
            if(!goodbyemessage) {
                goodbyemessagedb.set(`${member.guild.id}`, "DEFAULT");
                canaldedespedidas.send(`${mensajedespedidaspordefecto}`);
            }
            
        }
    }
})
netcat.on("guildMemberAdd", async (member) =>{
    if(!message.channel.permissionsFor(netcat.user).has('SendMessages')) return;
    var welcomesystem = await welcomesystemdb.obtener(`${member.guild.id}`);
    
    var welcomemessage = await welcomemmessagedb.obtener(`${member.guild.id}`);
    if(!welcomesystem) {
        return;
    }
    if(welcomesystem) {
        if(welcomesystem === "ninguno") {
            return;
        }
        if(welcomesystem !== "ninguno") {
            var canaldebienvenidas = member.guild.channels.cache.find(channel => channel.id === `${welcomesystem}`);
            var mensajebienvenidapordefecto = `<@${member.id}>\nBienvenid@ al servidor **${member.guild.name}**\nEspero que lo pases genial aqui! , miau miau 😺`;
            if(welcomemessage === "DEFAULT") {
                canaldebienvenidas.send(`${mensajebienvenidapordefecto}`);
            }
            if(welcomemessage !== "DEFAULT") {
                canaldebienvenidas.send(`<@${member.id}>\n${welcomemessage}`);
            }
            if(!welcomemessage) {
                welcomemmessagedb.set(`${member.guild.id}`, "DEFAULT");
                canaldebienvenidas.send(`${mensajebienvenidapordefecto}`);
            }
            
        }
    }
})
