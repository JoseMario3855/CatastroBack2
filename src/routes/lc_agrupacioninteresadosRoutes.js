const express = require('express');
const router = express.Router();
const lc_agrupacioninteresadosController = require('../controllers/lc_agrupacioninteresadosController/lc_agrupacioninteresadosController');

// Ruta para obtener todos los registros de lc_agrupacioninteresados
router.get('/lc_agrupacioninteresados', lc_agrupacioninteresadosController.getAlllc_agrupacioninteresados);

// Ruta para crear un nuevo registro en lc_agrupacioninteresados
router.post('/lc_agrupacioninteresados', lc_agrupacioninteresadosController.lc_agrupacioninteresadoscreate);

// Ruta para obtener un registro de lc_agrupacioninteresados por su ID
router.get('/lc_agrupacioninteresados/:id', lc_agrupacioninteresadosController.lc_agrupacioninteresadosgetById);

// Ruta para actualizar un registro de lc_agrupacioninteresados por su ID
router.put('/lc_agrupacioninteresados/:id', lc_agrupacioninteresadosController.lc_agrupacioninteresadosupdateById);

// Ruta para eliminar un registro de lc_agrupacioninteresados por su ID
router.delete('/lc_agrupacioninteresados/:id', lc_agrupacioninteresadosController.lc_agrupacioninteresadosdeleteById);

module.exports = router;
