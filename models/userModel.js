const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    firstName: { type: String,  required: true },
    lastName: { type: String,  required: true },
    photo: { type: String,  required: true },
    email: { type: String,  required: true },
    password:[ { type: String,  required: true }],
    tel: { type: Number,  required: true },
    address: { type: String,  required: true },
    zipCode: { type: String,  required: true },
    city: { type: String,  required: true },
    giftCard: { type: Array,  },
    from: [{ type: String,  required: true }],
    code: { type: String,  required: true },
    role: { type: String,  required: true },
    logged: { type: Boolean,  required: true },
    verified: { type: Boolean,  required: true },
})

const USERMODEL = mongoose.model(
    'users',
    schema
)

module.exports = USERMODEL