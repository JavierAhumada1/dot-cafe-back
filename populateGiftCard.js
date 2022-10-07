require('dotenv').config()
const db = require('./config/database')
const GiftCard = require('./models/giftCard')



GiftCard.create(
    {
        photo: "http://drive.google.com/uc?export=view&id=1FbQkkpZMOyTJ0faFSgvTzsQKiOl3LAVJ",
        price: 1000,
        stock: 1000,
        name:"Gift Card: $1000"
    },
    {
        photo: "http://drive.google.com/uc?export=view&id=1XtHVCBq5I9DNzkFnZRomo6K_XbXz48pR",
        price: 2000,
        stock: 1000,
        name:"Gift Card: $2000"
    },
    {
        photo: "http://drive.google.com/uc?export=view&id=1mWEipItKc3sYeLvfruzW98VwkP8W0O2b",
        price: 5000,
        stock: 1000,
        name:"Gift Card: $5000"
    },
    {
        photo: "https://drive.google.com/file/d/1Yc3CIJPuqKN4AUpQ-ZYxwIhN1Gvz_H6D/view?usp=sharing",
        price: 10000,
        stock: 1000,
        name:"Gift Card: $10000"
    },

)
