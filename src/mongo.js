'use strict';

const mongoose = require('mongoose');
const {error, info} = require('./logger');

module.exports = async () => {
    mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true});
    mongoose.connection.on('error', error);
    mongoose.connection.once('open', () => info('Mongo connected!'));
};
