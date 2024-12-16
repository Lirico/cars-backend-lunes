const express = require('express');
const {getAllCarController, addCarController} = require('../controllers/controller')

// Configurar los routers
const router = express.Router();

// Definir las rutas correspondientes al router de esta hoja
router.get('/car', getAllCarController)
router.post('/car', addCarController)


// Logica de las rutas -> delegado -> controller


module.exports = router;