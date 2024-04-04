const express = require('express');
const router = express.Router();
const col_uefuenteController = require('../controllers/col_uefuenteController/col_uefuenteController');

// Ruta para obtener todos los registros de col_uefuente
router.get('/col_uefuente', col_uefuenteController.getAllcol_uefuente);

// Ruta para crear un nuevo registro en col_uefuente
router.post('/col_uefuente', col_uefuenteController.col_uefuentecreate);

// Ruta para obtener un registro de col_uefuente por su ID
router.get('/col_uefuente/:id', col_uefuenteController.col_uefuentegetById);

// Ruta para actualizar un registro de col_uefuente por su ID
router.put('/col_uefuente/:id', col_uefuenteController.col_uefuenteupdateById);

// Ruta para eliminar un registro de col_uefuente por su ID
router.delete('/col_uefuente/:id', col_uefuenteController.col_uefuentedeleteById);

module.exports = router;
