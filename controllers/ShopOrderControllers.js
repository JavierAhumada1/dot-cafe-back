const Order = require('../models/ShopOrder')
const sendMailorder = require('./sendMailOrder')

const shopOrderController = {
    create: async (req, res) => {
        try {
            let newOrder = new Order(req.body)
            newOrder.payment = false
            newOrder.state = "Sin enviar"
            await newOrder.save()
            res.status(201).json({
                message: 'orden creada',
                response: newOrder,
                success: true
            })
        } catch (error) {
            console.log(error)
            res.status(400).json({
                message: 'Error',
                success: false
            })
        }
    },
    readAll: async (req, res) => {
        let query = {}
        if (req.query.user) {
            query.user = req.query.user
        }
        try {
            let orders = await Order.find(query)
            .populate('user', { firstName:1, lastName:1, address:1, city:1, province:1, zipCode:1, email:1, tel:1, dni:1 })

            if (orders) {
                res.status(200).json({
                    message: 'todas las órdenes',
                    response: orders,
                    success: true
                })
            } else {
                res.status(404).json({
                    message: 'no hay órdenes',
                    success: false
                })
            }
        } catch (error) {
            console.log(error)
            res.status(400).json({
                message: "error",
                success: false
            })
        }
    },
    readOrder: async (req, res) => {
        const { id } = req.params
        try {
            let findOrder = await Order.findOne({ _id: id })
            if (findOrder) {
                res.status(200).json({
                    message: 'orden encontrada',
                    response: findOrder,
                    success: true
                })
            } else {
                res.status(404).json({
                    message: 'orden no encontrada',
                    success: false
                })
            }
        } catch (error) {
            console.log(error)
            res.status(400).json({
                message: "error",
                success: false
            })
        }
    },
    deleteOrder: async(req, res) => {
        const {id} = req.params
        try {
            let removeOrder = await Order.findByIdAndDelete({_id: id})
            res.status(200).json({
                message: 'Orden de compra eliminada',
                response: removeOrder,
                success: true
            })
        } catch (error) {
            console.log(error)
            res.status(400).json({
                message: "error",
                success: false
            })
        }
    },
    updateOrder : async(req,res) =>{
        const { id } = req.params
        try {
            const updateOrder = req.body
            let myOrder = await Order.findOne({ _id: id })
            if (!myOrder) {
                res.status(400).json({
                    message: 'No se pudo actualizar',
                    success: false
                }) 
            } else {
                const updatePayment = await Order.findByIdAndUpdate(id, updateOrder)
                res.status(200).json({
                    message: 'Tu estado de pago ha sido actualizado',
                    success: true
                }) 
            }

        } catch (error) {
            console.log(error)
            res.status(400).json({
                message: error.message,
                success: false
            })
        }
    },
    resumeOrder: async(req,res)=>{

        const{id} = req.params

        const { email, products, firstName, lastName, total, statusPayment} = req.body

        try {
            let mailOrder = await Order.findOne({ _id: id })
            if(mailOrder) {
                sendMailorder(email, products, firstName, lastName, total, statusPayment, id)
                res.status(200).json({
                    message: 'pedido encontrado, se ha enviado el resumen de compra',
                    success: true
                }) 
            } else {
                res.status(400).json({
                    message: 'No existe el pedido, no se puede enviar el resumen de comrpra',
                    success: false
                }) 
            }
            
        } catch (error) {
            console.log(error)
            res.status(400).json({
                message: error.message,
                success: false
            })
        }
    }
}

module.exports = shopOrderController