const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    user: {type: mongoose.Types.ObjectId, ref:'users', required: true},
    products: [{
            item: {type: String},
            name: {type: String},
            quantity: {type: Number},
            photo: {type: String},
            price: {type: Number},
            totalPrice: {type: Number}
            }],
    total: {type: Number, required: true},
    payment: {type: Boolean},
    state: {type: String}
})

const ShopOrder = mongoose.model(
    'orders',
    schema
)

module.exports = ShopOrder