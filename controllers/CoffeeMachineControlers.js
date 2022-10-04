const CoffeeMachines = require('../models/CoffeeMachines')

const coffeeMachine = {
    create: async(req, res) => {
        try{
            let cofMachine = await new CoffeeMachines(req.body).save()
            res.status(201).json({
                message: 'Maquinas de cafe',
                success: true,
                cofMachine
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
        try{
            let cofMachine = await CoffeeMachines.find()
            if(cofMachine.length > 0) {
                res.status(200).json({
                    message: "Maquinas de cafe",
                    cofMachine,
                    success: true
                })
            }else{
                res.status(404).json({
                    message: "No hay maquinas de cafe",
                    cofMachine,
                    success: false
                })
            }
        }catch(error){
            console.log(error)
            res.status(400).json({
                message: 'No se encontraron datos',
                success: false
            })
        }
    }
}

module.exports = coffeeMachine