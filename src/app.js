'use strict';

const Hapi = require('hapi');
const {info, error} = require('./logger');
const plugins = require('./plugins');
const routes = require('./routes');

const server = Hapi.server({
    host: process.env.HOST,
    port: process.env.PORT
});

const init = async () => {
    routes(server);
    try {
        await plugins(server);
        await server.start();
    } catch (e) {
        error(e);
        process.exit(1);
    }

    info(`Server running at : ${server.info.port}`);
};

init();
