const { query } = require('express')
const CoffeeForDrink = require('../models/coffeeForDrink')

const coffeeForDrinkController = {
    create:async (req, res) => {
        try {
            let coffeeForDrink = await new CoffeeForDrink(req.body).save()

            res.status(201).json({
                message: 'coffee For Drink Has Been Created',
                succes: true,
                response: coffeeForDrink,
                id : coffeeForDrink._id
            })
        } catch (error) {
            console.log(error)
            res.status(400).json({
                message: error.message,
                succes: false
            })
        }
    },

    readAll: async (req, res) => {
        let allCoffees
        let query = {}
        if (req.query.CoffeeForDrink) {
            query.CoffeeForDrink = req.query.CoffeeForDrink
        }
        try {
            if (query.CoffeeForDrink) {
                allCoffees = await CoffeeForDrink.find({brand: new RegExp("^" + req.query.CoffeeForDrink.toLowerCase(), "i") })
            } else {
                allCoffees = await CoffeeForDrink.find()
            }
            res.status(200).json({
                message: "Coffees for Drink Founds",
                response: allCoffees,
                success: true
            })
        } catch (error) {
            console.log(err)
            res.status(500).json()
        }
    },
    
    updateAfterBuy : async (req, res) =>{ 
    }
}

module.exports = coffeeForDrinkController
