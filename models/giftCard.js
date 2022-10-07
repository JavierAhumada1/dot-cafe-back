const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    price: { type: Number },
    stock: { type: Number },
    photo: { type: String },
    name: {type: String}
})

const GIFTCARDMODEL = mongoose.model(
    'gifCards',
    schema
)

module.exports = GIFTCARDMODEL