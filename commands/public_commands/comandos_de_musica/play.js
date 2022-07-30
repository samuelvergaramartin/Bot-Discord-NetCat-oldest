const discord = require('discord.js');
const db = require('megadb');
const systemstatus = new db.crearDB('systemstatus');
const estadosistemadb = require('../../../mega_databases/systemstatus.json');
var estadosistema = estadosistemadb.mode;
const estadomodulosdb = require('../../../mega_databases/modulestatusdb.json')
const estadocomandosdb = require('../../../mega_databases/commandstatusdb.json');
const color = require('colors');
const listallcommands = require('../../../sistema/modulos/listado-comandos.json');
const listallmodules = require('../../../sistema/modulos/modulos.json');
var configuracion = listallmodules.modulo3;
var informacion = listallmodules.modulo1;
var moderacion = listallmodules.modulo2;
var musica = listallmodules.modulo4;
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
var ncomando = listallcommands.play;
var estadomodulo = estadomodulosdb.musica;
var estadocomando = estadocomandosdb.play;
var modulodeestecomando = musica;

module.exports = {
    name: `${ncomando}`,
    run: async(client, message, args) => {
        var estadosistema = await systemstatus.obtener("mode");
        const play = require("play-dl");

        const { v4: uuidv4 } = require("uuid");
        const {
            queue,
            agregar,
            musicEmbed,
            queueEmbed,
            nextSong,
          } = require("../../../export/config-music/music-config");
          //-------------------
         /* const {
            createAudioPlayer,
            createAudioResource,
            joinVoiceChannel,
            AudioPlayerStatus,
            getVoiceConnection,
          } = require("@discordjs/voice");*/
          //-----------
          const { createAudioPlayer, createAudioResource , StreamType, demuxProbe, joinVoiceChannel, NoSubscriberBehavior, AudioPlayerStatus, VoiceConnectionStatus, getVoiceConnection } = require('@discordjs/voice')
        async function ejecutarcomandoisOK() {
            //# Canal de voz del usuario
    let vc = message.member.voice.channel;

    //# Comprobaciones
    if (args.length < 1) {
      return message.channel.send("Tienes que indicar el nombre de la cancion");
    }

    if (!vc) {
      return message.channel.send("Tienes que estar en un canal de voz");
    }
    let argumentos = args.join(" ");
    //# Busqueda de video
    let ytInfo = await play.search(args.join(" "));
    //let noplaylist = await play.video_info(args.join(" "));
    //let playlist = await play.playlist_info(args.join(" "), { incomplete: true});
   // let prueba = (await play.playlist_info()).url;
    if(argumentos.is(playlist_info.url)) {
      message.channel.send("ytInfo: undefined");
      message.channel.send(`Lectura anticrash-system\nValor de playlist.title: ${playlist.title}`);
    }
    else {
      message.channel.send("Es un video de youtube!");
      //const videos = await playlist.all_videos()
    
   /* if(true) {
      message.channel.send("**:x: | ERROR:** ```bat\n/home/samuelv/Escritorio/DexterBot/comandos/publicos/musica/play.js:80\n    let stream = await play.stream(ytInfo[0].url);\n                                             ^\n\nTypeError: Cannot read properties of undefined (reading 'url')\n    at ejecutarcomandoisOK (/home/samuelv/Escritorio/DexterBot/comandos/publicos/musica/play.js:80:46)\n    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)\n\nNode.js v18.6.0\n```");
    }*/
    let stream = await play.stream(ytInfo[0].url);
    
    //% Agregar cancion a lista re produccion
    const song = { key: uuidv4(), title: ytInfo[0].title, url: ytInfo[0].url };
    agregar(message.guild.id, song);

    //& Comprobar que no se este reproduciendo musica
    const pvc = getVoiceConnection(message.guild.id);
    if (pvc)
      return message.reply({
        embeds: [
          queueEmbed(ytInfo[0].title, ytInfo[0].url),
        ],
      });

    //# Conexion
    const connection = joinVoiceChannel({
      channelId: vc.id,
      guildId: message.guildId,
      adapterCreator: message.guild.voiceAdapterCreator,
    });

    //% Metadata para saber cancion reproducida
    const resource = createAudioResource(stream.stream, {
      inputType: stream.type,
      metadata: {
        title: ytInfo[0].title,
        key: song.key,
      },
    });

    const player = createAudioPlayer();
    player.play(resource);
    connection.subscribe(player);

    //# Respuesta
    message.reply({
      embeds: [
        musicEmbed(
          ytInfo[0].title,
          ytInfo[0].description,
          ytInfo[0].url,
         // ytInfo[0].thumbnail.url
        ),
      ],
    });

    //# En cuanto se acabe la musica el reproductor se sale
    // console.log(player.state.resource.metadata.key);
    //% oldS = Recaba informacion de la cancion reproducida
    player.on(AudioPlayerStatus.Idle, async (oldS, newS) => {
      if (
        queue.get(message.guild.id).songs.length <= 1 &&
        queue.get(message.guild.id).loop == "false"
      ) {
        connection.destroy();
        queue.delete(guildId);
        return message.channel.send("Sin canciones por reproducir");
      } else {
        return nextSong(
          message.guild.id,
          oldS.resource.metadata.key,
          message,
          player,
          connection,
          "auto"
        );
      }
    });

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