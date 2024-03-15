// routes/lc_calificacionnoconvencionalRoutes.js
const express = require('express');
const router = express.Router();
const lc_calificacionnoconvencionalController = require('../controllers/lc_calificacionnoconvencionalController/lc_calificacionnoconvencionalController');

// Ruta para obtener todas las Calificaciones no convencionales
router.get('/calificacionnoconvencional', lc_calificacionnoconvencionalController.getAllCalificacionesNoConvencionales);

// Ruta para obtener una Calificación no convencionales por ID
router.get('/calificacionnoconvencional/:id', lc_calificacionnoconvencionalController.getCalificacionNoConvencionalById);

// Ruta para crear una Calificación no convencionales
router.post('/calificacionnoconvencional', lc_calificacionnoconvencionalController.createCalificacionNoConvencional);

// Ruta para actualizar una Calificación no convencionales por ID
router.put('/calificacionnoconvencional/:id', lc_calificacionnoconvencionalController.updateCalificacionNoConvencional);

// Ruta para eliminar una Calificación no convencionales por ID
router.delete('/calificacionnoconvencional/:id', lc_calificacionnoconvencionalController.deleteCalificacionNoConvencional);

module.exports = router;
