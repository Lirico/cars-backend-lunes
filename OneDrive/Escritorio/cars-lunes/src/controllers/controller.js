const {getAllCarService, addCarService} = require('../services/service')


// request es el objeto de peticion que nos manda el front
// response es el objeto que le devolvemos al front desde el back
const getAllCarController = async (request, response) => {
   const allCars = await getAllCarService(request) // De aca yo obtengo la lista de autos desde la DB

    // allCars -> Una lista de autos
    // allCars -> Un simpatico errorcito
    response.json(allCars)
}

const addCarController = async (request, response) => {
    const newCar = addCarService(request) // -> Insertar un auto en la DB

    response.json(newCar)
}

// Logica del controlador -> delegada -> services

// Respuesta al front

module.exports = {
    getAllCarController,
    addCarController
}