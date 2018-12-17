'use strict';

const {Schema, Schema: {ObjectId}, model} = require('mongoose');

// 음식
const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    code: {
        type: Number,
        required: true
    },
    unit: {
        type: String,
        required: true
    }, // ex) 개
    kcal: {
        type: String,
        required: true
    },
    portionUnit: String, // ex) 접시
    portionKcal: Number,
    recipe: [String],
    tags: [String],
    categories: [ObjectId],
    ingredients: [{
        amount: {
            type: Number
        },
        ingredient: {
            type: ObjectId,
            ref: 'FoodIngredient'
        }
    }]
});

class FoodClass {
}

schema.loadClass(FoodClass);

module.exports = model('Food', schema);
