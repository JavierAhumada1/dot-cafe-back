const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    name: {type: String, require: true},
    photo: {type: Array, require: true},
    stock: {type: Number, require: true},
    price: {type: Number, require: true},
    description: {type: String, require: true},
    amount: {type: Number, require: true}
})

const Filter = mongoose.model(
    'filters',
    schema
)

module.exports = Filter