'use strict';

const {Schema, model} = require('mongoose');

// 음식 성분
const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    unit: {
        type: String,
        required: true
    }
});

class FoodIngredientClass {
}

schema.loadClass(FoodIngredientClass);

module.exports = model('FoodIngredient', schema);
