const Subscribers = require('../models/subscribers')
const Joi = require('joi')


const validator = Joi.object({
    name: Joi.string().min(4).message("INVALID_NAME"),
    email: Joi.string()
        .email({
            minDomainSegments: 2,
            tlds: { allow: ["com", "ar", "net", "org"] },
        })
        .message("INVALID_EMAIL"),
});

const subscriberController = {
    SubscriberCreate: async (req, res) => {
        let { name, email } = req.body;
        try {
            let result = await validator.validateAsync({
                name,
                email,
            });
            let subscribers = await new Subscribers(req.body).save()
            res.status(201).json({
                message: 'Suscriptor agregado',
                success: true,
                response: subscribers,
            })
        } catch (error) {
            console.log(error);
            res.status(400).json({
                message: error.message,
                success: false,
            });
        }
    },
    SubscribersRead: async (req, res) => {
        try {
            let subscribers = await Subscribers.find()
            if (subscribers) {
                res.status(200).json({
                    message: 'Suscriptores',
                    response: subscribers,
                    success: true,
                })
            } else {
                res.status(404).json({
                    message: 'Sin suscriptores'
                })
            }
        } catch (error) {
            console.log(error)
            res.status(400).json({
                message: 'No se encontraron datos',
                success: false
            })
        }
    }
}

module.exports = subscriberController;