'use strict';

const Hapi = require('hapi');
const {info, error} = require('./logger');
const plugins = require('./plugins');
const routes = require('./routes');
const apollo = require('./apollo');

const server = Hapi.server({
    host: process.env.HOST,
    port: process.env.PORT
});

server.use = (async function (use) {
    await use(server);
}).bind(server);

const init = async () => {
    try {
        await server.use(plugins);
        await server.use(routes);
        await server.use(apollo);
        await server.start();
    } catch (e) {
        error(e);
        process.exit(1);
    }

    info(`Server running at : ${server.info.port}`);
};

init();
