const express = require("express");
const {
  getAllCarController,
  addCarController,
  getCarByIdController,
  updateCarController,
  deleteCarController,
} = require("../controllers/controller");
const checkCarTypes = require('../utils/checkCarTypes')

// Configurar los routers
const router = express.Router();

// Definir las rutas correspondientes al router de esta hoja
router.get("/car", getAllCarController);
router.get("/car/:id", getCarByIdController);
router.post("/car", checkCarTypes, addCarController);
router.put("/car/:id", updateCarController);
router.delete("/car/:id", deleteCarController);

// Logica de las rutas -> delegado -> controller

module.exports = router;
