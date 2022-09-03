const netcat = require('../core/netcat');
const {CommandInteraction} = require('discord.js');
const db = require('megadb');
const ticketcounter = new db.crearDB('ticketcounter');
const anticrashticketsdb = new db.crearDB('anticrashtickets');
const registroticketscliente = new db.crearDB('registroticketscliente');
const discord = require("discord.js");
const { ActionRowBuilder, SelectMenuBuilder, ButtonBuilder, ChannelType, PermissionsBitField } = require('discord.js');
const socket = require('../sistema/sockets/socket.json');
var idpropietario = socket.ownerid;
const systemstatus = new db.crearDB('systemstatus');
const commandHandler = require('../handlers/slashcommands');
module.exports = {
    name: 'interactionCreate',
    once: false,
    /**
     * @param {netcat} netcat
     * @param {CommandInteraction} interaction
     */
    execute: async(netcat, interaction) => {
        if (!interaction.channel) return;

        const command = netcat.commands.get(interaction.commandName);
        
        if(interaction.customId === "valoracion") {
            const valoracion = interaction.fields.getTextInputValue("valoracion");

            var servidoroficial = netcat.guilds.cache.get("900856291461824562");
            var canaldevaloraciones = servidoroficial.channels.cache.get("1014277782655737876");

           interaction.reply("Su reseña se ha enviado correctamente a mi servidor de soporte.");
           return canaldevaloraciones.send(`!Me han hecho una reseña! Aquí te dejo los datos de la reseña que me acaban de hacer 😺\n\nNombre: ${interaction.user.username}#${interaction.user.discriminator}\nValoración: ${valoracion}`)
        }
        if(interaction.isButton()) {
            function anticrashtickets() {
                
                async function comprobaridcliente() {
                    function setvaridcliente() {
                        if(prefix === "pnc/") {
                            var cliente = "client";
                            var varidcliente = "test-client-ticket";
                            anticrashticketsdb.set(`${cliente}.${interaction.guild.id}`, `${varidcliente}`);
                        } 
                        if(prefix !== "pnc/") {
                            var cliente = "client";
                            var varidcliente = "client-ticket";
                            anticrashticketsdb.set(`${cliente}.${interaction.guild.id}`, `${varidcliente}`);
                        }
                    }
                      if(prefix === "pnc/") {
                        var cliente = "client"
                        var idcliente = await anticrashticketsdb.obtener("client");
                          var varidcliente = "test-client-ticket";
                          if(idcliente) {
                            var idcliente = await anticrashticketsdb.obtener(`${cliente}.${interaction.guild.id}`);
                            var idclienteserver = await anticrashticketsdb.obtener(`${cliente}.${interaction.guild.id}`);
                            
                            if(idclienteserver) {
                                if(idcliente !== varidcliente) {
                                    setvaridcliente();
                                  
                                  }
                                  else {
                                    return;
                                  }
                            }
                            if(!idclienteserver) {
                                setvaridcliente();
                            }
                            
                          }
                          if(!idcliente) {
                            setvaridcliente();
                          }
                          
                         
                        
                      }
                      else {
                        var cliente = "client"
                        var idcliente = await anticrashticketsdb.obtener("client");
                          var varidcliente = "client-ticket";
                          if(idcliente) {
                            var idcliente = await anticrashticketsdb.obtener(`${cliente}.${interaction.guild.id}`);
                            var idclienteserver = await anticrashticketsdb.obtener(`${cliente}.${interaction.guild.id}`);
                            
                            if(idclienteserver) {
                                if(idcliente !== varidcliente) {
                                    setvaridcliente();
                                  
                                  }
                                  else {
                                    return;
                                  }
                            }
                            if(!idclienteserver) {
                                setvaridcliente();
                            }
                            
                          }
                          if(!idcliente) {
                            setvaridcliente();
                          }
                          
                         
                        
                    }
                }
                /*async function comprobaridmiembro() {
                    var idmiembro = await anticrashticketsdb.obtener("member");
                    if(prefix === "nh/") {
                        
                        var varidmiembro = "member-ticket";
                        if(idmiembro !== varidmiembro) {
                            anticrashticketsdb.set("member", `${varidmiembro}`);
                        }
                        else {
                            return;
                        }
                      }
                      if(prefix === "pnh/") {
                          
                          var varidmiembro = "test-member-ticket";
                          if(idmiembro !== varidmiembro) {
                            anticrashticketsdb.set("member", `${varidmiembro}`);
                        }
                        else {
                            return;
                        }
                      }
                }*/
                comprobaridcliente();
                //comprobaridmiembro();
            }
            anticrashtickets();
            var cliente = "client";
            var idclient = await anticrashticketsdb.obtener(`${cliente}.${interaction.guild.id}`);
            if(interaction.customId === `${idclient}`) {
               async function sumarticketcliente() {
                var addcliente = "clientticket";
                var nticketcliente = await ticketcounter.obtener("clientticket");

                if(nticketcliente === 100) {
                    ticketcounter.set("clientticket", 1);
                }
                if(nticketcliente) {
                    ticketcounter.sumar("clientticket", 1);
                }
                if(!nticketcliente) {
                    ticketcounter.set("clientticket", 1);
                }
                
                
               }
                async function abrirticketcliente() {
                    var numeroticketcliente = await ticketcounter.obtener("clientticket");
                    registroticketscliente.set(`${numeroticketcliente}`, `${interaction.user.id}`);
                    const everyone = interaction.guild.roles.cache.find(role => role.name === "@everyone");
                    //const staffrole = interaction.guild.roles.cache.find(role => role.id === "995350723061628928");
                    const staffroledb = new db.crearDB('ticketsstaffrole');
                    var staffroleid = await staffroledb.obtener(`${interaction.guild.id}`);
                    var rolestaff = netcat.guilds.cache.get(`${staffroleid}`);
                    if(rolestaff) {
                        var staffrole = interaction.guild.roles.cache.find(role => role.id === `${staffroleid}`);
                        interaction.guild.channels.create({
                            name: `ticket-${numeroticketcliente}`,
                            type: ChannelType.GuildText,
                            permissionOverwrites: [
                                {
                                    id: interaction.guild.roles.everyone,
                                    deny: ['ViewChannel'],
                                    allow: ['SendMessages'],
                                },
                                {
                                    id: interaction.user.id,
                                    allow: ['ViewChannel'],
                                },
                                {
                                    id: staffrole.id,
                                    allow: ['ViewChannel'],
                                },
                                {
                                    id: netcat.user.id,
                                    allow: ['SendMessages', 'ViewChannel'],
                                },
                            ],
                        }).then(c => {
                            const mensaje = new discord.EmbedBuilder()
                            .setTitle("Bienvenid@ a su ticket")
                            .setDescription("Por favor, escriba su mensaje explicando detalladamente su problema o duda y espere a ser atendido por el equipo de soporte.")
                            .setColor('0x00EAFE')
                            
                            const row = new ActionRowBuilder()
                            .addComponents(
                                 new ButtonBuilder()
                                .setCustomId(`dentro-${idclient}`)
                                .setStyle("DANGER")
                                .setLabel("Cerrar ticket")
                                .setEmoji("👋")
                               )
            
                            const row2 = new ActionRowBuilder()
                            .addComponents(
                                new ButtonBuilder()
                                .setCustomId(`dentro-${idclient}-2`)
                                .setStyle("PRIMARY")
                                .setLabel("Reclamar ticket")
                                .setEmoji("📜")
                            )
                            c.send(`<@${interaction.user.id}> , este es su ticket.`);
                            c.send(`<@&${staffrole.id}> , tenemos un nuevo usuario que atender!`);
                            c.send({ embeds: [mensaje], components: [row,row2]});
                        })
                    }
                   if(!rolestaff) {
                    interaction.guild.channels.create({
                        name: `ticket-${numeroticketcliente}`,
                        type: ChannelType.GuildText,
                        permissionOverwrites: [
                            {
                                id: interaction.guild.roles.everyone.id,
                                deny: ['ViewChannel'],
                                allow: ['SendMessages'],
                            },
                            {
                                id: interaction.user.id,
                                allow: ['ViewChannel'],
                            },
                            {
                                id: netcat.user.id,
                                allow: ['SendMessages', 'ViewChannel'],
                            },
                        ],
                    }).then(c => {
                        const mensaje = new discord.EmbedBuilder()
                        .setTitle("Bienvenid@ a su ticket")
                        .setDescription("Por favor, escriba su mensaje explicando detalladamente su problema o duda y espere a ser atendido por el equipo de soporte.")
                        .setColor('0x00EAFE')
                        
                        const row = new ActionRowBuilder()
                        .addComponents(
                             new ButtonBuilder()
                            .setCustomId(`dentro-${idclient}`)
                            .setLabel("Cerrar ticket")
                            .setEmoji("👋")
                            .setStyle(4),
                           )
        
                        const row2 = new ActionRowBuilder()
                        .addComponents(
                            new ButtonBuilder()
                            .setCustomId(`dentro-${idclient}-2`)
                            .setLabel("Reclamar ticket")
                            .setEmoji("📜")
                            .setStyle(1),
                        )
                        c.send(`<@${interaction.user.id}> , este es su ticket.`);
                        c.send("Atención @everyone , tenemos un nuevo usuario que atender!");
                        c.send({ embeds: [mensaje], components: [row,row2]});
                    })
                   }
                    
                
                interaction.reply({ content: `<@${interaction.user.id}>, su ticket ha sido creado correctamente!`, ephemeral: true });
                }
                sumarticketcliente().then((c) =>{
                    abrirticketcliente();
                })
                
                
            }
           /* else {
                var lectura1 = await anticrashticketsdb.obtener("client");
                interaction.reply(`ERROR!\nLectura de la variable lectura1: ${lectura1}`);
            }*/
            if(interaction.customId === `dentro-${idclient}`) {
                interaction.channel.delete();
            }
            if(interaction.customId === `dentro-${idclient}-2`)  {
                var addcliente = "clientticket"
                var usuario = interaction.user.id;
                var numeroticketcliente = await ticketcounter.obtener("clientticket");
                var creador = await registroticketscliente.obtener(`${numeroticketcliente}`);
                if(interaction.user.id === creador) {
                    interaction.reply({ content: "**:x: | ERROR:** Sólo el staff puede reclamar los tickets. Y en caso de que sea usted parte del staff, no puede reclamar este ticket porque usted fue quien lo abrió.", ephemeral: true });
                }
                else {
                    interaction.channel.send(`Ticket reclamado por <@${interaction.user.id}> !`);
                }
            }
            //var idmember = await anticrashticketsdb.obtener("member");
          /*  if(interaction.customId === `${idmember}`) {
                async function sumarticketmiembro() {
                    var nticketmiembro = await ticketcounter.obtener("memberticket");
                    if(nticketmiembro === 100) {
                        ticketcounter.set("memberticket", 1);
                    }
                    else {
                        ticketcounter.sumar("memberticket", 1);
                    }
                }
                async function abrirticketmiembro() {
                    var numeroticketmiembro = await ticketcounter.obtener("memberticket");
                    registroticketsmiembro.set(`${numeroticketmiembro}`, `${interaction.user.id}`);
                    const everyone = interaction.guild.roles.cache.find(role => role.name === "@everyone");
                    const staffrole = interaction.guild.roles.cache.find(role => role.id === "995350723061628928");
                interaction.guild.channels.create(`ticket-${numeroticketmiembro}`, {
                    type: "GUILD_TEXT",
                    //parent: "1001546289642746017",
                    permissionOverwrites: [
                        {
                            id: interaction.user.id,
                            allow: ["ViewChannel"]
                        },
                        {
                            id: everyone.id,
                            allow: ["SendMessages"],
                            deny: ["ViewChannel"]
                        },
                        {
                            id: staffrole.id,
                            allow: ["ViewChannel"]
                        }
                    ]
                }).then(c => {
                    const mensaje = new discord.EmbedBuilder()
                    .setTitle("Bienvenid@ a su ticket")
                    .setDescription("Por favor, escriba su mensaje explicando detalladamente su propblema o duda y espere a ser atendido por el equipo de soporte.")
                    .setColor('0x00EAFE')
                    
                    const row3 = new ActionRowBuilder()
                    .addComponents(
                         new ButtonBuilder()
                        .setCustomId(`dentro-${idmember}`)
                        .setStyle("DANGER")
                        .setLabel("Cerrar ticket")
                        .setEmoji("👋")
                       )
    
                    const row4 = new ActionRowBuilder()
                    .addComponents(
                        new ButtonBuilder()
                        .setCustomId(`dentro-${idmember}-2`)
                        .setStyle("PRIMARY")
                        .setLabel("Reclamar ticket")
                        .setEmoji("📜")
                    )
                    c.send(`<@${interaction.user.id}> , este es su ticket.`);
                    c.send("<@&989349313173917767> , tenemos un nuevo miembro que atender!");
                    c.send({ embeds: [mensaje], components: [row3,row4]});
                })
                interaction.reply({ content: `<@${interaction.user.id}>, su ticket ha sido creado correctamente!`, ephemeral: true });
                }
                sumarticketmiembro();
                abrirticketmiembro();
               
            }*/
          /*  if(interaction.customId === `dentro-${idmember}`) {
                interaction.channel.delete();
            }
            if(interaction.customId === `dentro-${idmember}-2`)  {
                var usuario = interaction.user.id;
                var numeroticketmiembro = await ticketcounter.obtener("memberticket");
                var creador2 = await registroticketsmiembro.obtener(`${numeroticketmiembro}`);
                if(interaction.user.id === creador2) {
                    interaction.reply({ content: "**:x: | ERROR:** Sólo el staff puede reclamar los tickets. Y en caso de que sea usted parte del staff, no puede reclamar este ticket por usted fue quien lo abrió.", ephemeral: true });
                }
                else {
                    interaction.channel.send(`Ticket reclamado por <@${interaction.user.id}> !`);
                }
            }*/
        }

        if (!command) return;

        try {

            command.execute(netcat, interaction)
        } catch (err) {
            console.log(err);
            
            interaction.reply({
                content: 'There was an error while executing this command!', 
                ephemeral: true 
            }).catch(()=>null)
        };
    
    }
};