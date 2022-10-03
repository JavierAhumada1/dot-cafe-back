const mongoose = require('mongoose')


const schema = new mongoose.Schema({
    user: {type: mongoose.Types.ObjectId, ref:'users', required: true},
    tel: { type: Number },
    address: { type: String },
    zipCode: { type: String },
    city: { type: String },
    items: [{ type: String }],
    discount: { type: Number },
    invoiced: { type: Boolean },
    shipped: { type: Boolean },
    received : { type: Boolean },
    pay : { type: Boolean },
})

const BUYONSITEMODEL = mongoose.model(
    'myCart',
    schema

)
module.exports = BUYONSITEMODEL