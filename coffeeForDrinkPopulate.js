require('dotenv').config()
const db = require('./config/database')
const CoffeeForDrink = require('./models/coffeForDrink')


CoffeeForDrink.create(
    {
        brand:"Inzovu PB Espresso",
        origin: "Ruanda",
        photo: "http://drive.google.com/uc?export=view&id=1muNBNqwLWSvZioCY63Gs-3G7wzwJBOtK",
        pricePerCup: 200,
        pricePerMug: 100,
        size: "Chico",
        type: "Espresso",
        description: "30 ml de espresso"
    },
    {
        brand:"Inzovu PB Espresso",
        origin: "Ruanda",
        photo: "http://drive.google.com/uc?export=view&id=1muNBNqwLWSvZioCY63Gs-3G7wzwJBOtK",
        pricePerCup: 300,
        pricePerMug: 200,
        size: "Mediano",
        type: "Espresso Intenso",
        description: "60 ml de espresso"
    },
    {
        brand:"Inzovu PB Espresso",
        origin: "Ruanda",
        photo: "http://drive.google.com/uc?export=view&id=1muNBNqwLWSvZioCY63Gs-3G7wzwJBOtK",
        pricePerCup: 400,
        pricePerMug: 300,
        size: "Grande",
        type: "Espresso Lungo",
        description: "90 ml de espresso"
    },
    {
        brand:"Planalto",
        origin: "Brasil",
        photo: "http://drive.google.com/uc?export=view&id=1muNBNqwLWSvZioCY63Gs-3G7wzwJBOtK",
        pricePerCup: 180,
        pricePerMug: 130,
        size: "Chico",
        type: "Ristretto",
        description: "22 ml de ristretto"
    },
    {
        brand:"Decaf Buenos Aires",
        origin: "Colombia",
        photo: "http://drive.google.com/uc?export=view&id=1muNBNqwLWSvZioCY63Gs-3G7wzwJBOtK",
        pricePerCup: 250,
        pricePerMug: 170,
        size: "Chico",
        type: "Espresso Macchiato",
        description: "30 ml de espresso, más una buena dosis de espuma de leche"
    },
    {
        brand:"Decaf Buenos Aires",
        origin: "Colombia",
        photo: "http://drive.google.com/uc?export=view&id=1muNBNqwLWSvZioCY63Gs-3G7wzwJBOtK",
        pricePerCup: 300,
        pricePerMug: 220,
        size: "Mediano",
        type: "Espresso Macchiato",
        description: "60 ml de espresso, más una buena dosis de espuma de leche"
    },
    {
        brand:"Decaf Buenos Aires",
        origin: "colombia",
        photo: "http://drive.google.com/uc?export=view&id=1muNBNqwLWSvZioCY63Gs-3G7wzwJBOtK",
        pricePerCup: 390,
        pricePerMug: 300,
        size: "Grande",
        type: "Espresso Macchiato",
        description: "90 ml de espresso, más una buena dosis de espuma de leche"
    },
    {
        brand:"Vista Hermosa",
        origin: "Colombia",
        photo: "http://drive.google.com/uc?export=view&id=1K07CEcS7DP6YaX3dD82FCKGMwqKXYjMU",
        pricePerCup: 360,
        pricePerMug: 300,
        size: "Chico",
        type: "Cappuccino",
        description: "150 ml de espresso + leche al vapor + leche espumada"
    },
    {
        brand:"Vista Hermosa",
        origin: "Colombia",
        photo: "http://drive.google.com/uc?export=view&id=1K07CEcS7DP6YaX3dD82FCKGMwqKXYjMU",
        pricePerCup: 450,
        pricePerMug: 370,
        size: "Mediano",
        type: "Cappuccino",
        description: "300 ml de espresso + leche al vapor + leche espumada"
    },
    {
        brand:"Vista Hermosa",
        origin: "colombia",
        photo: "http://drive.google.com/uc?export=view&id=1K07CEcS7DP6YaX3dD82FCKGMwqKXYjMU",
        pricePerCup: 580,
        pricePerMug: 490,
        size: "Grande",
        type: "Cappuccino",
        description: "420 ml de espresso + leche al vapor + leche espumada"
    },
    {
        brand:"Decaf Buenos Aires",
        origin: "Colombia",
        photo: "http://drive.google.com/uc?export=view&id=1K07CEcS7DP6YaX3dD82FCKGMwqKXYjMU",
        pricePerCup: 250,
        pricePerMug: 170,
        size: "Chico",
        type: "Latte Macchiato",
        description: "60 ml leche al vapor + leche espumada + toque de espresso"
    },
    {
        brand:"Decaf Buenos Aires",
        origin: "Colombia",
        photo: "http://drive.google.com/uc?export=view&id=1K07CEcS7DP6YaX3dD82FCKGMwqKXYjMU",
        pricePerCup: 300,
        pricePerMug: 220,
        size: "Mediano",
        type: "Latte Macchiato",
        description: "90 ml leche al vapor + leche espumada + toque de espresso"
    },
    {
        brand:"Decaf Buenos Aires",
        origin: "colombia",
        photo: "http://drive.google.com/uc?export=view&id=1K07CEcS7DP6YaX3dD82FCKGMwqKXYjMU",
        pricePerCup: 390,
        pricePerMug: 300,
        size: "Grande",
        type: "Latte Macchiato",
        description: "120 ml leche al vapor + leche espumada + toque de espresso"
    },
    {
        brand:"Tutti Frutti Espresso",
        origin: "Blend",
        photo: "http://drive.google.com/uc?export=view&id=1K07CEcS7DP6YaX3dD82FCKGMwqKXYjMU",
        pricePerCup: 270,
        pricePerMug: 200,
        size: "Chico",
        type: "Café americano",
        description: "60 ml de espresso + agua caliente"
    },
    {
        brand:"Tutti Frutti Espresso",
        origin: "Blend",
        photo: "http://drive.google.com/uc?export=view&id=1K07CEcS7DP6YaX3dD82FCKGMwqKXYjMU",
        pricePerCup: 340,
        pricePerMug: 280,
        size: "Mediano",
        type: "Café americano",
        description: "90 ml de espresso + agua caliente"
    },
    {
        brand:"Tutti Frutti Espresso",
        origin: "Blend",
        photo: "http://drive.google.com/uc?export=view&id=1K07CEcS7DP6YaX3dD82FCKGMwqKXYjMU",
        pricePerCup: 420,
        pricePerMug: 370,
        size: "Grande",
        type: "Café americano",
        description: "120 ml de espresso + agua caliente"
    },
    {
        brand:"Remera Natural",
        origin: "Ruanda",
        photo: "http://drive.google.com/uc?export=view&id=1K07CEcS7DP6YaX3dD82FCKGMwqKXYjMU",
        pricePerCup: 380,
        pricePerMug: 310,
        size: "Chico",
        type: "Caffè Latte",
        description: "75 ml de leche al vapor + espresso + leche espumada"
    },
    {
        brand:"Remera Natural",
        origin: "Ruanda",
        photo: "http://drive.google.com/uc?export=view&id=1K07CEcS7DP6YaX3dD82FCKGMwqKXYjMU",
        pricePerCup: 430,
        pricePerMug: 370,
        size: "Mediano",
        type: "Caffè Latte",
        description: "150 ml de leche al vapor + espresso + leche espumada"
    },
    {
        brand:"Remera Natural",
        origin: "Ruanda",
        photo: "https://www.philips.cl/c-dam/b2c/category-pages/Household/coffee/master/faq/cups/Productimg_Flat.png",
        pricePerCup: 490,
        pricePerMug: 420,
        size: "Grande",
        type: "Caffè Latte",
        description: "300 ml de leche al vapor + espresso + leche espumada"
    },
    {
        brand:"Vista Hermosa",
        origin: "Colombia",
        photo: "http://drive.google.com/uc?export=view&id=1K07CEcS7DP6YaX3dD82FCKGMwqKXYjMU",
        pricePerCup: 420,
        pricePerMug: 370,
        size: "Chico",
        type: "Mocaccino",
        description: "150 ml de espresso + leche al vapor + leche espumada + jarabe de cacao"
    },
    {
        brand:"Vista Hermosa",
        origin: "Colombia",
        photo: "http://drive.google.com/uc?export=view&id=1K07CEcS7DP6YaX3dD82FCKGMwqKXYjMU",
        pricePerCup: 520,
        pricePerMug: 420,
        size: "Mediano",
        type: "Mocaccino",
        description: "300 ml de espresso + leche al vapor + leche espumada + jarabe de cacao"
    },
    {
        brand:"Vista Hermosa",
        origin: "colombia",
        photo: "http://drive.google.com/uc?export=view&id=1K07CEcS7DP6YaX3dD82FCKGMwqKXYjMU",
        pricePerCup: 600,
        pricePerMug: 500,
        size: "Grande",
        type: "Mocaccino",
        description: "420 ml de espresso + leche al vapor + leche espumada + jarabe de cacao"
    },
    {
        brand:"Vista Hermosa",
        origin: "Colombia",
        photo: "http://drive.google.com/uc?export=view&id=1K07CEcS7DP6YaX3dD82FCKGMwqKXYjMU",
        pricePerCup: 360,
        pricePerMug: 300,
        size: "Chico",
        type: "Frappuccino",
        description: "150 ml de espresso granizado + leche + leche espumada"
    },
    {
        brand:"Vista Hermosa",
        origin: "Colombia",
        photo: "http://drive.google.com/uc?export=view&id=1K07CEcS7DP6YaX3dD82FCKGMwqKXYjMU",
        pricePerCup: 450,
        pricePerMug: 370,
        size: "Mediano",
        type: "Frappuccino",
        description: "300 ml de espresso granizado + leche + leche espumada"
    },
    {
        brand:"Vista Hermosa",
        origin: "colombia",
        photo: "http://drive.google.com/uc?export=view&id=1K07CEcS7DP6YaX3dD82FCKGMwqKXYjMU",
        pricePerCup: 580,
        pricePerMug: 490,
        size: "Grande",
        type: "Frappuccino",
        description: "420 ml de espresso granizado + leche  + leche espumada"
    }

)


