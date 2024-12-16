// importanmos mongoose para habilitar metodos y propiedades para conectarnos
// con la base de datos
const mongoose = require('mongoose');
require('dotenv').config()

// Acceso al enlace de coneccion
const DATABASE = process.env.DATABASE_URL

// Funcion para conectarnos a la DB
const connect = async () => {
    try {
        mongoose.connect(DATABASE)
        console.log('Base de datos conectada.')
    } catch (error) {
        console.log(error)
    }
}

connect()