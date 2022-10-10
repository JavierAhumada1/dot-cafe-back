const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: {type: String, required: true, min: 4,},
    email: { type: String, required: true},
})

const Subscribers = mongoose.model(
    'Subscribers',
    schema
)

module.exports = Subscribers