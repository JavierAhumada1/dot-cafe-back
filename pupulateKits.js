require('dotenv').config()
const db = require('./config/database')

const Kits = require('./models/Kits')

Kits.create(
    {
        name: "Goteador y filtros",
        photo: [
            "https://res.cloudinary.com/pactcoffee/image/fetch/c_crop,f_auto,g_center,h_1250,q_auto,w_1280/https://media.pactcoffee.com/images/uploads/legacyproduct/1342/pc09_web_pog_1280x1500_97.jpg",
            "https://res.cloudinary.com/pactcoffee/image/fetch/c_crop,f_auto,g_center,h_1250,q_auto,w_1280/https://media.pactcoffee.com/images/uploads/legacyproduct/1342/pc09_web_pog_1280x1500_93.jpg",
            "https://res.cloudinary.com/pactcoffee/image/fetch/c_crop,f_auto,g_center,h_1250,q_auto,w_1280/https://media.pactcoffee.com/images/uploads/legacyproduct/1342/1280x1500_clever_dripper_2.jpg",
            "https://res.cloudinary.com/pactcoffee/image/fetch/c_crop,f_auto,g_center,h_1250,q_auto,w_1280/https://media.pactcoffee.com/images/uploads/legacyproduct/1342/pc09_web_pog_1280x1500_98.jpg"
        ],
        stock: 10,
        price: 3542,
        description: "Combinando las ventajas de la preparación V60 y de la cafetera, permite la inmersión total de los posos del café en el agua antes de que esté listo para servir.",
    },
    {
        name: "Kit de infusión HARIO V60",
        photo: [
            "https://res.cloudinary.com/pactcoffee/image/fetch/c_crop,f_auto,g_center,h_1250,q_auto,w_1280/https://media.pactcoffee.com/images/uploads/legacyproduct/1/1280x1500_v60_kit_plastic.jpg",
            "https://res.cloudinary.com/pactcoffee/image/fetch/c_crop,f_auto,g_center,h_1250,q_auto,w_1280/https://media.pactcoffee.com/images/uploads/legacyproduct/1/pc09_web_pog_1280x1500_30.jpg",
            "https://res.cloudinary.com/pactcoffee/image/fetch/c_crop,f_auto,g_center,h_1250,q_auto,w_1280/https://media.pactcoffee.com/images/uploads/legacyproduct/1/pc09_web_pog_1280x1500_31.jpg"
        ],
        stock: 20,
        price: 1623,
        description: "La V60 es uno de nuestros métodos de preparación favoritos. No sólo es fácil de usar (¡y de limpiar!), sino que también hace una taza de café absolutamente fantástica. Las hendiduras en espiral del gotero agitan los posos y el ángulo de 60º crea un flujo hacia el centro, ampliando el tiempo de contacto entre el agua y el café",
    },
    {
        name: "V60 Kit de café artesanal",
        photo: [
            "https://res.cloudinary.com/pactcoffee/image/fetch/c_crop,f_auto,g_center,h_1250,q_auto,w_1280/https://media.pactcoffee.com/images/uploads/legacyproduct/908/1280x1500_v60_craft_coffee_kit_1.jpg",
            "https://res.cloudinary.com/pactcoffee/image/fetch/c_crop,f_auto,g_center,h_1250,q_auto,w_1280/https://media.pactcoffee.com/images/uploads/legacyproduct/908/1280x1500_v60_craft_coffee_kit_2.jpg",
            "https://res.cloudinary.com/pactcoffee/image/fetch/c_crop,f_auto,g_center,h_1250,q_auto,w_1280/https://media.pactcoffee.com/images/uploads/legacyproduct/908/pc09_web_pog_1280x1500_108.jpg",
            "https://res.cloudinary.com/pactcoffee/image/fetch/c_crop,f_auto,g_center,h_1250,q_auto,w_1280/https://media.pactcoffee.com/images/uploads/legacyproduct/908/pc09_web_pog_1280x1500_124.jpg"
        ],
        stock: 5,
        price: 3395,
        description: "¿Es hora de tomarse en serio las especialidades de café? Entonces el Kit de Café Artesanal V60 es para ti. Todo lo que necesita para mostrar sus crecientes habilidades de preparación, con un servidor de vidrio, un gotero transparente V60 de tamaño 02, 40 papeles de filtro y una cuchara de medición.",
    }
    // {
    //     name: "",
    //     photo: [],
    //     stock: 0,
    //     price: 0,
    //     description: "",
    // },
    // {
    //     name: "",
    //     photo: [],
    //     stock: 0,
    //     price: 0,
    //     description: "",
    // }
)