const express = require('express');
const router = express.Router();
const col_rrrfuenteController = require('../controllers/col_rrrfuenteController/col_rrrfuenteController');

// Ruta para obtener todos los registros de col_rrrfuente
router.get('/col_rrrfuente', col_rrrfuenteController.getAllcol_rrrfuente);

// Ruta para crear un nuevo registro en col_rrrfuente
router.post('/col_rrrfuente', col_rrrfuenteController.col_rrrfuentecreate);

// Ruta para obtener un registro de col_rrrfuente por su ID
router.get('/col_rrrfuente/:id', col_rrrfuenteController.col_rrrfuentegetById);

// Ruta para actualizar un registro de col_rrrfuente por su ID
router.put('/col_rrrfuente/:id', col_rrrfuenteController.col_rrrfuenteupdateById);

// Ruta para eliminar un registro de col_rrrfuente por su ID
router.delete('/col_rrrfuente/:id', col_rrrfuenteController.col_rrrfuentedeleteById);

module.exports = router;
