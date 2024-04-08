const express = require('express');
const router = express.Router();
const lc_predio_informalidadController = require('../controllers/lc_predio_informalidadController/lc_predio_informalidadController');

// Ruta para obtener todos los registros de lc_predio_informalidad
router.get('/lc_predio_informalidad', lc_predio_informalidadController.getAlllc_predio_informalidad);

// Ruta para crear un nuevo registro en lc_predio_informalidad
router.post('/lc_predio_informalidad', lc_predio_informalidadController.lc_predio_informalidadcreate);

// Ruta para obtener un registro de lc_predio_informalidad por su ID
router.get('/lc_predio_informalidad/:id', lc_predio_informalidadController.lc_predio_informalidadgetById);

// Ruta para actualizar un registro de lc_predio_informalidad por su ID
router.put('/lc_predio_informalidad/:id', lc_predio_informalidadController.lc_predio_informalidadupdateById);

// Ruta para eliminar un registro de lc_predio_informalidad por su ID
router.delete('/lc_predio_informalidad/:id', lc_predio_informalidadController.lc_predio_informalidaddeleteById);

module.exports = router;
