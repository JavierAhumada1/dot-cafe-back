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
        try{
            let kits = await Kits.find()
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
    },
    readByCamp: async(req, res) => {
        let all

        try {
            all = await Kits.find()
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
    }
}

module.exports = KitsController