const CarModel = require("../models/car.models");

// La logica del controlador

const getAllCarService = async (request, response) => {
  // Consultamos a la DB por la lista de elementos de la coleccion cars
  const allCars = await CarModel.find();

  return allCars;
};

const getCarByIdService = async (request, response) => {
  // Para poder encontrar un auto en la colección necesito primero obtener
  // el Id del auto que necesito.
  const { id } = request.params;

  const carById = CarModel.findById(id);

  if (!carById) {
    return { message: "Car not found", statusCode: 404 };
  }

  return carById;
};

const addCarService = async (request, response) => {
  // Consultar a la DB para insertarle un autito
  // -> Que yo quiero insertar un autito tal -> Por donde me viene el autito?
  const car = request.body; // Aca esta el autito
  console.log(car);
  try {
    const newCar = new CarModel(car);

    await newCar.save();

    return { message: "Auto generado con exito", statusCode: 201 }; // 201 -> created
  } catch (error) {
    return { message: "Ocurrio un error", statusCode: 400 };
  }
};

const updateCarService = async (request, response) => {
  const { id } = request.params;
  const carToEdit = request.body;

  try {
    // Encuentra un objeto Mongo en la DB y lo convierte a JS
    const carById = await CarModel.findById(id);

    if (!carById) {
      return { message: "Car not found", statusCode: 404 };
    }

    // Queremos sobreescribir propiedad por propiedad del auto viejo con las props del auto nuevo
    carById.brand = carToEdit.brand;
    carById.model = carToEdit.model;
    carById.price = carToEdit.price;
    carById.year = carToEdit.year;
    carById.isNewCar = carToEdit.hasOwnProperty("isNewCar")
      ? carToEdit.isNewCar
      : carById.isNewCar;

    await carById.save(); // Convierte el objeto JS a Mongo y lo guarda en la DB

    return { message: "Auto editado con exito", statusCode: 200 };
  } catch (error) {
    return { message: "Ocurrio un error", statusCode: 400 };
  }
};

const deleteCarService = async (request, response) => {
  const { id } = request.params;

  try {
    const carToDelete = await CarModel.deleteOne({ _id: id }); // Un objeto y la propiedad por la cual vamos a ubicar el objeto
    // Un objeto a eliminar tiene un contador de eliminacion mientras que esta vivo.
    // Si lo elimino, su contador de eliminacion baja 0.
    // Si el contador esta en 0, significa que ya fue eliminado y no puede volver a ser eliminado
    if(carToDelete.deleteCount === 0){
        return { message: "Car Not Found", statusCode: 404}
    }
    return { message: "Auto eliminado con exito", statusCode: 200 }
  } catch (error) {
    return { message: "Ocurrio un error", statusCode: 400 };
  }
};

module.exports = {
  getAllCarService,
  addCarService,
  getCarByIdService,
  updateCarService,
  deleteCarService,
};
