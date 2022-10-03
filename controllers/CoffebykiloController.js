const CoffeByKilogram = require('../models/CoffeeByKilogram')

const ByKilogram = {
    create: async(req, res) => {
        try{
            let coByKi = await new CoffeByKilogram(req.body).save()
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
    }
}