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
        for (let x in req.query) {
            let regexp = new RegExp(req.query[x].trim())
            query[x] = {$regex: regexp, $options:'i'}
        }
        try {
            let allCoffees = await CoffeeForDrink.find(query)
            if (allCoffees) {
                res.status(200).json({
                    message: "Coffees for Drink Founds",
                    response: allCoffees,
                    success: true
                })
            } else {
                res.status(404).json({
                    message: 'Any Coffees Found',
                    success: false
                })
            }
            
        } catch (error) {
            console.log(err)
            res.status(500).json()
        }
    },
    
    updateAfterBuy : async (req, res) =>{ 
    }
}

module.exports = coffeeForDrinkController
