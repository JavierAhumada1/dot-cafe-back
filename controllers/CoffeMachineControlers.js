const CoffeMachines = require('../models/CoffeeMachines')

const coffeMachine = {
    create: async(req, res) => {
        try{
            let cofMachine = await new CoffeMachines(req.body).save()
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
        let cofMachine
        
        try{
            cofMachine = await CoffeMachines.find()
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

module.exports = coffeMachine