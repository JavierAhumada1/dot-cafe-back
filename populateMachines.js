require('dotenv').config()
const db = require('./config/database')

const CoffeeMachines = require('./models/CoffeeMachines')

CoffeeMachines.create(
    //capsulas
    {
        name: "Mini Me automática negra",
        photo: [
            "https://www.dolce-gusto.com.ar/media/catalog/product/m/i/mini-me-preta_1.webp",
            "https://http2.mlstatic.com/D_NQ_NP_963730-MLA48008616183_102021-O.jpg"
        ],
        stock: 10,
        price: 34500,
        description: "La Mini Me no es solo linda y compacta, sino que además te ofrece la oportunidad de preparar con total facilidad una amplia variedad de bebidas con calidad de un Coffee Shop desde la comodidad de tu hogar. ",
        type: "capsula"
    },
    {
        name: "Genio S",
        photo: [
            "https://www.dolce-gusto.com.ar/media/catalog/product/2/0/2021-07-05.webp",
            "https://d2ye0ltusw47tz.cloudfront.net/28423517-thickbox_default/cafetera-dolce-gusto-genio-s-basic-blanca-moulinex-pv240158.jpg"
        ],
        stock: 8,
        price: 34590,
        description: "Nunca había sido tan fácil preparar el café como a vos más te gusta. Con la Genio S solo tenés que seleccionar el tamaño del café, presionar un botón y disfrutar de una deliciosa gama de bebidas con calidad de cafetería. Su diseño perfilado le permite encajar en cualquier cocina.",
        type: "capsula"
    },
    {
        name: "Cafetera moulinex dolce gusto piccolo",
        photo: [
            'https://www.rodo.com.ar/media/catalog/product/cache/855090a5c67e45b26c9e0d345e7592dc/p/i/piccolo_roja_1.jpg',
            'https://www.rodo.com.ar/media/catalog/product/cache/855090a5c67e45b26c9e0d345e7592dc/p/i/piccolo_roja_2.jpg'
        ],
        stock: 5,
        price: 39995,
        description: "La cafetera Moulinex Dolce Gusto Piccolo XS PV1A0858 cuenta con un diseño moderno y compacto. Gracias a sus medidas de tamaño moderado y a su poco peso (3 kg) se adapta a cualquier rincón y es fácil de trasladar. Posee depósito de agua de 0,8 litros de capacidad, extraíble para facilitar su llenado y limpieza.",
        type: "capsula"
    },
    {
        name: "Piccolo XS",
        photo: [
            "https://www.dolce-gusto.com.ar/media/catalog/product/p/i/piccolo-xs-categ_new.webp",
            "https://http2.mlstatic.com/D_NQ_NP_955309-MLA41874439947_052020-O.jpg"

        ],
        stock: 12,
        price: 24990,
        description: "La Piccolo XS, supercompacta y funcional, se adapta a cualquier espacio para que disfrutes nuestra amplia gama de variedades de cafés, lattes, chocolates y tés. Y gracias a su sistema de selección manual, siempre tendrás el control.",
        type: "capsula"
    },
    //italianas
    {
        name: "Cafetera bialetti moka express negra 1 taza",
        photo: [
            "https://thecoffeebox.com.ar/media/__sized__/products/bialetti_1_cup_negra-thumbnail-540x540-70.jpg",
            "https://thecoffeebox.com.ar/media/__sized__/products/byn-4_web_9LOkOit-thumbnail-540x540-70.jpg",
            "https://thecoffeebox.com.ar/media/__sized__/products/byn-11_web-thumbnail-540x540-70.jpg"
        ],
        stock: 4,
        price: 9000,
        description: "Moka Express color negro. Prepará el más auténtico café con la Moka Express de Bialetti.La única y original desde el año 1933. El encanto de la tradición, como antaño….",
        type: "itiliana"
    },
    {
        name: "Cafetera bialetti oceana 6 tazas",
        photo: [
            "https://thecoffeebox.com.ar/media/__sized__/products/bialetti_6_cup_oceana-thumbnail-540x540-70.jpg",
            "https://thecoffeebox.com.ar/media/__sized__/products/byn-5_1_web-thumbnail-540x540-70.jpg",
            "https://thecoffeebox.com.ar/media/__sized__/products/byn-10_web-thumbnail-540x540-70.jpg"
        ],
        stock: 5,
        price: 12500,
        description: "Bialetti muestra su compromiso con el medio ambiente al vincular el icónico Moka Express con Oceana, la organización mundial dedicada a salvaguardar los ecosistemas oceánicos que destaca la contaminación por plásticos desechables.",
        type: "itiliana"
    },
    {
        name: "Cafetera bialetti rainbow 6 tazas",
        photo: [
            "https://thecoffeebox.com.ar/media/__sized__/products/bialetti_6_cups_rainbow_blue-thumbnail-540x540-70.jpg",
            "https://thecoffeebox.com.ar/media/__sized__/products/byn-5_web-thumbnail-540x540-70.jpg",
            "https://thecoffeebox.com.ar/media/__sized__/products/byn-8_web-thumbnail-540x540-70.jpg",
        ],
        stock: 3,
        price: 12500,
        description: "Una cafetera que une una funcionalidad rigurosa a un gusto estético innovador, para dar más energía al despertar de la mañana y un toque de originalidad a la pausa café.",
        type: "itiliana"
    },
    {
        name: "Cafetera Moka Pedrini Negro Infinity 6 pocillos",
        photo: ["https://cafemartinez.vtexassets.com/arquivos/ids/157070-800-auto?v=637922800775200000&width=800&height=auto&aspect=true"],
        stock: 24,
        price: 23054,
        description: "La cafetera italiana básica por excelencia. La cafetera moka te permite extraer el mejor café molido para que disfrutes el mejor desayuno o merienda.",
        type: "itiliana"
    },
    //barista
    {
        name: "Máquina de café express sage bambino plus - plata",
        photo: [
            "https://res.cloudinary.com/pactcoffee/image/fetch/c_crop,f_auto,g_center,h_1500,q_auto,w_1000/https://media.pactcoffee.com/images/uploads/legacyproduct/649/sage_1_1280x1500.jpg",
            "https://res.cloudinary.com/pactcoffee/image/fetch/c_crop,f_auto,g_center,h_1500,q_auto,w_1000/https://media.pactcoffee.com/images/uploads/legacyproduct/649/sage_2_1280x1500.jpg"
        ],
        stock: 10,
        price: 58896,
        description: "Preparar un espresso de calidad de barista es un juego de niños con esta máquina elegante y fácil de usar, que se calienta en sólo tres segundos.",
        type: "barista"
    },
    {
        name: "Máquina sage barista pro acero inoxidable",
        photo: ["https://res.cloudinary.com/pactcoffee/image/fetch/c_crop,f_auto,g_center,h_1500,q_auto,w_1000/https://media.pactcoffee.com/images/uploads/legacyproduct/966/1_ses878bss_eu_product_beans_proxy_jpeg_high_res__1280x1500.jpg"],
        stock: 5,
        price: 107600,
        description: "Prepare en casa un café de barista en un abrir y cerrar de ojos. No tendrás que esperar mucho para conseguir la infusión de tus sueños ya que, gracias a su innovador sistema ThermoJet, esta máquina se calienta en 3 segundos.",
        type: "barista"
    },
    // {
    //     name: "",
    //     photo: [],
    //     stock: 0,
    //     price: 0,
    //     description: "",
    //     type: "itiliana"
    // }, {
    //     name: "",
    //     photo: [],
    //     stock: 0,
    //     price: 0,
    //     description: "",
    //     type: "itiliana"
    // },
    //filtro
    {
        name: "Cafetera chemex clasica 6 tazas",
        photo: [
            "https://thecoffeebox.com.ar/media/__sized__/products/coffeemaker-classic-six-front-detail_1_grande_97f8cf74-0211-4a99-af6a-aef187297_oCZfn9f-thumbnail-540x540.png",
            "https://thecoffeebox.com.ar/media/__sized__/products/chemex2_edit3-thumbnail-540x540-70.jpeg",
            "https://thecoffeebox.com.ar/media/__sized__/products/chemex-thumbnail-540x540-70.jpg"
        ],
        stock: 15,
        price: 19500,
        description: "El Chemex® es un método de goteo, lo cual significa que el agua pasa a través de una capa de café y un filtro normalmente hecho de papel. Chemex® te brinda una taza de café increíblemente limpia.",
        type: "filtro"
    },
    {
        name: "Cafetera Filtré Coffee",
        photo: [
            "https://thecoffeebox.com.ar/media/__sized__/products/Filtre_2_square-thumbnail-540x540-70.jpeg",
            "https://thecoffeebox.com.ar/media/__sized__/products/Filtre_3_square-thumbnail-540x540-70.jpeg",
            "https://thecoffeebox.com.ar/media/__sized__/products/Filtre_4_square-thumbnail-540x540-70.jpeg"
        ],
        stock: 2,
        price: 14500,
        description: "Esta cafetera 'Pour Over' va a llenar tu espacio con el más increíble aroma, gracias a su sistema de vertido por goteo y a un dripper especialmente diseñado para exaltar todas las propiedades del café recién molido.",
        type: "filtro"
    },
    {
        name: "Cafetera AeroPress",
        photo: [
            "https://thecoffeebox.com.ar/media/__sized__/products/aeropress-thumbnail-540x540-70.jpg",
            "https://thecoffeebox.com.ar/media/__sized__/products/instrucciones_aero_YZEG5sl-thumbnail-540x540-70.jpg"
        ],
        stock: 0,
        price: 21400,
        description: "AeroPress® es un método de filtrado manual fabricado en Estados Unidos. El funcionamiento se parece a la cafetera de émbolo o prensa francesa. Sin embargo, AeroPress® permite infusionar el café durante más o menos tiempo para obtener cualidades diferentes en la bebida final.",
        type: "filtro"
    },
    {
        name: "Cafetera Hario V60 Kit de Vidrio",
        photo: [
            "https://cafedelirante.com.ar/wp-content/uploads/2022/03/Hario-Brewing-Kit.webp",
            "https://cafedelirante.com.ar/wp-content/uploads/2022/03/Setv60.webp",
            "https://cafedelirante.com.ar/wp-content/uploads/2022/03/kit-3.jpeg"
        ],
        stock: 10,
        price: 21900,
        description: "Cafetera Hario V60 Original, fabricada en Japón. Kit de Vidrio con V60 y Server, con cuchara medidora y 40 filtros de papel.",
        type: "filtro"
    }
)