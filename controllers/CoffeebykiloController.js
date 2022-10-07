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
    },
    readByCamp: async(req, res) => {
        let all

        try {
            all = await CoffeeByKilogram.find()
            let newData = []

            all.map(item => newData.push({
                name: item.name,
                photo: item.photo,
                _id: item._id,
                price: item.price
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

    readByName: async(req, res) => {
        let all

        try {
            all = await CoffeeByKilogram.find()
            let newData = []

            all.map(item => newData.push({
                name: item.name
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
    }
}

module.exports = ByKilogram