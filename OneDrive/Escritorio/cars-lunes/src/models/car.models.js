const {mongoose, Schema} = require('mongoose')


// ESQUEMA -> Tematica -> Representar el modelo de elemento con que vamos a
// interactuar Servidor <- -> Database
const CarSchema = Schema({
    brand: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    model: {
        type: String,
        require: true
    },
    year: {
        type: Number,
        require: true
    },
    isNewCar: {
        type: Boolean,
        default: false
    }
})

// Modelamos el Schema -> Generamos el modelo ya listo para utilizarlo en nuestra logica
// de servicios
const CarModel = mongoose.model("Car", CarSchema)

module.exports = CarModel;