const express = require('express');
const router = express.Router();
const lc_puntolevantamientoController = require('../controllers/lc_puntolevantamientoController/lc_puntolevantamientoController');

// Ruta para obtener todos los registros de lc_puntolevantamiento
router.get('/lc_puntolevantamiento', lc_puntolevantamientoController.getAlllc_puntolevantamiento);

// Ruta para crear un nuevo registro en lc_puntolevantamiento
router.post('/lc_puntolevantamiento', lc_puntolevantamientoController.lc_puntolevantamientocreate);

// Ruta para obtener un registro de lc_puntolevantamiento por su ID
router.get('/lc_puntolevantamiento/:id', lc_puntolevantamientoController.lc_puntolevantamientogetById);

// Ruta para actualizar un registro de lc_puntolevantamiento por su ID
router.put('/lc_puntolevantamiento/:id', lc_puntolevantamientoController.lc_puntolevantamientoupdateById);

// Ruta para eliminar un registro de lc_puntolevantamiento por su ID
router.delete('/lc_puntolevantamiento/:id', lc_puntolevantamientoController.lc_puntolevantamientodeleteById);

module.exports = router;
