const express = require('express');
const router = express.Router();
const col_responsablefuenteController = require('../controllers/col_responsablefuenteController/col_responsablefuenteController');

// Ruta para obtener todos los registros de col_responsablefuente
router.get('/col_responsablefuente', col_responsablefuenteController.getAllcol_responsablefuente);

// Ruta para crear un nuevo registro en col_responsablefuente
router.post('/col_responsablefuente', col_responsablefuenteController.col_responsablefuentecreate);

// Ruta para obtener un registro de col_responsablefuente por su ID
router.get('/col_responsablefuente/:id', col_responsablefuenteController.col_responsablefuentegetById);

// Ruta para actualizar un registro de col_responsablefuente por su ID
router.put('/col_responsablefuente/:id', col_responsablefuenteController.col_responsablefuenteupdateById);

// Ruta para eliminar un registro de col_responsablefuente por su ID
router.delete('/col_responsablefuente/:id', col_responsablefuenteController.col_responsablefuentedeleteById);

module.exports = router;
