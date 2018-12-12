const {goodWinston} = require('hapi-good-winston');
const logger = require('./logger');

const good = {
    plugin: require('good'),
    options: {
        ops: {
            interval: 1000,
        },
        reporters: {
            winston: [goodWinston(logger)],
        },
    }
};

module.exports = async (server) => {
    await server.register(good);
};
