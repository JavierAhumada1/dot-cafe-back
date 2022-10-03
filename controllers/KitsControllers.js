const Kits = require('../models/Kits')

const KitsController = {
    create: async(req, res) => {
        try{
            let kits = await new Kits(req.body).save()
            res.status(201).json({
                message: 'Kits de cafe',
                success: true,
                kits
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
        let kits
        
        try{
            kits = await Kits.find()
            if(kits.length > 0) {
                res.status(200).json({
                    message: "Kits de cafe",
                    kits,
                    success: true
                })
            }else{
                res.status(404).json({
                    message: "No hay kits",
                    kits,
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

module.exports = KitsController