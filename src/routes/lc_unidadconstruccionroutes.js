// routes/lc_unidadconstruccionController.js
const express = require('express');
const router = express.Router();
const lc_unidadconstruccionController = require('../controllers/lc_unidadconstruccionController/lc_unidadconstruccionController');

// Ruta para obtener la unidad de construccion
router.get('/unidadconstruccion', lc_unidadconstruccionController.getAllunidadconstruccion);

// Ruta para obtener la unidad de construccion  por ID
router.get('/unidadconstruccion/:id', lc_unidadconstruccionController.getunidadconstruccionyId);

// Ruta para crear la unidad de construccion
router.post('/unidadconstruccion', lc_unidadconstruccionController.createunidadconstruccion);

// Ruta para actualizar la unidad de construccion
router.put('/unidadconstruccion/:id', lc_unidadconstruccionController.updateunidadconstruccion);

// Ruta para eliminar la unidad de construccion por ID
router.delete('/unidadconstruccion/:id', lc_unidadconstruccionController.deleteunidadconstruccion);

module.exports = router;
