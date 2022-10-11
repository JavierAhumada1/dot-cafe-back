const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    user: {type: mongoose.Types.ObjectId, ref:'users', required: true},
    products: [{
            item: {type: String, required: true},
            name: {type: String, required: true},
            quantity: {type: Number, required: true},
            photo: {type: String, required: true},
            price: {type: Number, required: true},
            totalPrice: {type: Number, required: true}
            }],
    date: {type: Date, required: true},
    total: {type: Number, required: true},
    payment: {type: Boolean},
    state: {type: String}
})

const ShopOrder = mongoose.model(
    'orders',
    schema
)

module.exports = ShopOrder