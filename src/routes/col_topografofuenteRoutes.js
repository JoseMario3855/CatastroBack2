const express = require('express');
const router = express.Router();
const col_topografofuenteController = require('../controllers/col_topografofuenteController/col_topografofuenteController');

// Ruta para obtener todos los registros de col_topografofuente
router.get('/col_topografofuente', col_topografofuenteController.getAllcol_topografofuente);

// Ruta para crear un nuevo registro en col_topografofuente
router.post('/col_topografofuente', col_topografofuenteController.col_topografofuentecreate);

// Ruta para obtener un registro de col_topografofuente por su ID
router.get('/col_topografofuente/:id', col_topografofuenteController.col_topografofuentegetById);

// Ruta para actualizar un registro de col_topografofuente por su ID
router.put('/col_topografofuente/:id', col_topografofuenteController.col_topografofuenteupdateById);

// Ruta para eliminar un registro de col_topografofuente por su ID
router.delete('/col_topografofuente/:id', col_topografofuenteController.col_topografofuentedeleteById);

module.exports = router;
