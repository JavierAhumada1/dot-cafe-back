require('dotenv').config()
const db = require('./config/database')
const CoffeeByKilogram = require('./models/CoffeeByKilogram')

CoffeeByKilogram.create(
    {
        name:"Café de la casa",
        photo:"http://drive.google.com/uc?export=view&id=1VHmPFCq1B7cER104FPU2bN_LoQfv8_ki",
        origin: "Blend",
        presentation: "Grano",
        type: "Arabico",
        wheight:1000,
        roastingLevels: "Tostato Oscuro",
        stock: 100,
        price: 4500
    },
    {
        name:"Buenos Aires",
        photo:"http://drive.google.com/uc?export=view&id=1VHmPFCq1B7cER104FPU2bN_LoQfv8_ki",
        origin: "Colombia",
        presentation: "Grano",
        type: "Arabico",
        wheight:1000,
        roastingLevels: "Tostato Medio",
        stock: 300,
        price: 5200
    },
    {
        name:"Vista Hermosa",
        photo:"http://drive.google.com/uc?export=view&id=1VHmPFCq1B7cER104FPU2bN_LoQfv8_ki",
        origin: "Colombia",
        presentation: "Grano",
        type: "Arabico",
        wheight:1000,
        roastingLevels: "Tostato Medio",
        stock: 0,
        price: 5100
    },
    {
        name:"Casa Loma",
        photo:"http://drive.google.com/uc?export=view&id=1VHmPFCq1B7cER104FPU2bN_LoQfv8_ki",
        origin: "Colombia",
        presentation: "Grano",
        type: "Arabico",
        wheight:1000,
        roastingLevels: "Tostato Medio",
        stock: 60,
        price: 4800
    },
    {
        name:"Fazenda Reis",
        photo:"http://drive.google.com/uc?export=view&id=1VHmPFCq1B7cER104FPU2bN_LoQfv8_ki",
        origin: "Brasil",
        presentation: "Molido",
        type: "Arabico",
        wheight:1000,
        roastingLevels: "Tostato Oscuro",
        stock: 230,
        price: 4500
    },
    {
        name:"Planalto",
        photo:"http://drive.google.com/uc?export=view&id=1VHmPFCq1B7cER104FPU2bN_LoQfv8_ki",
        origin: "Brasil",
        presentation: "Molido",
        type: "Arabico",
        wheight:1000,
        roastingLevels: "Tostato Oscuro",
        stock: 150,
        price: 5600
    },
    {
        name:"Capim Seco Espresso",
        photo:"http://drive.google.com/uc?export=view&id=1VHmPFCq1B7cER104FPU2bN_LoQfv8_ki",
        origin: "Brasil",
        presentation: "Molido",
        type: "Arabic",
        wheight:1000,
        roastingLevels: "Tostato Claro",
        stock: 100,
        price: 6000
    },
    {
        name:"Remera Natural",
        photo:"http://drive.google.com/uc?export=view&id=1VHmPFCq1B7cER104FPU2bN_LoQfv8_ki",
        origin: "Ruanda",
        presentation: "Molido",
        type: "Arabico",
        wheight:1000,
        roastingLevels: "Tostato Claro",
        stock: 150,
        price: 7400
    },
    {
        name:"Insovu PB",
        photo:"http://drive.google.com/uc?export=view&id=1VHmPFCq1B7cER104FPU2bN_LoQfv8_ki",
        origin: "Ruanda",
        presentation: "Grano",
        type: "Arabico",
        wheight:1000,
        roastingLevels: "Tostato Oscuro",
        stock: 0,
        price: 8600
    },
    {
        name:"Bourbon Crema Espresso",
        photo:"http://drive.google.com/uc?export=view&id=1VHmPFCq1B7cER104FPU2bN_LoQfv8_ki",
        origin: "Blend",
        presentation: "Molido",
        type: "Arabico",
        wheight:1000,
        roastingLevels: "Tostato Oscuro",
        stock: 0,
        price: 5600
    },
    {
        name:"Tutti Frutti Espresso",
        photo:"http://drive.google.com/uc?export=view&id=1VHmPFCq1B7cER104FPU2bN_LoQfv8_ki",
        origin: "Blend",
        presentation: "Molido",
        type: "Arabico",
        wheight:1000,
        roastingLevels: "Tostato Medio",
        stock: 6,
        price: 4900
    },
    {
        name:"Café de la casa",
        photo:"http://drive.google.com/uc?export=view&id=1MHOQXUYU6QuhHwUGCvYlcAIpcX29FWlT",
        origin: "Blend",
        presentation: "Grano",
        type: "Arabico",
        wheight:500,
        roastingLevels: "Tostato Oscuro",
        stock: 50,
        price: 2700
    },
    {
        name:"Buenos Aires",
        photo:"http://drive.google.com/uc?export=view&id=1MHOQXUYU6QuhHwUGCvYlcAIpcX29FWlT",
        origin: "Colombia",
        presentation: "Grano",
        type: "Arabico",
        wheight:500,
        roastingLevels: "Tostato Medio",
        stock: 80,
        price: 3100
    },
    {
        name:"Vista Hermosa",
        photo:"http://drive.google.com/uc?export=view&id=1MHOQXUYU6QuhHwUGCvYlcAIpcX29FWlT",
        origin: "Colombia",
        presentation: "Grano",
        type: "Arabico",
        wheight:500,
        roastingLevels: "Tostato Medio",
        stock: 230,
        price: 2950
    },
    {
        name:"Casa Loma",
        photo:"http://drive.google.com/uc?export=view&id=1MHOQXUYU6QuhHwUGCvYlcAIpcX29FWlT",
        origin: "Colombia",
        presentation: "Grano",
        type: "Arabico",
        wheight:500,
        roastingLevels: "Tostato Medio",
        stock: 60,
        price: 2800
    },
    {
        name:"Fazenda Reis",
        photo:"http://drive.google.com/uc?export=view&id=1MHOQXUYU6QuhHwUGCvYlcAIpcX29FWlT",
        origin: "Brasil",
        presentation: "Molido",
        type: "Arabico",
        wheight:500,
        roastingLevels: "Tostato Oscuro",
        stock: 230,
        price: 3000
    },
    {
        name:"Planalto",
        photo:"http://drive.google.com/uc?export=view&id=1MHOQXUYU6QuhHwUGCvYlcAIpcX29FWlT",
        origin: "Brasil",
        presentation: "Molido",
        type: "Arabico",
        wheight:500,
        roastingLevels: "Tostato Oscuro",
        stock: 150,
        price: 3200
    },
    {
        name:"Capim Seco Espresso",
        photo:"http://drive.google.com/uc?export=view&id=1MHOQXUYU6QuhHwUGCvYlcAIpcX29FWlT",
        origin: "Brasil",
        presentation: "Molido",
        type: "Arabic",
        wheight:500,
        roastingLevels: "Tostato Claro",
        stock: 19,
        price: 3500
    },
    {
        name:"Remera Natural",
        photo:"http://drive.google.com/uc?export=view&id=1MHOQXUYU6QuhHwUGCvYlcAIpcX29FWlT",
        origin: "Ruanda",
        presentation: "Molido",
        type: "Arabico",
        wheight:500,
        roastingLevels: "Tostato Claro",
        stock: 250,
        price: 4200
    },
    {
        name:"Insovu PB",
        photo:"http://drive.google.com/uc?export=view&id=1MHOQXUYU6QuhHwUGCvYlcAIpcX29FWlT",
        origin: "Ruanda",
        presentation: "Grano",
        type: "Arabico",
        wheight:500,
        roastingLevels: "Tostato Oscuro",
        stock: 36,
        price: 5400
    },
    {
        name:"Bourbon Crema Espresso",
        photo:"http://drive.google.com/uc?export=view&id=1MHOQXUYU6QuhHwUGCvYlcAIpcX29FWlT",
        origin: "Blend",
        presentation: "Molido",
        type: "Arabico",
        wheight:500,
        roastingLevels: "Tostato Oscuro",
        stock: 0,
        price: 3000
    },
    {
        name:"Tutti Frutti Espresso",
        photo:"http://drive.google.com/uc?export=view&id=1MHOQXUYU6QuhHwUGCvYlcAIpcX29FWlT",
        origin: "Blend",
        presentation: "Molido",
        type: "Arabico",
        wheight:500,
        roastingLevels: "Tostato Medio",
        stock: 80,
        price: 3100
    },
    {
        name:"Café de la casa",
        photo:"http://drive.google.com/uc?export=view&id=16DN8cdTLv_f3zz2Pw6z00JwXiU4l9iq2",
        origin: "Blend",
        presentation: "Grano",
        type: "Arabico",
        wheight:250,
        roastingLevels: "Tostato Oscuro",
        stock: 150,
        price: 1950
    },
    {
        name:"Buenos Aires",
        photo:"http://drive.google.com/uc?export=view&id=16DN8cdTLv_f3zz2Pw6z00JwXiU4l9iq2",
        origin: "Colombia",
        presentation: "Grano",
        type: "Arabico",
        wheight:250,
        roastingLevels: "Tostato Medio",
        stock: 200,
        price: 1700
    },
    {
        name:"Vista Hermosa",
        photo:"http://drive.google.com/uc?export=view&id=16DN8cdTLv_f3zz2Pw6z00JwXiU4l9iq2",
        origin: "Colombia",
        presentation: "Grano",
        type: "Arabico",
        wheight:250,
        roastingLevels: "Tostato Medio",
        stock: 30,
        price: 1750
    },
    {
        name:"Casa Loma",
        photo:"http://drive.google.com/uc?export=view&id=16DN8cdTLv_f3zz2Pw6z00JwXiU4l9iq2",
        origin: "Colombia",
        presentation: "Grano",
        type: "Arabico",
        wheight:250,
        roastingLevels: "Tostato Medio",
        stock: 37,
        price: 1500
    },
    {
        name:"Fazenda Reis",
        photo:"http://drive.google.com/uc?export=view&id=16DN8cdTLv_f3zz2Pw6z00JwXiU4l9iq2",
        origin: "Brasil",
        presentation: "Molido",
        type: "Arabico",
        wheight:250,
        roastingLevels: "Tostato Oscuro",
        stock: 60,
        price: 1820
    },
    {
        name:"Planalto",
        photo:"http://drive.google.com/uc?export=view&id=16DN8cdTLv_f3zz2Pw6z00JwXiU4l9iq2",
        origin: "Brasil",
        presentation: "Molido",
        type: "Arabico",
        wheight:250,
        roastingLevels: "Tostato Oscuro",
        stock: 15,
        price: 1900
    },
    {
        name:"Capim Seco Espresso",
        photo:"http://drive.google.com/uc?export=view&id=16DN8cdTLv_f3zz2Pw6z00JwXiU4l9iq2",
        origin: "Brasil",
        presentation: "Molido",
        type: "Arabic",
        wheight:250,
        roastingLevels: "Tostato Claro",
        stock: 140,
        price: 2100
    },
    {
        name:"Remera Natural",
        photo:"http://drive.google.com/uc?export=view&id=16DN8cdTLv_f3zz2Pw6z00JwXiU4l9iq2",
        origin: "Ruanda",
        presentation: "Molido",
        type: "Arabico",
        wheight:250,
        roastingLevels: "Tostato Claro",
        stock: 50,
        price: 2500
    },
    {
        name:"Insovu PB",
        photo:"http://drive.google.com/uc?export=view&id=16DN8cdTLv_f3zz2Pw6z00JwXiU4l9iq2",
        origin: "Ruanda",
        presentation: "Grano",
        type: "Arabico",
        wheight:250,
        roastingLevels: "Tostato Oscuro",
        stock: 85,
        price: 3200
    },
    {
        name:"Bourbon Crema Espresso",
        photo:"http://drive.google.com/uc?export=view&id=16DN8cdTLv_f3zz2Pw6z00JwXiU4l9iq2",
        origin: "Blend",
        presentation: "Molido",
        type: "Arabico",
        wheight:250,
        roastingLevels: "Tostato Oscuro",
        stock: 160,
        price: 1900
    },
    {
        name:"Tutti Frutti Espresso",
        photo:"http://drive.google.com/uc?export=view&id=16DN8cdTLv_f3zz2Pw6z00JwXiU4l9iq2",
        origin: "Blend",
        presentation: "Molido",
        type: "Arabico",
        wheight:250,
        roastingLevels: "Tostato Medio",
        stock: 40,
        price: 1650
    }

)