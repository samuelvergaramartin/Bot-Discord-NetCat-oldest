const Discord = require('discord.js');
const db = require('megadb');
const systemstatus = new db.crearDB('systemstatus');
const estadosistemadb = require('../../../mega_databases/systemstatus.json');
var estadosistema = estadosistemadb.mode;
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
var vips = listallmodules.modulo16;
const modconfiguracion = require('../../../sistema/modulos/mod-configuracion.json');
const modinformacion = require('../../../sistema/modulos/mod-informacion.json');
const modmoderacion = require('../../../sistema/modulos/mod-moderacion.json');
const modmusica = require('../../../sistema/modulos/mod-musica.json');
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


var ncomando = listallcommands.help;
var estadomodulo = estadomodulosdb.informacion;
var estadocomando = estadocomandosdb.help;
var modulodeestecomando = informacion;
const serversmodstatusdb = new db.crearDB('serversmodstatus');
const { Client, EmbedBuilder, MessageMenuOption, MessageMenu} = require('discord.js');

//const { MessageMenuOption, MessageMenu } = require ("discord-buttons")
const vip = new db.crearDB('vip')
const { ActionRowBuilder, SelectMenuBuilder, ButtonBuilder } = require('discord.js');
module.exports = {
    name: `${ncomando}`,
    run: async(netcat, message, args) => {
        var estadosistema = await systemstatus.obtener("mode");
        var estadomodulochistes = estadomodulosdb.chistes;
        var estadomoduloconfiguracion = estadomodulosdb.configuracion;
        var estadomoduloconversacion = estadomodulosdb.conversacion;
        var estadomodulodiversion = estadomodulosdb.diversion;
        var estadomoduloeconomia = estadomodulosdb.economia;
        var estadomodulogifs = estadomodulosdb.gifs;
        var estadomoduloinformacion = estadomodulosdb.informacion;
        var estadomodulojuegos = estadomodulosdb.juegos;
        var estadomodulomoderacion = estadomodulosdb.moderacion;
        var estadomodulomusica = estadomodulosdb.musica;
        var estadomodulonsfw = estadomodulosdb.nsfw;
        var estadomoduloreaccion = estadomodulosdb.reaccion;
        var estadomodulolinks = estadomodulosdb.links;
        var estadomodulohistoria = estadomodulosdb.historia;
        var estadomoduloutiles = estadomodulosdb.utiles;
        var estadomodulovip = estadomodulosdb.vip;
        async function ejecutarcomandoisOK() {
            async function ejecutarcomando() {
                    //if(message.channel.permissionsFor(netcat.user).has("EmbedLinks")) return message.channel.send("**:x: | ERROR:** No tengo los permisos suficientes.\nPermiso que me falta: `EmbedLinks`");
	    //if(message.channel.permissionsFor(netcat.user).has("ATTACH_FILES")) return message.channel.send("**:x: | ERROR:** No tengo los permisos suficientes.\nPermiso que me falta: `ATTACH_FILES`");
        const user = message.author;

        if (!vip.tiene(`${user.id}`))
         vip.establecer(`${user.id}`, 0)
         const objetovip = await vip.obtener(`${user.id}`)

         if(objetovip === 0){
            const embed = new EmbedBuilder()

            .setTitle('📖Comandos de NetCat📖:')
            .addFields([
                {  name: 'Comandos de conversación:', value: 'nc/hola\nnc/bien-y-tu\nnc/denada\nnc/tengo-sueño\nnc/me-voy\nnc/buenas-noches\nnc/buenos-días\nnc/cómo-dormiste' },
            ])
            .setColor('0xff00d9')
            .setTimestamp()
            .setFooter({text:`• Bot creado por DragonCat#1063  | Pedido por ${message.author.tag}`,iconURL: message.author.displayAvatarURL({format: "png"})})
          
            const embed2 = new EmbedBuilder()
          
            .setTitle('📖Comandos de NetCat📖:')
            .addFields([
                {  name: 'Comandos de chistes:', value: 'nc/chiste-0-positivo\nnc/chiste-córdoba-y-la-luna\nnc/chiste-el-de-la-playa\nnc/chiste-el-vasco-y-la-motosierra\nnc/chiste-general-y-soldado\nnc/chiste-rosa' },
            ])
            .setColor('0xff00d9')
            .setTimestamp()
            .setFooter({text:`• Bot creado por DragonCat#1063  | Pedido por ${message.author.tag}`,iconURL: message.author.displayAvatarURL({format: "png"})})
          
            const embed3 = new EmbedBuilder()
          
            .setTitle('📖Comandos de NetCat📖:')
            .addFields([
                {  name: 'Comandos de diversión:', value: 'nc/corrida\nnc/f-por\nnc/f\nnc/furros\nnc/no-corrida\nnc/no-furros\nnc/otro\nnc/paja\nnc/sí-corrida\nnc/sí-furros\nnc/tragar' },
            ])
            .setColor('0xff00d9')
            .setTimestamp()
            .setFooter({text:`• Bot creado por DragonCat#1063  | Pedido por ${message.author.tag}`,iconURL: message.author.displayAvatarURL({format: "png"})})
          
            const embed4 = new EmbedBuilder()
          
            .setTitle('📖Comandos de NetCat📖:')
            .addFields([
                {  name: 'Comandos de Gifs:', value: 'nc/gif-f\nnc/gif-monokuma\nnc/gif-netcat-avergonzada\nnc/gif-netcat-bailando\nnc/gif-netcat-baile\nnc/gif-netcat-duele-orejas\nnc/gif-netcat-enfado\nnc/gif-netcat-guitarra\nnc/gif-netcat-manzana\nnc/gif-netcat-muerde-dedo\nnc/gif-netcat-mueve-cola\nnc/gif-netcat-nya\nnc/gif-netcat-sad\nnc/gif-netcat-sonrojada\nnc/gif-netcat-sonroje' },
            ])
            .setColor('0xff00d9')
            .setTimestamp()
            .setFooter({text:`• Bot creado por DragonCat#1063  | Pedido por ${message.author.tag}`,iconURL: message.author.displayAvatarURL({format: "png"})})
          
            const embed5 = new EmbedBuilder()
          
            .setTitle('📖Comandos de NetCat📖:')
            .addFields([
                {  name: 'Comandos de NSFW:', value: 'nc/anal\nnc/boobjob\nnc/fuck\nnc/handjob\nnc/hentai\nnc/suck\nnc/yaoi' },
            ])
            .setColor('0xff00d9')
            .setTimestamp()
            .setFooter({text:`• Bot creado por DragonCat#1063  | Pedido por ${message.author.tag}`,iconURL: message.author.displayAvatarURL({format: "png"})})
          
            const embed6 = new EmbedBuilder()
          
            .setTitle('📖Comandos de NetCat📖:')
            .addFields([
                {  name: 'Comandos de reacción:', value: 'nc/angry\nnc/blush\nnc/bored\nnc/cure\nnc/eat\nnc/feed\nnc/hug\nnc/idoly\nnc/kill\nnc/kiss\nnc/lick\nnc/pat\nnc/punch\nnc/run\nnc/scared\nnc/sonroje\nnc/spank\nnc/ship' },
            ])
            .setColor('0xff00d9')
            .setTimestamp()
            .setFooter({text:`• Bot creado por DragonCat#1063  | Pedido por ${message.author.tag}`,iconURL: message.author.displayAvatarURL({format: "png"})})
          
            const embed7 = new EmbedBuilder()
          
            .setTitle('📖Comandos de NetCat📖:')
            .addFields([
                {  name: 'Comandos útiles:', value: 'nc/avatar\nnc/clear\nnc/md -TEMPORALMENTE FUERA DE SERVICIO.\nnc/say\nnc/serverinfo\nnc/afk\nnc/bugreport\nnc/suggest\nnc/calculadora' },
            ])
            .setColor('0xff00d9')
            .setTimestamp()
            .setFooter({text:`• Bot creado por DragonCat#1063  | Pedido por ${message.author.tag}`,iconURL: message.author.displayAvatarURL({format: "png"})})
          
            const embed8 = new EmbedBuilder()
          
            .setTitle('📖Comandos de NetCat📖:')
            .addFields([
                {  name: 'Comandos para hacer chuletas de exámenes de historia:', value: 'nc/consecuencias-de-la-conquista-de-américa\nnc/descubrimiento-y-conquista-de-américa\nnc/historia-imperio-inca\nnc/historia-nazi\nnc/resumen-consecuencias-de-la-conquista-de-américa\nnc/resumen-descubrimiento-y-conquista-de-américa' },
            ])
            .setColor('0xff00d9')
            .setTimestamp()
            .setFooter({text:`• Bot creado por DragonCat#1063  | Pedido por ${message.author.tag}`,iconURL: message.author.displayAvatarURL({format: "png"})})
          
            const embed9 = new EmbedBuilder()
          
            .setTitle('📖Comandos de NetCat📖:')
            .addFields([
                {  name: 'Comandos de música:', value: '🔴Módulo fuera de servicio temporalmente.🔴' },
            ])
            .setColor('0xff00d9')
            .setTimestamp()
            .setFooter({text:`• Bot creado por DragonCat#1063  | Pedido por ${message.author.tag}`,iconURL: message.author.displayAvatarURL({format: "png"})})
          
            const embed10 = new EmbedBuilder()
          
            .setTitle('📖Comandos de NetCat📖:')
            .addFields([
                {  name: 'Comandos de configuración:', value: 'nc/delete-channel\nnc/setprefix\nnc/create-channel-lock\nnc/create-channel\nnc/create-privatechannel-lock\nnc/create-privatechannel\nnc/delete-goodbye-channel\nnc/delete-welcome-channel\nnc/set-goodbye-message-default\nnc/set-goodbye-message\nnc/set-goodbye-channel\nnc/set-module\nnc/set-ticket-category\nnc/set-welcome-channel\nnc/set-welcome-message-default\nnc/set-welcome-message' },
            ])
            .setColor('0xff00d9')
            .setTimestamp()
            .setFooter({text:`• Bot creado por DragonCat#1063  | Pedido por ${message.author.tag}`,iconURL: message.author.displayAvatarURL({format: "png"})})
          
            const embed11 = new EmbedBuilder()
          
            .setTitle('📖Comandos de NetCat📖:')
            .addFields([
                {  name: 'Comandos de economía:', value: 'nc/add-money-bank\nnc/add-money\nnc/bal\nnc/buy\nnc/dep\nnc/mochila\nnc/remove-money-bank\nnc/remove-money\nnc/rob\nnc/shop\nnc/with\nnc/work' },
            ])
            .setColor('0xff00d9')
            .setTimestamp()
            .setFooter({text:`• Bot creado por DragonCat#1063  | Pedido por ${message.author.tag}`,iconURL: message.author.displayAvatarURL({format: "png"})})
          
            const embed12 = new EmbedBuilder()
          
            .setTitle('📖Comandos de NetCat📖:')
            .addFields([
                {  name: 'Comandos de moderación:', value: 'nc/ban\nnc/kick\nnc/mute\nnc/muterol\nnc/send -TEMPORALMENTE FUERA DE SERVICIO.\nnc/temp-mute\nnc/unmute\nnc/unwarn\nnc/warn\nnc/warns\nnc/add-staff-role\nnc/clean-all\nnc/new-ticket' },
            ])
            .setColor('0xff00d9')
            .setTimestamp()
            .setFooter({text:`• Bot creado por DragonCat#1063  | Pedido por ${message.author.tag}`,iconURL: message.author.displayAvatarURL({format: "png"})})
          
            const embed13 = new EmbedBuilder()
          
            .setTitle('📖Comandos de NetCat📖:')
            .addFields([
                {  name: 'Comandos de juegos:', value: 'nc/name-personaje\nnc/name-personaje-hombre\nnc/name-personaje-mujer\nnc/roll' },
            ])
            .setColor('0xff00d9')
            .setTimestamp()
            .setFooter({text:`• Bot creado por DragonCat#1063  | Pedido por ${message.author.tag}`,iconURL: message.author.displayAvatarURL({format: "png"})})
          
            const embed14 = new EmbedBuilder()
          
            .setTitle('📖Comandos de NetCat📖:')
            .addFields([
                {  name: 'Comandos links NetCat:', value: 'nc/invite\nnc/support\nnc/netcathostserver\nnc/panelnetcathost\nnc/webnetcathost\nnc/promo-sintiendo.me' },
            ])
            .setColor('0xff00d9')
            .setTimestamp()
            .setFooter({text:`• Bot creado por DragonCat#1063  | Pedido por ${message.author.tag}`,iconURL: message.author.displayAvatarURL({format: "png"})})
          
            const embed15 = new EmbedBuilder()
          
            .setTitle('📖Comandos de NetCat📖:')
            .addFields([
                {  name: 'Comandos para miembros VIP:', value: 'Disponible cuando tengas el objeto `miembro VIP`. Cómpralo en la tienda de NetCat si deseas tener acceso a los comandos VIP de NetCat.\nPara acceder a la tienda de NetCat, use el comando `nc/shop`' },
            ])
            .setColor('0xff00d9')
            .setTimestamp()
            .setFooter({text:`• Bot creado por DragonCat#1063  | Pedido por ${message.author.tag}`,iconURL: message.author.displayAvatarURL({format: "png"})})
          
            const embed16 = new EmbedBuilder()
          
            .setTitle('📖Comandos de información📖:')
            .addFields([
                {  name: 'Comandos de información:', value: 'nc/estado-comando\nnc/estado-modulos-servidor\nnc/estado-modulos\nnc/help\nnc/ping\nnc/serverinfo' },
            ])
            .setColor('0xff00d9')
            .setTimestamp()
            .setFooter({text:`• Bot creado por DragonCat#1063  | Pedido por ${message.author.tag}`,iconURL: message.author.displayAvatarURL({format: "png"})})
          
            const embedprincipal = new EmbedBuilder()
          
            .setTitle("📖Comandos de NetCat📖: Menú de módulos")
            .setDescription("Para ver los comandos de cualquier módulo seleccione el módulo que desee ver en la barra de menú situada abajo de este mensaje.")
            .addFields([
                {  name: '__📜Listado de módulos📜:__', value: ' -Comandos de conversación 🟢\n-Comandos de chistes 🟢\n-Comandos de diversión 🟢\n-Comandos de Gifs 🟢\n-Comandos de NSFW 🟢\n-Comandos de reacción 🟢\n-Comandos útiles 🟢\n-Comandos para hacer chuletas de exámenes de historia 🟢\n-Comandos de música 🔴\n-Comandos de configuración ​🟢\n-Comandos de economía 🟢\n-Comandos de moderación 🟢\n-Comandos de juegos 🟢\n-Comandos links NetCat 🟢\n-Comandos para miembros VIP 🟡\n-Comandos de información 🟢' },
                {  name: 'Links de NetCat:', value: '[ link de invitación](https://discord.com/oauth2/authorize?client_id=900470345809674260&scope=bot&permissions=8) y [servidor oficial de NetCat](https://discord.gg/3Tfwk8QdmJ )' },
            ])
            .setFooter({text:'🟢 = Módulo operativo y desbloqueado.\n  🟡 = Módulo operativo, pero bloqueado hasta que seas miembro VIP.\n  🔴 = Módulo fuera de servicio temporalmente.'})
            .setColor('0xff00d9')
          
            const row = new ActionRowBuilder()
			.addComponents(
				new SelectMenuBuilder()
					.setCustomId('select')
					.setPlaceholder('Haz click aquí para desplegar el listado de módulos')
					.addOptions([
						{
							label: 'Comandos de conversación',
							description: 'Hacer click aquí para ver: Comandos de conversación',
							value: '1',
                            emoji: "💬"
						},
						{
							label: 'Comandos de chistes',
							description: 'Hacer click aquí para ver: Comandos de chistes',
							value: '2',
                            emoji: "🤡"
						},
                        {
							label: 'Comandos de diversión',
							description: 'Hacer click aquí para ver: Comandos de diversión',
							value: '3',
                            emoji: "😹"
						},
						{
							label: 'Comandos de Gifs',
							description: 'Hacer click aquí para ver: Comandos de Gifs',
							value: '4',
                            emoji: "🎞️"
						},
                        {
							label: 'Comandos de NSFW',
							description: 'Hacer click aquí para ver: Comandos de NSFW',
							value: '5',
                            emoji: "🙈"
						},
						{
							label: 'Comandos de reacción',
							description: 'Hacer click aquí para ver: Comandos de reacción',
							value: '6',
                            emoji: "🙀"
						},
                        {
							label: 'Comandos útiles',
							description: 'Hacer click aquí para ver: Comandos útiles',
							value: '7',
                            emoji: "⚒️"
						},
						{
							label: 'Comandos para hacer chuletas de exámenes de historia',
							description: 'Hacer click aquí para ver: Comandos para hacer chuletas de exámenes de historia',
							value: '8',
                            emoji: "👀"
						},
                        {
							label: 'Comandos de música',
							description: 'Hacer click aquí para ver: Comandos de música',
							value: '9',
                            emoji: "🎵"
						},
						{
							label: 'Comandos de configuración',
							description: 'Hacer click aquí para ver: Comandos de configuración',
							value: '10',
                            emoji: "⚙️"
						},
                        {
							label: 'Comandos de economía',
							description: 'Hacer click aquí para ver: Comandos de economía',
							value: '11',
                            emoji: "💰"
						},
						{
							label: 'Comandos de moderación',
							description: 'Hacer click aquí para ver: Comandos de moderación',
							value: '12',
                            emoji: "💂"
						},
                        {
							label: 'Comandos de juegos',
							description: 'Hacer click aquí para ver: Comandos de juegos',
							value: '13',
                            emoji: "🕹️"
						},
						{
							label: 'Comandos links NetCat',
							description: 'Hacer click aquí para ver: Comandos links NetCat',
							value: '14',
                            emoji: "🖇️"
						},
                        {
							label: 'Comandos para miembros VIP',
							description: 'Hacer click aquí para ver: Comandos para miembros VIP',
							value: '15',
                            emoji: "💎"
						},
                        {
                            label: 'Comandos de información',
                            description: 'Hacer click aquí para ver: Comandos de información',
                            value: '16',
                            emoji: "💌"
                        },
						{
							label: 'Menú principal',
							description: 'Regresa al menú principal',
							value: '17',
                            emoji: "◀️"
						},
					]),
			);

            
            const msg = await message.channel.send({embeds: [embedprincipal], components: [row]});
          
            const filtro = i => i.user.id === message.author.id;
            const collector = msg.createMessageComponentCollector({filter: filtro,  time: 3600000 })
          
            collector.on('collect', async menu => {
                if(menu.values[0] === '1') {
                    await menu.deferUpdate();
                    menu.editReply({embeds: [embed]});
                }
                if(menu.values[0] === '2') {
                    await menu.deferUpdate();
                    menu.editReply({embeds: [embed2]});
                }
                if(menu.values[0] === '3') {
                    await menu.deferUpdate();
                    menu.editReply({embeds: [embed3]});
                }
                if(menu.values[0] === '4') {
                    await menu.deferUpdate();
                    menu.editReply({embeds: [embed4]});
                }
                if(menu.values[0] === '5') {
                    await menu.deferUpdate();
                    menu.editReply({embeds: [embed5]});
                }
                if(menu.values[0] === '6') {
                    await menu.deferUpdate();
                    menu.editReply({embeds: [embed6]});
                }
                if(menu.values[0] === '7') {
                    await menu.deferUpdate();
                    menu.editReply({embeds: [embed7]});
                }
                if(menu.values[0] === '8') {
                    await menu.deferUpdate();
                    menu.editReply({embeds: [embed8]});
                }
                if(menu.values[0] === '9') {
                    await menu.deferUpdate();
                    menu.editReply({embeds: [embed9]});
                }
                if(menu.values[0] === '10') {
                    await menu.deferUpdate();
                    menu.editReply({embeds: [embed10]});
                }
                if(menu.values[0] === '11') {
                    await menu.deferUpdate();
                    menu.editReply({embeds: [embed11]});
                }
                if(menu.values[0] === '12') {
                    await menu.deferUpdate();
                    menu.editReply({embeds: [embed12]});
                }
                if(menu.values[0] === '13') {
                    await menu.deferUpdate();
                    menu.editReply({embeds: [embed13]});
                }
                if(menu.values[0] === '14') {
                    await menu.deferUpdate();
                    menu.editReply({embeds: [embed14]});
                }
                if(menu.values[0] === '15') {
                    await menu.deferUpdate();
                    menu.editReply({embeds: [embed15]});
              }
                if(menu.values[0] === '16') {
                    await menu.deferUpdate();
                    menu.editReply({embeds: [embed16]});
                }
                if(menu.values[0] === '17') {
                    await menu.deferUpdate();
                    menu.editReply({embeds: [embedprincipal]});
                }
            })
         }

         if(objetovip === 1){
            const embed = new EmbedBuilder()

            .setTitle('📖Comandos de NetCat📖:')
            .addFields([
                {  name: 'Comandos de conversación:', value: 'nc/hola\nnc/bien-y-tu\nnc/denada\nnc/tengo-sueño\nnc/me-voy\nnc/buenas-noches\nnc/buenos-días\nnc/cómo-dormiste' },
            ])
            .setColor('0xff00d9')
            .setTimestamp()
            .setFooter({text:`• Bot creado por DragonCat#1063  | Pedido por ${message.author.tag}`,iconURL: message.author.displayAvatarURL({format: "png"})})
          
            const embed2 = new EmbedBuilder()
          
            .setTitle('📖Comandos de NetCat📖:')
            .addFields([
                {  name: 'Comandos de chistes:', value: 'nc/chiste-0-positivo\nnc/chiste-córdoba-y-la-luna\nnc/chiste-el-de-la-playa\nnc/chiste-el-vasco-y-la-motosierra\nnc/chiste-general-y-soldado\nnc/chiste-rosa' },
            ])
            .setColor('0xff00d9')
            .setTimestamp()
            .setFooter({text:`• Bot creado por DragonCat#1063  | Pedido por ${message.author.tag}`,iconURL: message.author.displayAvatarURL({format: "png"})})
          
            const embed3 = new EmbedBuilder()
          
            .setTitle('📖Comandos de NetCat📖:')
            .addFields([
                {  name: 'Comandos de diversión:', value: 'nc/corrida\nnc/f-por\nnc/f\nnc/furros\nnc/no-corrida\nnc/no-furros\nnc/otro\nnc/paja\nnc/sí-corrida\nnc/sí-furros\nnc/tragar' },
            ])
            .setColor('0xff00d9')
            .setTimestamp()
            .setFooter({text:`• Bot creado por DragonCat#1063  | Pedido por ${message.author.tag}`,iconURL: message.author.displayAvatarURL({format: "png"})})
          
            const embed4 = new EmbedBuilder()
          
            .setTitle('📖Comandos de NetCat📖:')
            .addFields([
                {  name: 'Comandos de Gifs:', value: 'nc/gif-f\nnc/gif-monokuma\nnc/gif-netcat-avergonzada\nnc/gif-netcat-bailando\nnc/gif-netcat-baile\nnc/gif-netcat-duele-orejas\nnc/gif-netcat-enfado\nnc/gif-netcat-guitarra\nnc/gif-netcat-manzana\nnc/gif-netcat-muerde-dedo\nnc/gif-netcat-mueve-cola\nnc/gif-netcat-nya\nnc/gif-netcat-sad\nnc/gif-netcat-sonrojada\nnc/gif-netcat-sonroje' },
            ])
            .setColor('0xff00d9')
            .setTimestamp()
            .setFooter({text:`• Bot creado por DragonCat#1063  | Pedido por ${message.author.tag}`,iconURL: message.author.displayAvatarURL({format: "png"})})
          
            const embed5 = new EmbedBuilder()
          
            .setTitle('📖Comandos de NetCat📖:')
            .addFields([
                {  name: 'Comandos de NSFW:', value: 'nc/anal\nnc/boobjob\nnc/fuck\nnc/handjob\nnc/hentai\nnc/suck\nnc/yaoi' },
            ])
            .setColor('0xff00d9')
            .setTimestamp()
            .setFooter({text:`• Bot creado por DragonCat#1063  | Pedido por ${message.author.tag}`,iconURL: message.author.displayAvatarURL({format: "png"})})
          
            const embed6 = new EmbedBuilder()
          
            .setTitle('📖Comandos de NetCat📖:')
            .addFields([
                {  name: 'Comandos de reacción:', value: 'nc/angry\nnc/blush\nnc/bored\nnc/cure\nnc/eat\nnc/feed\nnc/hug\nnc/idoly\nnc/kill\nnc/kiss\nnc/lick\nnc/pat\nnc/punch\nnc/run\nnc/scared\nnc/sonroje\nnc/spank\nnc/ship' },
            ])
            .setColor('0xff00d9')
            .setTimestamp()
            .setFooter({text:`• Bot creado por DragonCat#1063  | Pedido por ${message.author.tag}`,iconURL: message.author.displayAvatarURL({format: "png"})})
          
            const embed7 = new EmbedBuilder()
          
            .setTitle('📖Comandos de NetCat📖:')
            .addFields([
                {  name: 'Comandos útiles:', value: 'nc/avatar\nnc/clear\nnc/md -TEMPORALMENTE FUERA DE SERVICIO.\nnc/say\nnc/serverinfo\nnc/afk\nnc/bugreport\nnc/suggest\nnc/calculadora' },
            ])
            .setColor('0xff00d9')
            .setTimestamp()
            .setFooter({text:`• Bot creado por DragonCat#1063  | Pedido por ${message.author.tag}`,iconURL: message.author.displayAvatarURL({format: "png"})})
          
            const embed8 = new EmbedBuilder()
          
            .setTitle('📖Comandos de NetCat📖:')
            .addFields([
                {  name: 'Comandos para hacer chuletas de exámenes de historia:', value: 'nc/consecuencias-de-la-conquista-de-américa\nnc/descubrimiento-y-conquista-de-américa\nnc/historia-imperio-inca\nnc/historia-nazi\nnc/resumen-consecuencias-de-la-conquista-de-américa\nnc/resumen-descubrimiento-y-conquista-de-américa' },
            ])
            .setColor('0xff00d9')
            .setTimestamp()
            .setFooter({text:`• Bot creado por DragonCat#1063  | Pedido por ${message.author.tag}`,iconURL: message.author.displayAvatarURL({format: "png"})})
          
            const embed9 = new EmbedBuilder()
          
            .setTitle('📖Comandos de NetCat📖:')
            .addFields([
                {  name: 'Comandos de música:', value: '🔴Módulo fuera de servicio temporalmente.🔴' },
            ])
            .setColor('0xff00d9')
            .setTimestamp()
            .setFooter({text:`• Bot creado por DragonCat#1063  | Pedido por ${message.author.tag}`,iconURL: message.author.displayAvatarURL({format: "png"})})
          
            const embed10 = new EmbedBuilder()
          
            .setTitle('📖Comandos de NetCat📖:')
            .addFields([
                {  name: 'Comandos de configuración:', value: 'nc/delete-channel\nnc/setprefix\nnc/create-channel-lock\nnc/create-channel\nnc/create-privatechannel-lock\nnc/create-privatechannel\nnc/delete-goodbye-channel\nnc/delete-welcome-channel\nnc/set-goodbye-message-default\nnc/set-goodbye-message\nnc/set-goodbye-channel\nnc/set-module\nnc/set-ticket-category\nnc/set-welcome-channel\nnc/set-welcome-message-default\nnc/set-welcome-message' },
            ])
            .setColor('0xff00d9')
            .setTimestamp()
            .setFooter({text:`• Bot creado por DragonCat#1063  | Pedido por ${message.author.tag}`,iconURL: message.author.displayAvatarURL({format: "png"})})
          
            const embed11 = new EmbedBuilder()
          
            .setTitle('📖Comandos de NetCat📖:')
            .addFields([
                {  name: 'Comandos de economía:', value: 'nc/add-money-bank\nnc/add-money\nnc/bal\nnc/buy\nnc/dep\nnc/mochila\nnc/remove-money-bank\nnc/remove-money\nnc/rob\nnc/shop\nnc/with\nnc/work' },
            ])
            .setColor('0xff00d9')
            .setTimestamp()
            .setFooter({text:`• Bot creado por DragonCat#1063  | Pedido por ${message.author.tag}`,iconURL: message.author.displayAvatarURL({format: "png"})})
          
            const embed12 = new EmbedBuilder()
          
            .setTitle('📖Comandos de NetCat📖:')
            .addFields([
                {  name: 'Comandos de moderación:', value: 'nc/ban\nnc/kick\nnc/mute\nnc/muterol\nnc/send -TEMPORALMENTE FUERA DE SERVICIO.\nnc/temp-mute\nnc/unmute\nnc/unwarn\nnc/warn\nnc/warns\nnc/add-staff-role\nnc/clean-all\nnc/new-ticket' },
            ])
            .setColor('0xff00d9')
            .setTimestamp()
            .setFooter({text:`• Bot creado por DragonCat#1063  | Pedido por ${message.author.tag}`,iconURL: message.author.displayAvatarURL({format: "png"})})
          
            const embed13 = new EmbedBuilder()
          
            .setTitle('📖Comandos de NetCat📖:')
            .addFields([
                {  name: 'Comandos de juegos:', value: 'nc/name-personaje\nnc/name-personaje-hombre\nnc/name-personaje-mujer\nnc/roll' },
            ])
            .setColor('0xff00d9')
            .setTimestamp()
            .setFooter({text:`• Bot creado por DragonCat#1063  | Pedido por ${message.author.tag}`,iconURL: message.author.displayAvatarURL({format: "png"})})
          
            const embed14 = new EmbedBuilder()
          
            .setTitle('📖Comandos de NetCat📖:')
            .addFields([
                {  name: 'Comandos links NetCat:', value: 'nc/invite\nnc/support\nnc/netcathostserver\nnc/panelnetcathost\nnc/webnetcathost\nnc/promo-sintiendo.me' },
            ])
            .setColor('0xff00d9')
            .setTimestamp()
            .setFooter({text:`• Bot creado por DragonCat#1063  | Pedido por ${message.author.tag}`,iconURL: message.author.displayAvatarURL({format: "png"})})
          
            const embed15 = new EmbedBuilder()
          
            .setTitle('📖Comandos de NetCat📖:')
            .addFields([
                {  name: 'Comandos para miembros VIP:', value: 'nc/fondos' },
            ])
            .setColor('0xff00d9')
            .setTimestamp()
            .setFooter({text:`• Bot creado por DragonCat#1063  | Pedido por ${message.author.tag}`,iconURL: message.author.displayAvatarURL({format: "png"})})
          
            const embed16 = new EmbedBuilder()
          
            .setTitle('📖Comandos de información📖:')
            .addFields([
                {  name: 'Comandos de información:', value: 'nc/estado-comando\nnc/estado-modulos-servidor\nnc/estado-modulos\nnc/help\nnc/ping\nnc/serverinfo' },
            ])
            .setColor('0xff00d9')
            .setTimestamp()
            .setFooter({text:`• Bot creado por DragonCat#1063  | Pedido por ${message.author.tag}`,iconURL: message.author.displayAvatarURL({format: "png"})})
          
            const embedprincipal = new EmbedBuilder()
          
            .setTitle("📖Comandos de NetCat📖: Menú de módulos")
            .setDescription("Para ver los comandos de cualquier módulo seleccione el módulo que desee ver en la barra de menú situada abajo de este mensaje.")
            .addFields([
                {  name: '__📜Listado de módulos📜:__', value: ' -Comandos de conversación 🟢\n-Comandos de chistes 🟢\n-Comandos de diversión 🟢\n-Comandos de Gifs 🟢\n-Comandos de NSFW 🟢\n-Comandos de reacción 🟢\n-Comandos útiles 🟢\n-Comandos para hacer chuletas de exámenes de historia 🟢\n-Comandos de música 🔴\n-Comandos de configuración ​🟢\n-Comandos de economía 🟢\n-Comandos de moderación 🟢\n-Comandos de juegos 🟢\n-Comandos links NetCat 🟢\n-Comandos para miembros VIP 🟢\n-Comandos de información 🟢' },
                {  name: 'Links de NetCat:', value: '[ link de invitación](https://discord.com/oauth2/authorize?client_id=900470345809674260&scope=bot&permissions=8) y [servidor oficial de NetCat](https://discord.gg/3Tfwk8QdmJ )' },
            ])
            .setFooter({text:'🟢 = Módulo operativo y desbloqueado.\n  🟡 = Módulo operativo, pero bloqueado hasta que seas miembro VIP.\n  🔴 = Módulo fuera de servicio temporalmente.'})
            .setColor('0xff00d9')
          
            const row = new ActionRowBuilder()
			.addComponents(
				new SelectMenuBuilder()
					.setCustomId('select')
					.setPlaceholder('Haz click aquí para desplegar el listado de módulos')
					.addOptions([
						{
							label: 'Comandos de conversación',
							description: 'Hacer click aquí para ver: Comandos de conversación',
							value: '1',
                            emoji: "💬"
						},
						{
							label: 'Comandos de chistes',
							description: 'Hacer click aquí para ver: Comandos de chistes',
							value: '2',
                            emoji: "🤡"
						},
                        {
							label: 'Comandos de diversión',
							description: 'Hacer click aquí para ver: Comandos de diversión',
							value: '3',
                            emoji: "😹"
						},
						{
							label: 'Comandos de Gifs',
							description: 'Hacer click aquí para ver: Comandos de Gifs',
							value: '4',
                            emoji: "🎞️"
						},
                        {
							label: 'Comandos de NSFW',
							description: 'Hacer click aquí para ver: Comandos de NSFW',
							value: '5',
                            emoji: "🙈"
						},
						{
							label: 'Comandos de reacción',
							description: 'Hacer click aquí para ver: Comandos de reacción',
							value: '6',
                            emoji: "🙀"
						},
                        {
							label: 'Comandos útiles',
							description: 'Hacer click aquí para ver: Comandos útiles',
							value: '7',
                            emoji: "⚒️"
						},
						{
							label: 'Comandos para hacer chuletas de exámenes de historia',
							description: 'Hacer click aquí para ver: Comandos para hacer chuletas de exámenes de historia',
							value: '8',
                            emoji: "👀"
						},
                        {
							label: 'Comandos de música',
							description: 'Hacer click aquí para ver: Comandos de música',
							value: '9',
                            emoji: "🎵"
						},
						{
							label: 'Comandos de configuración',
							description: 'Hacer click aquí para ver: Comandos de configuración',
							value: '10',
                            emoji: "⚙️"
						},
                        {
							label: 'Comandos de economía',
							description: 'Hacer click aquí para ver: Comandos de economía',
							value: '11',
                            emoji: "💰"
						},
						{
							label: 'Comandos de moderación',
							description: 'Hacer click aquí para ver: Comandos de moderación',
							value: '12',
                            emoji: "💂"
						},
                        {
							label: 'Comandos de juegos',
							description: 'Hacer click aquí para ver: Comandos de juegos',
							value: '13',
                            emoji: "🕹️"
						},
						{
							label: 'Comandos links NetCat',
							description: 'Hacer click aquí para ver: Comandos links NetCat',
							value: '14',
                            emoji: "🖇️"
						},
                        {
							label: 'Comandos para miembros VIP',
							description: 'Hacer click aquí para ver: Comandos para miembros VIP',
							value: '15',
                            emoji: "💎"
						},
                        {
                            label: 'Comandos de información',
                            description: 'Hacer click aquí para ver: Comandos de información',
                            value: '16',
                            emoji: "💌"
                        },
						{
							label: 'Menú principal',
							description: 'Regresa al menú principal',
							value: '17',
                            emoji: "◀️"
						},
					]),
			);
            
            const msg = await message.channel.send({embeds: [embedprincipal], components: [row]});
          
            const filtro = i => i.user.id === message.author.id;
            const collector = msg.createMessageComponentCollector({filter: filtro,  time: 3600000 })
          
            collector.on('collect', async menu => {
                if(menu.values[0] === '1') {
                    await menu.deferUpdate();
                    menu.editReply({embeds: [embed]});
                }
                if(menu.values[0] === '2') {
                    await menu.deferUpdate();
                    menu.editReply({embeds: [embed2]});
                }
                if(menu.values[0] === '3') {
                    await menu.deferUpdate();
                    menu.editReply({embeds: [embed3]});
                }
                if(menu.values[0] === '4') {
                    await menu.deferUpdate();
                    menu.editReply({embeds: [embed4]});
                }
                if(menu.values[0] === '5') {
                    await menu.deferUpdate();
                    menu.editReply({embeds: [embed5]});
                }
                if(menu.values[0] === '6') {
                    await menu.deferUpdate();
                    menu.editReply({embeds: [embed6]});
                }
                if(menu.values[0] === '7') {
                    await menu.deferUpdate();
                    menu.editReply({embeds: [embed7]});
                }
                if(menu.values[0] === '8') {
                    await menu.deferUpdate();
                    menu.editReply({embeds: [embed8]});
                }
                if(menu.values[0] === '9') {
                    await menu.deferUpdate();
                    menu.editReply({embeds: [embed9]});
                }
                if(menu.values[0] === '10') {
                    await menu.deferUpdate();
                    menu.editReply({embeds: [embed10]});
                }
                if(menu.values[0] === '11') {
                    await menu.deferUpdate();
                    menu.editReply({embeds: [embed11]});
                }
                if(menu.values[0] === '12') {
                    await menu.deferUpdate();
                    menu.editReply({embeds: [embed12]});
                }
                if(menu.values[0] === '13') {
                    await menu.deferUpdate();
                    menu.editReply({embeds: [embed13]});
                }
                if(menu.values[0] === '14') {
                    await menu.deferUpdate();
                    menu.editReply({embeds: [embed14]});
                }
                if(menu.values[0] === '15') {
                    await menu.deferUpdate();
                    menu.editReply({embeds: [embed15]});
              }
                if(menu.values[0] === '16') {
                    await menu.deferUpdate();
                    menu.editReply({embeds: [embed16]});
                }
                if(menu.values[0] === '17') {
                    await menu.deferUpdate();
                    menu.editReply({embeds: [embedprincipal]});
                }
            })
         }

  

            }
       let iddelservidorejecutor = message.guild.id;
       
       let laidservidorejecutor = await serversmodstatusdb.obtener(iddelservidorejecutor);
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
            ejecutarcomando();

        }
        else {
            var estadosvmodulo = await serversmodstatusdb.obtener(`${iddelservidorejecutor}.${modulodeestecomando}`);
            if(estadosvmodulo === modisonline) {
                ejecutarcomando();
            }
            if(estadosvmodulo === modisoffline) {
                message.channel.send(`**:x: | MODULE_OFFLINE:** Módulo de ${modulodeestecomando} apagado\nSi desea usar este comando, encienda el módulo.`);
            }
            if(estadosvmodulo !== modisonline && estadosvmodulo !== modisoffline) {
                message.channel.send("**:x: | ERROR:** Error detectado! Anti-Crash-System: ACTIVATED!\nPor favor, reporte este error al staff del server o al desarrollador del bot.")
            }
        }
}
        if(ncomando == privados.test) {
            if(message.author.id !== idpropietario) {
                message.channel.send(`**⛔ | PERMISSION_DENIED :** No tienes permiso para usar este comando, sólo mi creador puede usar este comando.\nPersonal autorizado: ${nombrepropietario}`);
            }
            else {
                ejecutarcomandoisOK();
            }
        }
        else {
            if(estadosistema === "under-maintenance") {
                if(message.author.id !== idpropietario) {
                    message.channel.send("**:warning: | SYSTEM_UNDER_MAINTENANCE: ** Sistema en mantenimiento, bot en mantenimiento, disculpe las molestias.")
                }
                else {
                    ejecutarcomandoisOK();
                }
            }
            else {
                if(estadosistema === "online") {
                    if(estadomodulo == modisonline) {
                       
                       if(estadocomando == commandisok) {
                        ejecutarcomandoisOK();
                       }
                       if(estadocomando == commandisenmantenimiento) {
                        if(message.author.id !== idpropietario) {
                            message.channel.send(`**:warning: | COMMAND_UNDER_MAINTENANCE :** Comando en mantenimiento, disculpe las molestias.`);
                        }
                        else {
                            ejecutarcomandoisOK();
                        }
                       }
                       if(estadocomando == commandiserror) {
                        message.channel.send("**:x: | ERROR:** Error detectado! Anti-Crash-System: ACTIVATED!\nPor favor, reporte este error al staff del server o al desarrollador del bot.")
                       }
                       if(estadocomando == commandisoffline) {
                        message.channel.send("**:x: | COMMAND_UNAVALIABLE:** Comando no disponible indefinidamente. Disculpe las molestias.")
                       }
                    }
                    if(estadomodulo == modisundermaintenance) {
                        if(estadocomando == commandisoffline) {
                            message.channel.send("**:x: | COMMAND_UNAVALIABLE:** Comando no disponible indefinidamente. Disculpe las molestias.")
                           }
                           else {
                            if(message.author.id !== idpropietario) {
                                message.channel.send(`**:warning: | MODULE_UNDER_MAINTENANCE :** Módulo de ${modulodeestecomando} en mantenimiento, disculpe las molestias.`);
                            }
                            else {
                                ejecutarcomandoisOK();
                            }
                           
                           }
                    }
                    if(estadomodulo == modisoffline) {
                        if(estadocomando == commandisoffline) {
                            message.channel.send("**:x: | COMMAND_UNAVALIABLE:** Comando no disponible indefinidamente. Disculpe las molestias.")
                           }
                           else {
                            message.channel.send(`**:x: | MODULE_OFFLINE:** Módulo de ${modulodeestecomando} apagado\nSi desea usar este comando, encienda el módulo.`);
                           }
                    }
                    if(estadomodulo == modisoutofservice) {
                        if(estadocomando == commandisoffline) {
                            message.channel.send("**:x: | COMMAND_UNAVALIABLE:** Comando no disponible indefinidamente. Disculpe las molestias.")
                           }
                           else {
                            message.channel.send("**:x: | MODULE_UNAVALIABLE:** Módulo no disponible indefinidamente. Disculpe las molestias.")
                           }
                    }
            
                }
                else {
                    message.channel.send("**:x: | ERROR:** Error detectado! Anti-Crash-System: ACTIVATED!\nPor favor, reporte este error al staff del server o al desarrollador del bot.")
                }
            }
        }
    }
}
var estadosistema = estadosistemadb.mode;
if(estadosistema === "under-maintenance") {
    console.log(`Comando: ${ncomando}: ${commandisenmantenimiento} (Motivo: Sistema en mantenimiento)`.yellow);
}
else {
    if(estadosistema === "online") {
        
        if(estadomodulo == modisonline) {
           
           if(estadocomando == commandisok) {
            console.log(`Comando: ${ncomando}: ${commandisok}`.green);
           }
           if(estadocomando == commandisenmantenimiento) {
            console.log(`Comando: ${ncomando}: ${commandisenmantenimiento}`.yellow);
           }
           if(estadocomando == commandiserror) {
            console.log(`Comando: ${ncomando}: ${commandiserror}`.red);
           }
           if(estadocomando == commandisoffline) {
            console.log(`Comando: ${ncomando}: ${commandisoffline}`.grey);
           }
        }
        if(estadomodulo == modisundermaintenance) {
            if(estadocomando == commandisoffline) {
                console.log(`Comando: ${ncomando}: ${commandisoffline}`.grey);
               }
               else {
                console.log(`Comando: ${ncomando}: ${commandisenmantenimiento} (Motivo: Module: ${modulodeestecomando}: ${modisundermaintenance})`.yellow);
               }
        }
        if(estadomodulo == modisoffline) {
            if(estadocomando == commandisoffline) {
                console.log(`Comando: ${ncomando}: ${commandisoffline}`.grey);
               }
               else {
                console.log(`Comando: ${ncomando}: ${commandisoffline} (Motivo: Module: ${modulodeestecomando}: ${modisoffline})`.grey);
               }
        }
        if(estadomodulo == modisoutofservice) {
            if(estadocomando == commandisoffline) {
                console.log(`Comando: ${ncomando}: ${commandisoffline}`.grey);
               }
               else {
                console.log(`Comando: ${ncomando}: ${commandisoffline} (Motivo: Module: ${modulodeestecomando}: ${modisoutofservice})`.grey);
               }
        }

    }
    else {
        console.log(`Comando: ${ncomando}: ${commandiserror}`.red);
    }
}


