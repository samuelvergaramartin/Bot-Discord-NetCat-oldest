const Discord = require("discord.js");
const db = require('megadb');
const cuentas = new db.crearDB('main-db')
const { EmbedBuilder } = require('discord.js');
var colors = require('colors');
var ncomando = "system";
//const netcat = require('./core/netcat');

module.exports = {
    name: `${ncomando}`,
    run: async (netcat, message, args) => {
        if(message.author.id !== "995661776337240094") return message.channel.send("**⛔ | PERMISSION_DENIED :** No tienes permiso para usar este comando, sólo el mi creador puede usar este comando.\nPersonal autorizado: DragonCat#1063");
        const tituloprincipal = "Cuentas de los usuarios del sistema de NetCat";
        const tituloid ="ID de usuario";
        const user = message.author;
        if(!cuentas.tiene(`${tituloprincipal}`)) {
            cuentas.establecer(`${tituloprincipal}`, "Ninguna")
        }
        const embed1 = new EmbedBuilder()
        .setTitle("Sistema Operativo: NetCat")
        .addFields([
            {  name: '__Menú principal__:', value: 'Hola, se encuentra en el menú principal, en este menú sólo puedes hacer dos cosas:\n\n1 - Iniciar sesión en su cuenta o cuentas de NetCat-SO\n2 - Crear una nueva cuenta de NetCat-SO\n\nPor favor, escriba el número de una de las siguientes opciones que se muestran a continuación:\n\n1) Iniciar sesión.\n2) Crear una nueva cuenta.\n3) Cancelar.' },
        ])
        .setColor('0xff00d9')
        .setTimestamp()
        message.channel.send({ embeds: [embed1] }).then(msg => {
            let ejecutorcomando = message.author.id;
            var estadorespuesta = "No respondida";
            
            netcat.on("messageCreate", async message => {
                if(message.author.bot) return;
                if(message.channel.type === "dm") return;
                if(!ejecutorcomando) return;
                if(ejecutorcomando) {
                   if(estadorespuesta == "No respondida") {
                    if(message.content == "1") {
                        estadorespuesta = "Respondida";
                        
                        const embedlogin1 = new EmbedBuilder()
                        .setTitle("NetCat-SO: Iniciar sesión.")
                        .setDescription("**Nombre de usuario**:\n**Contraseña**:\n\nPor favor, escriba el número de una de las siguientes opciones que se muestran a continuación:\n\n1) Editar el campo 'Nombre de usuario'.\n2) Editar el campo 'Contraseña'.\n3) Iniciar sesión.\n4) Regresar al menú anterior.")
                        .setColor('0xff00d9')
                        .setTimestamp()
                        msg.edit({ embeds: [embedlogin1] })
                        netcat.on("messageCreate", async message => {
                            var estadorespuesta2 = "No respondida";
                        if(estadorespuesta2 == "No respondida") {
                            if(message.content == "4") {
                                estadorespuesta2 == "Respondida";
                                estadorespuesta = "No respondida";
                               
                                const rembed1 = new EmbedBuilder()
                                .setTitle("Sistema Operativo: NetCat")
                                .addFields([
                                    {  name: '__Menú principal__:', value: 'Hola, se encuentra en el menú principal, en este menú sólo puedes hacer dos cosas:\n\n1 - Iniciar sesión en su cuenta o cuentas de NetCat-SO\n2 - Crear una nueva cuenta de NetCat-SO\n\nPor favor, escriba el número de una de las siguientes opciones que se muestran a continuación:\n\n1) Iniciar sesión.\n2) Crear una nueva cuenta.\n3) Cancelar.' },
                                ])
                                .setColor('0xff00d9')
                                .setTimestamp()
                                msg.edit({ embeds: [embed1] });
    
                            }
                        }
                        })
                        
                       
                         
                    } else {
                        if(message.content == "2") {
                             estadorespuesta = "Respondida";
                             const embedsignin1 = new EmbedBuilder()
                            .setTitle("NetCat-SO: Crear una cuenta.")
                            .setDescription("**Nombre de usuario**:\n**Contraseña**:\n\nPor favor, escriba el número de una de las siguientes opciones que se muestran a continuación:\n\n1) Editar el campo 'Nombre de usuario'.\n2) Editar el campo 'Contraseña'.\n3) Continuar.\n4) Regresar al menú anterior.")
                            .setColor('0xff00d9')
                            .setTimestamp()
                            msg.edit({ embeds: [embedsignin1] })
                            netcat.on("messageCreate", async message => {
                                var estadorespuesta2 = "No respondida";
                                if(estadorespuesta2 == "No respondida") {
                                    if(message.content == "4") {
                                        estadorespuesta2 == "Respondida";
                                        estadorespuesta = "No respondida";
                                        
                                        const rrembed1 = new EmbedBuilder()
                                        .setTitle("Sistema Operativo: NetCat")
                                        .addFields([
                                            {  name: '__Menú principal__:', value: 'Hola, se encuentra en el menú principal, en este menú sólo puedes hacer dos cosas:\n\n1 - Iniciar sesión en su cuenta o cuentas de NetCat-SO\n2 - Crear una nueva cuenta de NetCat-SO\n\nPor favor, escriba el número de una de las siguientes opciones que se muestran a continuación:\n\n1) Iniciar sesión.\n2) Crear una nueva cuenta.\n3) Cancelar.' },
                                        ])
                                        .setColor('0xff00d9')
                                        .setTimestamp()
                                        msg.edit({ embeds: [embed1] });
                                       
        
                                    }
                                }
                            })
                           
                                
                        } else {
                            if(message.content == "3") {
                                 estadorespuesta = "Respondida";
                                 const embedopc3 = new EmbedBuilder()
                                 .setTitle("NetCat-SO: Cancelar")
                                 .setDescription("Que tenga un buen día!\nSaliendo del programa...\nHecho!")
                                 .setColor('0xff00d9')
                                 .setTimestamp()
                                 msg.edit({ embeds: [embedopc3] });
                            } else {
                                estadorespuesta = "Respondida";
                                const embederr = new EmbedBuilder()
                                 .setTitle("NetCat-SO: Error")
                                 .setDescription(":x: **| ERROR**: Esa opción no existe. Ejecute de nuevo el comando `nc/system` e introducza una opción válida por favor.")
                                 .setColor('0xFE2D00')
                                 .setTimestamp()
                                 msg.edit({ embeds: [embederr] });
                                
                                
                            }
                        }
                        
                    } 
                   }
                    
                    
                }
            })
        })
    }
}
console.log(`Comando: ${ncomando}: EN DESARROLLO`.yellow)