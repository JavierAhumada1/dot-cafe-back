const mongoose = require("mongoose")

const schema = new mongoose.Schema({
  name: {type: String, require: true},
  photo: {type: String, require: true},
  origin: {type: String, require: true},
  presentation: {type : String, require: true},
  type: {type : String, require: true},
  weight: {type: Number, require: true},
  roastingLevels: {type:String, require: true},
  stock: {type:Number, require: true},
  price: {type:Number, require: true},

})

const CoffeeByKilogram = mongoose.model(
    'coffeeByKilogram',
    schema
)

module.exports = CoffeeByKilogram;