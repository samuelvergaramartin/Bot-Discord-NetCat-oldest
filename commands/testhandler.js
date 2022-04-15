//try {
var colors = require('colors');
var ncomando = "testhandler";
module.exports = {
    name: `${ncomando}`,
    run: async (client, message, args) => {
        message.channel.send(`${client.user.id}`)
        if(client.user.id == "962316970131353641") {
            message.channel.send("OK")
        } else {
            message.channel.send("ERROR");
        }
        
       // 
        
        //client.destroy();
      /*  let yo = message.author;
        let dueño = message.guild.ownerId;
        let eldueño = `<@${dueño}>`;
        let punto = ".";
        let palabramaestra = "message";
        let aeldueño = `${palabramaestra}${punto}${eldueño}`;
        let paeldueño = `${aeldueño}`;
        //aeldueño.send("Por favor! por mi vida! por mi corazón! dime que funciona!");
        message.channel.send(`${eldueño}`)
       /* if(yo === paeldueño) {
            console.log("CORRECTO");
        } else {
            console.log("INCORRECTO");
            console.log(`${yo}`);
            console.log(`${paeldueño}`);
            console.log(`${author}`);
        }*/
        //message.channel.send("Sin errores.");
        message.channel.send("Todo en orden.")
        //const dueño = message.guild.fetchOwner();
        //console.log(`${message.author}`);
       /* let mirol = message.guild.roles.cache.find(rol => rol.name == "prueba");
        let nombre = args.join(" ")
        let canalseleccionado = message.guild.channels.cache.find(canal => canal.name == `${nombre}`);
        let mirole = mirol.id;
        
        if(canalseleccionado) {
            //canalseleccionado.permissionOverwrites.create(mirol, { VIEW_CHANNEL: true });
              canalseleccionado.permissionOverwrites.delete(mirol);
        }
        message.channel.send("OK")
        //let nombre = "control-remoto"
        if(nombre == "prueba") {
            throw new Error("Pls, no cortes el programa");
        }*/
            //message.guild.channels.create(nombre);
        
        //let sv = client.guilds.cache.get("900856291461824562")
       // let control = sv.channels.cache.get("948375961370513438")
        /*control.send(`Se ha activado el sistema de control remoto.\nConexión entrante: Servidor: ${message.guild.name}: Autorizado para controlar mediante control remoto el servidor ${sv.name}`)
        control.send("Esperando ordenes para ejecutar...")
        message.channel.send("Conexión establecida correctamente con el servidor remoto.")
        let nombre = "control-remoto"
        control.send("Orden recibida: ```js\nlet sv = client.guilds.cache.get('900856291461824562')\nlet control = sv.channels.cache.get('948375961370513438')\nlet nombre = 'control-remoto'\nlet canalcreado = sv.channels.cache.find(canal => canal.name == `${nombre}`);\nif(canalcreado){\n    message.channel.send(`Nombre del canal creado: ${canalcreado.name}.\n ID del canal creado: ${canalcreado.id}.\n Mención del canal creado: <#${canalcreado.id}> `)\n    control.send(`@everyone , el canal creado es: <#${canalcreado.id}>`)\n     canalcreado.send(`Hola! Probando...probando...`)\n}\nmessage.channel.send(`Orden ejecutada correctamente`)\ncontrol.send(`Orden ejecutada correctamente`)```\nEjecutando...")
        let canalcreado = sv.channels.cache.find(canal => canal.name == `${nombre}`);
        if(canalcreado){
            message.channel.send(`Nombre del canal creado: ${canalcreado.name}\nID del canal creado: ${canalcreado.id}\nMención del canal creado: <#${canalcreado.id}>`)
            control.send(`@everyone , el canal creado es: <#${canalcreado.id}>`)
            canalcreado.send(`Hola! Probando...probando...`)
        }
        //sv.channels.create(nombre);
        message.channel.send(`Orden ejecutada correctamente`)
        //message.channel.send(`${control.name} y ${control.id}`)
        control.send("Orden ejecutada correctamente.")*/
        
    }
}
console.log(`Comando: ${ncomando}: OK`.green)
/*
} catch (error) {
    console.error("Un segundo!");
   // console.log(error);
} finally {
    console.log("Hola, esta parte del programa nunca fallará"); 
}*/
