const Discord = require("discord.js");
var colors = require('colors');
var ncomando = "calculadora";
module.exports={
    name:`${ncomando}`,
    aliases: ["calc"],
    category: "utility",
    usage: "calc",
    run: async(client, message, args) =>{
        const simplydjs = require('simply-djs');
        simplydjs.calculator(message, {
            embedColor: "RED"
        })
    }

}
console.log(`Comando: ${ncomando}: OK`.green)