require('dotenv').config()
const db = require('./config/database')
const CoffeeMugs = require('./models/coffeeMug')


CoffeeMugs.create(
    {
        name:"Eco Mug",
        description: "Taza de ceramica sustentable personalizada, fabricada bajo certificacion  G2 - Green Squared. Terminaciones brillantes y colores nitidos.",
        photo: "http://drive.google.com/uc?export=view&id=1ANdWGg6jJOo2QdVJCgSanauUkIEm8MdY",
        price: 1200,
        size: "330 ml",
        stock:600
    },
    {
        name:"Sunshine Mug",
        description: "Taza de ceramica sustentable personalizada, fabricada bajo certificacion  G2 - Green Squared. Terminaciones brillantes y colores nitidos.",
        photo: "http://drive.google.com/uc?export=view&id=1fFK0KxRD4N3RshzBHjsvI1tJh2r2fkOr",
        price: 1200,
        size: "330 ml",
        stock:100
    },
    {
        name:"Sky Mug",
        description: "Taza de ceramica sustentable personalizada, fabricada bajo certificacion  G2 - Green Squared. Terminaciones brillantes y colores nitidos.",
        photo: "http://drive.google.com/uc?export=view&id=1XNC12Wt2qJWl2Ln2Hl_ZfXUbREY2qo6f",
        price: 1200,
        size: "330 ml",
        stock:100
    },
    {
        name:"Friendly Mug",
        description: "Taza de ceramica sustentable personalizada, fabricada bajo certificacion  G2 - Green Squared. Terminaciones brillantes y colores nitidos.",
        photo: "http://drive.google.com/uc?export=view&id=1wO9-HIUAy6aY0dqpnNnUDCzNnN-WLYEC",
        price: 1200,
        size: "330 ml",
        stock:100
    }
)