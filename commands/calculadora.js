module.exports={
    name:"calculadora",
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