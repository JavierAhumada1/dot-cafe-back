const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    brand: { type: String },
    origin: { type: String },
    photo: { type: String },
    pricePerCup: { type: Number },
    pricePerMug: { type: Number },
    size: { type: String },
    type: { type: String },
    description: { type: String },
})

const COFFEEDRINKMODEL = mongoose.model(
    'coffeeForDrink',
    schema
)

module.exports = COFFEEDRINKMODEL