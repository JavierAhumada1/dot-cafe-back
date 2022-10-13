const Filters = require('../models/Filters.js')

const FiltersCoffee = {
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
    },
    readByCamp: async(req, res) => {
        let all

        try {
            all = await Filters.find()
            let newData = []

            all.map(item => newData.push({
                name: item.name,
                photo: item.photo,
                _id: item._id,
                price: item.price,
                description: item.description,
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
            let filter = await Filters.findOne({ _id: id })
            if(filter) {
                res.status(200).json({
                    message: 'Filtro encontrad',
                    response: filter,
                    success: true
                })
            } else {
                res.status(404).json({
                    message: 'Filtro no encontrado',
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

module.exports = FiltersCoffee