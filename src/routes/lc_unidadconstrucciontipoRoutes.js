// routes/lc_unidadconstrucciontipoRoutes.js
const express = require('express');
const router = express.Router();
const lc_unidadconstrucciontipoController = require('../controllers/lc_unidadconstrucciontipoController');

// Ruta para obtener todas las construcciones
router.get('/unidadconstruccion', lc_unidadconstrucciontipoController.getAllunidadconstruccion);

// Ruta para obtener todas las construcciones por ID
router.get('/unidadconstruccion/:id', lc_unidadconstrucciontipoController.getunidadconstruccionById);

// Ruta para crear una construcción
router.post('/unidadconstruccion', lc_unidadconstrucciontipoController.createunidadconstruccion);

// Ruta para actualizar una construcción por ID
router.put('/unidadconstruccion/:id', lc_unidadconstrucciontipoController.updateunidadconstruccion);

// Ruta para eliminar una construcción por ID
router.delete('/unidadconstruccion/:id', lc_unidadconstrucciontipoController.deleteunidadconstruccion);

module.exports = router;

