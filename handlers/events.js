const {readdirSync} = require('fs');

async function eventHandler(netcat){
    const x = readdirSync('./events')
    .filter((x) => x.endsWith('js'))
    .map(async(x) => {
        const event = require(`../events/${x}`);

        if (event.once) {
            netcat.once(event.name, (...args) => event.execute(netcat, ...args));
        } else {
            netcat.on(event.name, (...args) => event.execute(netcat, ...args));
        }
    });
};
module.exports = eventHandler;