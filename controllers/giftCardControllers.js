const { query } = require('express')
const GiftCards = require('../models/giftCard')

const giftCardController = {
    create:async (req, res) => {
        try {
            let giftCard = await new GiftCards(req.body).save()

            res.status(201).json({
                message: 'gift Card Has Been Created',
                succes: true,
                response: giftCard,
            })
        } catch (error) {
            console.log(error)
            res.status(400).json({
                message: error.message,
                succes: false
            })
        }
    },

    readAll: async (req, res) => {
        try {
            let myGiftCards = await GiftCards.find()
            if(myGiftCards) {
                res.status(200).json({
                    message: "Gift Cards Found",
                    response: myGiftCards,
                    success: true
                })
            } else {
                res.status(404).json({
                    message: "Store without Gift Cards",
                    success: false
                })
            }
        } catch (error) {
            console.log(error)
            res.status(500).json()
        }
    },
    updateAfterBuy : async (req, res) =>{

    },
}

module.exports = giftCardController
