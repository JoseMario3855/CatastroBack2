// routes/lc_calificacionnoconvencionalRoutes.js
const express = require('express');
const router = express.Router();
const lc_calificacionnoconvencionalController = require('../controllers/lc_calificacionnoconvencionalController');

// Ruta para obtener todas las Calificaciones no convencionales
router.get('/calificacionnoconvencional', lc_calificacionnoconvencionalController.getAllcalificacionnoconvencional);

// Ruta para obtener una Calificación no convencionales por ID
router.get('/calificacionnoconvencional/:id', lc_calificacionnoconvencionalController.getcalificacionnoconvencionalById);

// Ruta para crear una Calificación no convencionales
router.post('/calificacionnoconvencional', lc_calificacionnoconvencionalController.createcalificacionnoconvencional);

// Ruta para actualizar una Calificación no convencionales por ID
router.put('/calificacionnoconvencional/:id', lc_calificacionnoconvencionalController.updatecalificacionnoconvencional);

// Ruta para eliminar una Calificación no convencionales por ID
router.delete('/calificacionnoconvencional/:id', lc_calificacionnoconvencionalController.deletecalificacionnoconvencional);

module.exports = router;
