'use strict';

const {Schema, model} = require('mongoose');

const schema = new Schema({
    name: String,
    kcal: Number
});

class FoodClass {
}

schema.loadClass(FoodClass);

module.exports = model('Food', schema);
