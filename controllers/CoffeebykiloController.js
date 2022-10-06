const CoffeeByKilogram = require('../models/CoffeeByKilogram')

const ByKilogram = {
    create: async(req, res) => {
        try{
            let coByKi = await new CoffeeByKilogram(req.body).save()
            res.status(201).json({
                message: 'cafe en bolsa creado',
                success: true,
                coByKi
            })
        }catch(error){
            console.log(error)
            res.status(400).json({
                message: 'Error',
                success: false
            })
        }
    },

    read: async(req, res) => {
        let query = {}
        if (req.query.weight) {
            query.weight = req.query.weight
        }
        if (req.query.origin) {
            query.origin = req.query.origin
        }
        try{
            let coffeeByKi = await CoffeeByKilogram.find(query)
            res.status(200).json({
                message: "Cafe en sobres",
                coffeeByKi,
                success: true
            })
        }catch(error){
            console.log(error)
            res.status(400).json({
                message: 'No se encontraron datos',
                success: false
            })
        }
    }
}

module.exports = ByKilogram