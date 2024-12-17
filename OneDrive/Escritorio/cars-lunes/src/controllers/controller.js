const {
  getAllCarService,
  addCarService,
  getCarByIdService,
  updateCarService,
  deleteCarService
} = require("../services/service");

// request es el objeto de peticion que nos manda el front
// response es el objeto que le devolvemos al front desde el back
const getAllCarController = async (request, response) => {
  const allCars = await getAllCarService(request); // De aca yo obtengo la lista de autos desde la DB

  // allCars -> Una lista de autos
  // allCars -> Un simpatico errorcito
  response.json(allCars);
};

const getCarByIdController = async (request, response) => {
  const carById = await getCarByIdService(request);

  response.json(carById);
};

const addCarController = async (request, response) => {
  const newCar = addCarService(request); // -> Insertar un auto en la DB

  response.json(newCar);
};

const updateCarController = async (request, response) => {
  const carToEdit = updateCarService(request); // -> Edita un auto en la DB

  response.json(carToEdit);
};

const deleteCarController = async (request, response) => {
  const carToDelete = deleteCarService(request); // -> Elimina un auto en la DB

  response.json(carToDelete);
};

deleteCarController;

// Logica del controlador -> delegada -> services

// Respuesta al front

module.exports = {
  getAllCarController,
  addCarController,
  getCarByIdController,
  updateCarController,
  deleteCarController,
};
