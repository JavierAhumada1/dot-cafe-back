const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: { type: String },
    description: { type: String },
    photo: { type: String },
    price: { type: Number },
    size: { type: String },
    stock: { type: Number },
})

const COFFEEMUGMODEL = mongoose.model(
    'coffeeMug',
    schema
)

module.exports = COFFEEMUGMODEL