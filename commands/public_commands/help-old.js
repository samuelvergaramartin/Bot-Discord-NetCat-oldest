const Discord = require ('discord.js');
//const client = new Discord.Client();
const { Client, MessageEmbed, MessageMenuOption, MessageMenu} = require('discord.js');
const db = require('megadb')
//const { MessageMenuOption, MessageMenu } = require ("discord-buttons")
const vip = new db.crearDB('vip')

module.exports = {
    name: "help.old",
    run: async (client, message, args) => {
	    //if(message.channel.permissionsFor(client.user).has("EMBEDS_LINKS")) return message.channel.send("**:x: | ERROR:** No tengo los permisos suficientes.\nPermiso que me falta: `EMBEDS_LINKS`");
	    //if(message.channel.permissionsFor(client.user).has("ATTACH_FILES")) return message.channel.send("**:x: | ERROR:** No tengo los permisos suficientes.\nPermiso que me falta: `ATTACH_FILES`");
        const user = message.author;

        if (!vip.tiene(`${user.id}`))
         vip.establecer(`${user.id}`, 0)
         const objetovip = await vip.obtener(`${user.id}`)

         if(objetovip === 0){
            const embed = new MessageEmbed()

            .setTitle('📖Comandos de NetCat📖:')
            .addField('Comandos de conversación:', 'nc/hola\nnc/bien-y-tu\nnc/denada\nnc/tengo-sueño\nnc/me-voy\nnc/buenas-noches\nnc/buenos-días\nnc/cómo-dormiste')
            .setColor('ff00d9')
            .setTimestamp()
            .setFooter({text:`• Bot creado por DragonCat#1063 | Pedido por ${message.author.tag}`,iconURL: message.author.displayAvatarURL({format: "png"})})
          
            const embed2 = new MessageEmbed()
          
            .setTitle('📖Comandos de NetCat📖:')
            .addField('Comandos de chistes:', 'nc/chiste-0-positivo\nnc/chiste-córdoba-y-la-luna\nnc/chiste-el-de-la-playa\nnc/chiste-el-vasco-y-la-motosierra\nnc/chiste-general-y-soldado\nnc/chiste-rosa')
            .setColor('ff00d9')
            .setTimestamp()
            .setFooter({text:`• Bot creado por DragonCat#1063  | Pedido por ${message.author.tag}`,iconURL: message.author.displayAvatarURL({format: "png"})})
          
            const embed3 = new MessageEmbed()
          
            .setTitle('📖Comandos de NetCat📖:')
            .addField('Comandos de diversión:', 'nc/corrida\nnc/f-por\nnc/f\nnc/furros\nnc/no-corrida\nnc/no-furros\nnc/otro\nnc/paja\nnc/sí-corrida\nnc/sí-furros\nnc/tragar')
            .setColor('ff00d9')
            .setTimestamp()
            .setFooter({text:`• Bot creado por DragonCat#1063  | Pedido por ${message.author.tag}`,iconURL: message.author.displayAvatarURL({format: "png"})})
          
            const embed4 = new MessageEmbed()
          
            .setTitle('📖Comandos de NetCat📖:')
            .addField('Comandos de Gifs:', 'nc/gif-f\nnc/gif-monokuma\nnc/gif-netcat-avergonzada\nnc/gif-netcat-bailando\nnc/gif-netcat-baile\nnc/gif-netcat-duele-orejas\nnc/gif-netcat-enfado\nnc/gif-netcat-guitarra\nnc/gif-netcat-manzana\nnc/gif-netcat-muerde-dedo\nnc/gif-netcat-mueve-cola\nnc/gif-netcat-nya\nnc/gif-netcat-sad\nnc/gif-netcat-sonrojada\nnc/gif-netcat-sonroje')
            .setColor('ff00d9')
            .setTimestamp()
            .setFooter({text:`• Bot creado por DragonCat#1063  | Pedido por ${message.author.tag}`,iconURL: message.author.displayAvatarURL({format: "png"})})
          
            const embed5 = new MessageEmbed()
          
            .setTitle('📖Comandos de NetCat📖:')
            .addField('Comandos de NSFW:', 'nc/anal\nnc/boobjob\nnc/fuck\nnc/handjob\nnc/hentai\nnc/suck\nnc/yaoi')
            .setColor('ff00d9')
            .setTimestamp()
            .setFooter({text:`• Bot creado por DragonCat#1063  | Pedido por ${message.author.tag}`,iconURL: message.author.displayAvatarURL({format: "png"})})
          
            const embed6 = new MessageEmbed()
          
            .setTitle('📖Comandos de NetCat📖:')
            .addField('Comandos de reacción:', 'nc/angry\nnc/blush\nnc/bored\nnc/cure\nnc/eat\nnc/feed\nnc/hug\nnc/idoly\nnc/kill\nnc/kiss\nnc/lick\nnc/pat\nnc/punch\nnc/run\nnc/scared\nnc/sonroje\nnc/spank\nnc/ship')
            .setColor('ff00d9')
            .setTimestamp()
            .setFooter({text:`• Bot creado por DragonCat#1063  | Pedido por ${message.author.tag}`,iconURL: message.author.displayAvatarURL({format: "png"})})
          
            const embed7 = new MessageEmbed()
          
            .setTitle('📖Comandos de NetCat📖:')
            .addField('Comandos útiles:', 'nc/avatar\nnc/bomba-atómica\nnc/clear\nnc/md -TEMPORALMENTE FUERA DE SERVICIO.\nnc/say\nnc/serverinfo\nnc/ping\nnc/afk\nnc/bugreport\nnc/suggest\nnc/calculadora')
            .setColor('ff00d9')
            .setTimestamp()
            .setFooter({text:`• Bot creado por DragonCat#1063  | Pedido por ${message.author.tag}`,iconURL: message.author.displayAvatarURL({format: "png"})})
          
            const embed8 = new MessageEmbed()
          
            .setTitle('📖Comandos de NetCat📖:')
            .addField('Comandos para hacer chuletas de exámenes de historia:', 'nc/consecuencias-de-la-conquista-de-américa\nnc/descubrimiento-y-conquista-de-américa\nnc/historia-imperio-inca\nnc/historia-nazi\nnc/resumen-consecuencias-de-la-conquista-de-américa\nnc/resumen-descubrimiento-y-conquista-de-américa')
            .setColor('ff00d9')
            .setTimestamp()
            .setFooter({text:`• Bot creado por DragonCat#1063  | Pedido por ${message.author.tag}`,iconURL: message.author.displayAvatarURL({format: "png"})})
          
            const embed9 = new MessageEmbed()
          
            .setTitle('📖Comandos de NetCat📖:')
            .addField('Comandos de música:', '🔴Módulo fuera de servicio temporalmente.🔴')
            .setColor('ff00d9')
            .setTimestamp()
            .setFooter({text:`• Bot creado por DragonCat#1063  | Pedido por ${message.author.tag}`,iconURL: message.author.displayAvatarURL({format: "png"})})
          
            const embed10 = new MessageEmbed()
          
            .setTitle('📖Comandos de NetCat📖:')
            .addField('Comandos de configuración:', 'nc/delete-channel\nnc/setprefix\nnc/create-channel-lock\nnc/create-channel\nnc/create-privatechannel-lock\nnc/create-privatechannel')
            .setColor('ff00d9')
            .setTimestamp()
            .setFooter({text:`• Bot creado por DragonCat#1063  | Pedido por ${message.author.tag}`,iconURL: message.author.displayAvatarURL({format: "png"})})
          
            const embed11 = new MessageEmbed()
          
            .setTitle('📖Comandos de NetCat📖:')
            .addField('Comandos de economía:', 'nc/add-money-bank\nnc/add-money\nnc/bal\nnc/buy\nnc/dep\nnc/mochila\nnc/remove-money-bank\nnc/remove-money\nnc/rob\nnc/shop\nnc/with\nnc/work')
            .setColor('ff00d9')
            .setTimestamp()
            .setFooter({text:`• Bot creado por DragonCat#1063  | Pedido por ${message.author.tag}`,iconURL: message.author.displayAvatarURL({format: "png"})})
          
            const embed12 = new MessageEmbed()
          
            .setTitle('📖Comandos de NetCat📖:')
            .addField('Comandos de moderación:', 'nc/ban\nnc/kick\nnc/mute\nnc/muterol\nnc/send -TEMPORALMENTE FUERA DE SERVICIO.\nnc/temp-mute\nnc/unmute\nnc/unwarn\nnc/warn\nnc/warns')
            .setColor('ff00d9')
            .setTimestamp()
            .setFooter({text:`• Bot creado por DragonCat#1063  | Pedido por ${message.author.tag}`,iconURL: message.author.displayAvatarURL({format: "png"})})
          
            const embed13 = new MessageEmbed()
          
            .setTitle('📖Comandos de NetCat📖:')
            .addField('Comandos de juegos:', 'nc/name-personaje\nnc/name-personaje-hombre\nnc/name-personaje-mujer\nnc/roll')
            .setColor('ff00d9')
            .setTimestamp()
            .setFooter({text:`• Bot creado por DragonCat#1063  | Pedido por ${message.author.tag}`,iconURL: message.author.displayAvatarURL({format: "png"})})
          
            const embed14 = new MessageEmbed()
          
            .setTitle('📖Comandos de NetCat📖:')
            .addField('Comandos links NetCat:', 'nc/invite\nnc/support\nnc/netcathostserver\nnc/panelnetcathost\nnc/webnetcathost')
            .setColor('ff00d9')
            .setTimestamp()
            .setFooter({text:`• Bot creado por DragonCat#1063  | Pedido por ${message.author.tag}`,iconURL: message.author.displayAvatarURL({format: "png"})})
          
            const embed15 = new MessageEmbed()
          
            .setTitle('📖Comandos de NetCat📖:')
            .addField('Comandos para miembros VIP:', 'Disponible cuando tengas el objeto `miembro VIP`. Cómpralo en la tienda de NetCat si deseas tener acceso a los comandos VIP de NetCat.\nPara acceder a la tienda de NetCat, use el comando `nc/shop`')
            .setColor('ff00d9')
            .setTimestamp()
            .setFooter({text:`• Bot creado por DragonCat#1063  | Pedido por ${message.author.tag}`,iconURL: message.author.displayAvatarURL({format: "png"})})
          
            const embedprincipal = new MessageEmbed()
          
            .setTitle("📖Comandos de NetCat📖: Menú de módulos")
            .setDescription("Para ver los comandos de cualquier módulo seleccione el módulo que desee ver en la barra de menú situada abajo de este mensaje.")
            .addField('__📜Listado de módulos📜:__', ' -Comandos de conversación 🟢\n-Comandos de chistes 🟢\n-Comandos de diversión 🟢\n-Comandos de Gifs 🟢\n-Comandos de NSFW 🟢\n-Comandos de reacción 🟢\n-Comandos útiles 🟢\n-Comandos para hacer chuletas de exámenes de historia 🟢\n-Comandos de música 🔴\n-Comandos de configuración ​🟢\n-Comandos de economía 🟢\n-Comandos de moderación 🟢\n-Comandos de juegos 🟢\n-Comandos links NetCat 🟢\n-Comandos para miembros VIP 🟡')
            .addField('Links de NetCat:', '[ link de invitación](https://discord.com/oauth2/authorize?client_id=900470345809674260&scope=bot&permissions=8) y [servidor oficial de NetCat](https://discord.gg/3Tfwk8QdmJ )')
            .setFooter({text:'🟢 = Módulo operativo y desbloqueado.\n  🟡 = Módulo operativo, pero bloqueado hasta que seas miembro VIP.\n  🔴 = Módulo fuera de servicio temporalmente.'})
            .setColor('ff00d9')
          
            const row = new Discord.MessageActionRow()
			.addComponents(
				new Discord.MessageSelectMenu()
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
							label: 'Menú principal',
							description: 'Regresa al menú principal',
							value: '16',
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
                    menu.editReply({embeds: [embedprincipal]});
                }
            })
         }

         if(objetovip === 1){
            const embed = new MessageEmbed()

            .setTitle('📖Comandos de NetCat📖:')
            .addField('Comandos de conversación:', 'nc/hola\nnc/bien-y-tu\nnc/denada\nnc/tengo-sueño\nnc/me-voy\nnc/buenas-noches\nnc/buenos-días\nnc/cómo-dormiste')
            .setColor('ff00d9')
            .setTimestamp()
            .setFooter({text:`• Bot creado por DragonCat#1063  | Pedido por ${message.author.tag}`,iconURL: message.author.displayAvatarURL({format: "png"})})
          
            const embed2 = new MessageEmbed()
          
            .setTitle('📖Comandos de NetCat📖:')
            .addField('Comandos de chistes:', 'nc/chiste-0-positivo\nnc/chiste-córdoba-y-la-luna\nnc/chiste-el-de-la-playa\nnc/chiste-el-vasco-y-la-motosierra\nnc/chiste-general-y-soldado\nnc/chiste-rosa')
            .setColor('ff00d9')
            .setTimestamp()
            .setFooter({text:`• Bot creado por DragonCat#1063  | Pedido por ${message.author.tag}`,iconURL: message.author.displayAvatarURL({format: "png"})})
          
            const embed3 = new MessageEmbed()
          
            .setTitle('📖Comandos de NetCat📖:')
            .addField('Comandos de diversión:', 'nc/corrida\nnc/f-por\nnc/f\nnc/furros\nnc/no-corrida\nnc/no-furros\nnc/otro\nnc/paja\nnc/sí-corrida\nnc/sí-furros\nnc/tragar')
            .setColor('ff00d9')
            .setTimestamp()
            .setFooter({text:`• Bot creado por DragonCat#1063  | Pedido por ${message.author.tag}`,iconURL: message.author.displayAvatarURL({format: "png"})})
          
            const embed4 = new MessageEmbed()
          
            .setTitle('📖Comandos de NetCat📖:')
            .addField('Comandos de Gifs:', 'nc/gif-f\nnc/gif-monokuma\nnc/gif-netcat-avergonzada\nnc/gif-netcat-bailando\nnc/gif-netcat-baile\nnc/gif-netcat-duele-orejas\nnc/gif-netcat-enfado\nnc/gif-netcat-guitarra\nnc/gif-netcat-manzana\nnc/gif-netcat-muerde-dedo\nnc/gif-netcat-mueve-cola\nnc/gif-netcat-nya\nnc/gif-netcat-sad\nnc/gif-netcat-sonrojada\nnc/gif-netcat-sonroje')
            .setColor('ff00d9')
            .setTimestamp()
            .setFooter({text:`• Bot creado por DragonCat#1063  | Pedido por ${message.author.tag}`,iconURL: message.author.displayAvatarURL({format: "png"})})
          
            const embed5 = new MessageEmbed()
          
            .setTitle('📖Comandos de NetCat📖:')
            .addField('Comandos de NSFW:', 'nc/anal\nnc/boobjob\nnc/fuck\nnc/handjob\nnc/hentai\nnc/suck\nnc/yaoi')
            .setColor('ff00d9')
            .setTimestamp()
            .setFooter({text:`• Bot creado por DragonCat#1063  | Pedido por ${message.author.tag}`,iconURL: message.author.displayAvatarURL({format: "png"})})
          
            const embed6 = new MessageEmbed()
          
            .setTitle('📖Comandos de NetCat📖:')
            .addField('Comandos de reacción:', 'nc/angry\nnc/blush\nnc/bored\nnc/cure\nnc/eat\nnc/feed\nnc/hug\nnc/idoly\nnc/kill\nnc/kiss\nnc/lick\nnc/pat\nnc/punch\nnc/run\nnc/scared\nnc/sonroje\nnc/spank\nnc/ship')
            .setColor('ff00d9')
            .setTimestamp()
            .setFooter({text:`• Bot creado por DragonCat#1063  | Pedido por ${message.author.tag}`,iconURL: message.author.displayAvatarURL({format: "png"})})
          
            const embed7 = new MessageEmbed()
          
            .setTitle('📖Comandos de NetCat📖:')
            .addField('Comandos útiles:', 'nc/avatar\nnc/bomba-atómica\nnc/clear\nnc/md -TEMPORALMENTE FUERA DE SERVICIO.\nnc/say\nnc/serverinfo\nnc/exit -TEMPORALMENTE FUERA DE SERVICIO.\nnc/afk\nnc/bugreport\nnc/suggest')
            .setColor('ff00d9')
            .setTimestamp()
            .setFooter({text:`• Bot creado por DragonCat#1063  | Pedido por ${message.author.tag}`,iconURL: message.author.displayAvatarURL({format: "png"})})
          
            const embed8 = new MessageEmbed()
          
            .setTitle('📖Comandos de NetCat📖:')
            .addField('Comandos para hacer chuletas de exámenes de historia:', 'nc/consecuencias-de-la-conquista-de-américa\nnc/descubrimiento-y-conquista-de-américa\nnc/historia-imperio-inca\nnc/historia-nazi\nnc/resumen-consecuencias-de-la-conquista-de-américa\nnc/resumen-descubrimiento-y-conquista-de-américa')
            .setColor('ff00d9')
            .setTimestamp()
            .setFooter({text:`• Bot creado por DragonCat#1063  | Pedido por ${message.author.tag}`,iconURL: message.author.displayAvatarURL({format: "png"})})
          
            const embed9 = new MessageEmbed()
          
            .setTitle('📖Comandos de NetCat📖:')
            .addField('Comandos de música:', '🔴Módulo fuera de servicio temporalmente.🔴')
            .setColor('ff00d9')
            .setTimestamp()
            .setFooter({text:`• Bot creado por DragonCat#1063  | Pedido por ${message.author.tag}`,iconURL: message.author.displayAvatarURL({format: "png"})})
          
            const embed10 = new MessageEmbed()
          
            .setTitle('📖Comandos de NetCat📖:')
            .addField('Comandos de configuración:', 'nc/delete-channel\nnc/setprefix\nnc/create-channel-lock\nnc/create-channel\nnc/create-privatechannel-lock\nnc/create-privatechannel')
            .setColor('ff00d9')
            .setTimestamp()
            .setFooter({text:`• Bot creado por DragonCat#1063  | Pedido por ${message.author.tag}`,iconURL: message.author.displayAvatarURL({format: "png"})})
          
            const embed11 = new MessageEmbed()
          
            .setTitle('📖Comandos de NetCat📖:')
            .addField('Comandos de economía:', 'nc/add-money-bank\nnc/add-money\nnc/bal\nnc/buy\nnc/dep\nnc/mochila\nnc/remove-money-bank\nnc/remove-money\nnc/rob\nnc/shop\nnc/with\nnc/work')
            .setColor('ff00d9')
            .setTimestamp()
            .setFooter({text:`• Bot creado por DragonCat#1063  | Pedido por ${message.author.tag}`,iconURL: message.author.displayAvatarURL({format: "png"})})
          
            const embed12 = new MessageEmbed()
          
            .setTitle('📖Comandos de NetCat📖:')
            .addField('Comandos de moderación:', 'nc/ban\nnc/kick\nnc/mute\nnc/muterol\nnc/send -TEMPORALMENTE FUERA DE SERVICIO.\nnc/temp-mute\nnc/unmute\nnc/unwarn\nnc/warn\nnc/warns')
            .setColor('ff00d9')
            .setTimestamp()
            .setFooter({text:`• Bot creado por DragonCat#1063  | Pedido por ${message.author.tag}`,iconURL: message.author.displayAvatarURL({format: "png"})})
          
            const embed13 = new MessageEmbed()
          
            .setTitle('📖Comandos de NetCat📖:')
            .addField('Comandos de juegos:', 'nc/name-personaje\nnc/name-personaje-hombre\nnc/name-personaje-mujer\nnc/roll')
            .setColor('ff00d9')
            .setTimestamp()
            .setFooter({text:`• Bot creado por DragonCat#1063  | Pedido por ${message.author.tag}`,iconURL: message.author.displayAvatarURL({format: "png"})})
          
            const embed14 = new MessageEmbed()
          
            .setTitle('📖Comandos de NetCat📖:')
            .addField('Comandos links NetCat:', 'nc/invite\nnc/support\nnc/netcathostserver\nnc/panelnetcathost\nnc/webnetcathost')
            .setColor('ff00d9')
            .setTimestamp()
            .setFooter({text:`• Bot creado por DragonCat#1063  | Pedido por ${message.author.tag}`,iconURL: message.author.displayAvatarURL({format: "png"})})
          
            const embed15 = new MessageEmbed()
          
            .setTitle('📖Comandos de NetCat📖:')
            .addField('Comandos para miembros VIP:', 'nc/fondos')
            .setColor('ff00d9')
            .setTimestamp()
            .setFooter({text:`• Bot creado por DragonCat#1063  | Pedido por ${message.author.tag}`,iconURL: message.author.displayAvatarURL({format: "png"})})
          
            const embedprincipal = new MessageEmbed()
          
            .setTitle("📖Comandos de NetCat📖: Menú de módulos")
            .setDescription("Para ver los comandos de cualquier módulo seleccione el módulo que desee ver en la barra de menú situada abajo de este mensaje.")
            .addField('__📜Listado de módulos📜:__', ' -Comandos de conversación 🟢\n-Comandos de chistes 🟢\n-Comandos de diversión 🟢\n-Comandos de Gifs 🟢\n-Comandos de NSFW 🟢\n-Comandos de reacción 🟢\n-Comandos útiles 🟢\n-Comandos para hacer chuletas de exámenes de historia 🟢\n-Comandos de música 🔴\n-Comandos de configuración ​🟢\n-Comandos de economía 🟢\n-Comandos de moderación 🟢\n-Comandos de juegos 🟢\n-Comandos links NetCat 🟢\n-Comandos para miembros VIP 🟢')
            .addField('Links de NetCat:', '[ link de invitación](https://discord.com/oauth2/authorize?client_id=900470345809674260&scope=bot&permissions=8) y [servidor oficial de NetCat](https://discord.gg/3Tfwk8QdmJ )')
            .setFooter({text:'🟢 = Módulo operativo y desbloqueado.\n  🟡 = Módulo operativo, pero bloqueado hasta que seas miembro VIP.\n  🔴 = Módulo fuera de servicio temporalmente.'})
            .setColor('ff00d9')
          
            const row = new Discord.MessageActionRow()
			.addComponents(
				new Discord.MessageSelectMenu()
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
							label: 'Menú principal',
							description: 'Regresa al menú principal',
							value: '16',
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
                    menu.editReply({embeds: [embedprincipal]});
                }
            })
         }

  


}

}
