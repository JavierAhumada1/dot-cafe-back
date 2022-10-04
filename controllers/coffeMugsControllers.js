const { query } = require('express')
const CoffeMug = require('../models/coffeMug')

const coffeMugController = {
    create:async (req, res) => {
        try {
            let mugs = await new CoffeMug(req.body).save()

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
                allMugs = await CoffeMug.find({brand: new RegExp("^" + req.query.mugName.toLowerCase(), "i") })
            } else {
                allMugs = await CoffeMug.find()
            }
            res.status(200).json({
                message: "Coffe Mugs Founds",
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
            let mugForSale = await CoffeMug.findOne({ _id: id})
            if(mugForSale) {
                await CoffeMug.findByIdAndUpdate(id, stock)
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
    }
}

module.exports = coffeMugController
