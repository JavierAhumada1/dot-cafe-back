const mongoose = require("mongoose")


const schema = new mongoose.Schema({
    name: {type: String, require: true},
    photo: {type: String, require: true},
    stock: {type: Number, require: true},
    price: {type: Number, require: true},
    description: {type: String, require: true}
})

const CoffeMachines = mongoose.model(
    'CoffeMachines',
    schema
)

module.exports = CoffeMachines;