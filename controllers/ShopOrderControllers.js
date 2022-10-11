const Order = require('../models/ShopOrder')

const shopOrderController = {
    create: async (req, res) => {
        let {user, products: [item, name, quantity, photo, price, totalPrice], total} = req.body
        try {
            let payment = false
            let state = "En proceso"
            let newOrder = await new Order({user, products: [item, name, quantity, photo, price, totalPrice], total, payment, state}).save()
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
            .populate('user', {firtName:1, lastName:1, address:1, city:1, province:1, zipCode:1, email:1, tel:1, dni:1 })

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
    }
}

module.exports = shopOrderController