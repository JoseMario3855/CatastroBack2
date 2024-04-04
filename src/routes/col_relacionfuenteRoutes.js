const express = require('express');
const router = express.Router();
const col_relacionfuenteController = require('../controllers/col_relacionfuenteController/col_relacionfuenteController');

// Ruta para obtener todos los registros de col_relacionfuente
router.get('/col_relacionfuente', col_relacionfuenteController.getAllcol_relacionfuente);

// Ruta para crear un nuevo registro en col_relacionfuente
router.post('/col_relacionfuente', col_relacionfuenteController.col_relacionfuentecreate);

// Ruta para obtener un registro de col_relacionfuente por su ID
router.get('/col_relacionfuente/:id', col_relacionfuenteController.col_relacionfuentegetById);

// Ruta para actualizar un registro de col_relacionfuente por su ID
router.put('/col_relacionfuente/:id', col_relacionfuenteController.col_relacionfuenteupdateById);

// Ruta para eliminar un registro de col_relacionfuente por su ID
router.delete('/col_relacionfuente/:id', col_relacionfuenteController.col_relacionfuentedeleteById);

module.exports = router;
