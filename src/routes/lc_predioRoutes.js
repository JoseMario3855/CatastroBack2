const express = require('express');
const router = express.Router();
const lc_predioController = require('../controllers/lc_predioController/lc_prediocontroller');



// Ruta para obtener todos los predios
router.get('/predios', lc_predioController.getAllPredios);

// Ruta para obtener un predio por ID
router.get('/predios/:id', lc_predioController.getPredioById);

// Ruta para crear un nuevo predio
router.post('/predios', lc_predioController.createPredio);

// Ruta para actualizar un predio por ID
router.put('/predios/:id', lc_predioController.updatePredioById);

// Ruta para eliminar un predio por ID
router.delete('/predios/:id', lc_predioController.deletePredioById);



module.exports = router;
