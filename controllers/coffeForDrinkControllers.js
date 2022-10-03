const { query } = require('express')
const CoffeForDrink = require('../models/coffeForDrink')



const coffeForDrinkController = {
    create:async (req, res) => {

        try {
            let coffeForDrink = await new CoffeForDrink(req.body).save()

            res.status(201).json({
                message: 'coffe For Drink Has Been Created',
                succes: true,
                response: coffeForDrink,
                id : coffeForDrink._id
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

        if (req.query.CoffeForDrink) {
            query.CoffeForDrink = req.query.CoffeForDrink
        }

        try {
            if (query.CoffeForDrink) {
                allCoffees = await CoffeForDrink.find({brand: new RegExp("^" + req.query.CoffeForDrink.toLowerCase(), "i") })
            } else {
                allCoffees = await CoffeForDrink.find()
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

module.exports = coffeForDrinkController
