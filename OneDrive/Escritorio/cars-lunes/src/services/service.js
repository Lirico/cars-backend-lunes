const CarModel = require('../models/car.models')


// La logica del controlador

const getAllCarService = async (request, response) => {
    // Consultamos a la DB por la lista de elementos de la coleccion cars
   const allCars = await CarModel.find()

    return allCars;
}

const addCarService = async (request, response) => {
    // Consultar a la DB para insertarle un autito
    // -> Que yo quiero insertar un autito tal -> Por donde me viene el autito?
    const car = request.body // Aca esta el autito
    console.log(car)
    try {
        const newCar = new CarModel(car)

        await newCar.save()

        return { message: "Auto generado con exito", statusCode: 201} // 201 -> created
    } catch (error) {
        return { message: "Ocurrio un error", statusCode: 400}
    }
}


module.exports = {
    getAllCarService,
    addCarService
}