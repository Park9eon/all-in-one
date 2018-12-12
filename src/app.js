'use strict';

const Hapi = require('hapi');
const {info, error, event} = require('./logger');
const routes = require('./routes');

const server = Hapi.server({
    host: process.env.HOST,
    port: process.env.PORT
});

const init = async () => {
    routes(server);
    event(server);
    try {
        await server.start();
    } catch (e) {
        error(e);
        process.exit(1);
    }

    info(`Server running at : ${server.info.port}`);
};

init();
