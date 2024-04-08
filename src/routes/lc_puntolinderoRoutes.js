const express = require('express');
const router = express.Router();
const lc_puntolinderoController = require('../controllers/lc_puntolinderoController/lc_puntolinderoController');

// Ruta para obtener todos los registros de lc_puntolindero
router.get('/lc_puntolindero', lc_puntolinderoController.getAlllc_puntolindero);

// Ruta para crear un nuevo registro en lc_puntolindero
router.post('/lc_puntolindero', lc_puntolinderoController.lc_puntolinderocreate);

// Ruta para obtener un registro de lc_puntolindero por su ID
router.get('/lc_puntolindero/:id', lc_puntolinderoController.lc_puntolinderogetById);

// Ruta para actualizar un registro de lc_puntolindero por su ID
router.put('/lc_puntolindero/:id', lc_puntolinderoController.lc_puntolinderoupdateById);

// Ruta para eliminar un registro de lc_puntolindero por su ID
router.delete('/lc_puntolindero/:id', lc_puntolinderoController.lc_puntolinderodeleteById);

module.exports = router;
