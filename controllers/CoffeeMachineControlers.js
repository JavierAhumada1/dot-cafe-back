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
        let query = {}
        if (req.query.type) {
            query.type = req.query.type
        }
        try{
            let cofMachine = await CoffeeMachines.find(query)
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
    },
    
    readByCamp: async(req, res) => {
        let all

        try {
            all = await CoffeeMachines.find()
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
    readOne: async (req, res) => {
        const { id } = req.params
        try{
            let cofMachine = await CoffeeMachines.findOne({ _id: id })
            if(cofMachine) {
                res.status(200).json({
                    message: 'Maquina encontrada',
                    response: cofMachine,
                    success: true
                })
            } else {
                res.status(404).json({
                    message: 'Maquina no encontrada',
                    success: false
                })
            }
        } catch (error) {
            console.log(error)
            res.status(400).json({
                message: 'Error',
                success: false
            })
        }
    },
}

module.exports = coffeeMachine