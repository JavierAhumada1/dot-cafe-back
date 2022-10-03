const Filters = require('../models/Filters.js')

const FiltersCoffe = {
    create: async(req, res) => {
        try{
            let Filter = await new Filters(req.body).save()
            res.status(201).json({
                message: 'Filtros de cafe',
                success: true,
                Filter
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
        let Filter
        
        try{
            Filter = await Filters.find()
            if(Filter.length > 0) {
                res.status(200).json({
                    message: "Filtros de cafe",
                    Filter,
                    success: true
                })
            }else{
                res.status(404).json({
                    message: "No hay filtros de cafe",
                    Filter,
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

module.exports = FiltersCoffe