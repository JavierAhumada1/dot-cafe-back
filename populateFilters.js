require('dotenv').config()
const db = require('./config/database')

const Filters = require('./models/Filters')

Filters.create(
    {
        name: "Hario V60 papeles de filtro - natural",
        photo: [
            "https://res.cloudinary.com/pactcoffee/image/fetch/c_crop,f_auto,g_center,h_1250,q_auto,w_1280/https://media.pactcoffee.com/images/uploads/legacyproduct/1218/pc09_web_pog_1280x1500_94.jpg",
            "https://res.cloudinary.com/pactcoffee/image/fetch/c_crop,f_auto,g_center,h_1250,q_auto,w_1280/https://media.pactcoffee.com/images/uploads/legacyproduct/1218/pc09_web_pog_1280x1500_112.jpg"
        ],
        stock: 30,
        price: 1772,
        description: "Papeles de filtro: ¡lo único que nunca querrá que se le acabe! Abastécete con dos prácticos paquetes de 100 papeles de filtro de tamaño 01 para la elaboración de cerveza V60. Son biodegradables y naturales, por lo que podrás disfrutar de una deliciosa infusión matutina y ser más respetuoso con el planeta.",
        amount: 100
    },
    {
        name: "Papeles de filtro AeroPress - Paquete doble",
        photo: ["https://res.cloudinary.com/pactcoffee/image/fetch/c_crop,f_auto,g_center,h_1500,q_auto,w_1000/https://media.pactcoffee.com/images/uploads/legacyproduct/1217/pc09_web_pog_1280x1500_45.jpg"],
        stock: 10,
        price: 2060,
        description: "No hay nada peor que ir a preparar tu infusión matutina y darte cuenta de que te has quedado sin filtros. Evita el síndrome de abstinencia del café abasteciéndote de lo esencial para la preparación de la mañana con 2 x 350 papeles de filtro para la preparación de Aeropress. Son biodegradables, así que también son buenos para el planeta.",
        amount: 350
    },
    {
        name: "Papeles de filtro Clever Dripper - Paquete doble",
        photo: ["https://res.cloudinary.com/pactcoffee/image/fetch/c_crop,f_auto,g_center,h_1500,q_auto,w_1000/https://media.pactcoffee.com/images/uploads/legacyproduct/1216/1280x1500_clever_filter_papers_double_pack.jpg"],
        stock: 32,
        price: 1771,
        description: "No hay nada peor que ir a preparar la infusión de la mañana y darse cuenta de que se han acabado los filtros. Evite la abstinencia de café abasteciéndose de lo esencial para la preparación de la mañana con 2 x 100 papeles de filtro blanqueados de tamaño 04 para la preparación del Clever Dripper. Son biodegradables, así que también son buenos para el planeta.",
        amount: 100
    },
    {
        name: "Hario V60 02 Papeles de filtro - Paquete doble",
        photo: [
            "https://res.cloudinary.com/pactcoffee/image/fetch/c_crop,f_auto,g_center,h_1500,q_auto,w_1000/https://media.pactcoffee.com/images/uploads/legacyproduct/1215/pc09_web_pog_1280x1500_95.jpg",
            "https://res.cloudinary.com/pactcoffee/image/fetch/c_crop,f_auto,g_center,h_1500,q_auto,w_1000/https://media.pactcoffee.com/images/uploads/legacyproduct/1215/v60filter_1280x1500.jpg"
        ],
        stock: 24,
        price: 1771,
        description: "Papeles de filtro: ¡lo único que nunca querrá que se le acabe por la mañana! Abastécete con dos prácticos paquetes de papeles de filtro blanqueados de tamaño 02 para la elaboración de cerveza V60. Estos son biodegradables, por lo que puedes disfrutar de una deliciosa infusión matutina y, además, ser más respetuoso con el planeta.",
        amount: 200
    }
)