const { Collection } = require('discord.js');
const { readdirSync } = require("fs");

async function commandHandler(netcat) {
  let slash = []

  netcat.commands = new Collection();

    const commandFolders = readdirSync("./slashcommands");

    for (const folder of commandFolders) {
      const commandFiles = readdirSync(`./slashcommands/${folder}`)
        .filter((file) => file.endsWith(".js"));

      for (const file of commandFiles) {
        const command = require(`../slashcommands/${folder}/${file}`);

         if (command.data.toJSON().name){
            netcat.commands.set(command.data.toJSON().name, { 
            data: command.data.toJSON(),
            execute: command.execute 
        }, command);
        slash.push(command.data.toJSON())
        } else continue;
      };
    };
    netcat.on("ready", async() => {
      await netcat.application.commands.set(slash)
    })
  }

  module.exports = commandHandler;