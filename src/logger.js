'use strict';

const {createLogger, format, transports} = require('winston');
const {combine, timestamp, prettyPrint, colorize, printf} = format;

const printWithColor = printf(info => {
    return `${info.timestamp} ${info.level}: ${info.message}`;
});

const logger = createLogger({
    format: combine(
        colorize(),
        timestamp(),
        prettyPrint(),
        printWithColor
    ),
    transports: [new transports.Console()]
});

module.exports = logger;
