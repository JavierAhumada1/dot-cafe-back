const mercadoPago = require('mercadopago')
const { ACCESS_TOKEN } = process.env



mercadoPago.configure ({
    access_token: ACCESS_TOKEN
})


const mercadoPagoController = {


    create_preference : async (res, req) => {

        let preference = {
            items: [
                {
                    title: req.body.description,
                    unit_price: Number(req.body.price),
                    quantity: Number(req.body.quantity)
                }
            ],
            back_urls :{
                "success": "http://localhost:3000/mercadopago/feedback",
                "failure": "http://localhost:3000/mercadopago/feedback",
                "pending": "http://localhost:3000/mercadopago/feedback"
            },
            auto_return: "approved"
        }

        mercadoPago.preferences.create(preference)
		.then(function (response) {
            res.status(200).json({
				id: response.body.id,
                success: true,
                message: "Answer OK"
			});

		}).catch(function (error) {
			console.log(error)
            res.status(400).json({
                success: false,
                message: "Answer failed"
			});
		});

    }

}

module.exports = mercadoPagoController