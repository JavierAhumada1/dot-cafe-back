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
        try{
            let allFilters = await Filters.find()
            if (allFilters.length > 0) {
                res.status(200).json({
                    message: "Filtros de cafe",
                    allFilters,
                    success: true
                })
            }else{
                res.status(404).json({
                    message: "No hay filtros de cafe",
                    allFilters,
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