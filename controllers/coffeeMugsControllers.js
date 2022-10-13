const { query } = require('express')
const CoffeeMug = require('../models/coffeeMug')

const coffeeMugController = {
    create:async (req, res) => {
        try {
            let mugs = await new CoffeeMug(req.body).save()

            res.status(201).json({
                message: 'mugs Has Been Created',
                succes: true,
                response: mugs,
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
        let allMugs
        let query = {}
        if (req.query.mugName) {
            query.mugName = req.query.mugName
        }
        try {
            if (query.mugName) {
                allMugs = await CoffeeMug.find({brand: new RegExp("^" + req.query.mugName.toLowerCase(), "i") })
            } else {
                allMugs = await CoffeeMug.find()
            }
            res.status(200).json({
                message: "Coffee Mugs Founds",
                response: allMugs,
                success: true
            })
        } catch (error) {
            console.log(err)
            res.status(500).json()
        }
    },

    updateAfterBuy : async (req, res) =>{
        const {id} = req.params
        const stock = req.body

        try {
            let mugForSale = await CoffeeMug.findOne({ _id: id})
            if(mugForSale) {
                await CoffeeMug.findByIdAndUpdate(id, stock)
                res.status(200).json({
                    message: 'Stock has been update',
                    success: true
                })
            } else {
                res.status(400).json({
                    message: 'Missing Data Error, please review your update request',
                    success: false
                })
            }

        } catch (error) {
            console.log(error)
            res.status(400).json({
                message: error.message,
                succes: false
            })
        }
    },
    readByCamp: async(req, res) => {
        let all

        try {
            all = await CoffeeMug.find()
            let newData = []

            all.map(item => newData.push({
                name: item.name,
                photo: item.photo,
                _id: item._id,
                price: item.price,
                description: item.description,
            }))
            if(all.length > 0){
                res.status(200).json({
                    message: 'ciertos campos',
                    response: newData,
                    success: true
                })
            }
        } catch (error) {
            console.log(error)
        }
    },
    readOne: async (req, res) => {
        const { id } = req.params
        try{
            let mugs = await CoffeeMug.findOne ({ _id: id })
            if(mugs) {
                res.status(200).json({
                    message: 'Taza encontrada',
                    response: mugs,
                    success: true
                })
            }else {
                res.status(404).json({
                    message: 'Taza no encontrada',
                    succes: false
                })
            }
        } catch (error){
            console.log(error)
            res.status(400).json({
                message: ' Error',
                succes: false
            })
        }
    }
}

module.exports = coffeeMugController
