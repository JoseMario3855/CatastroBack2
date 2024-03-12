// routes/lc_calificacionconvencionalRoutes.js
const express = require('express');
const router = express.Router();
const lc_calificacionconvecionalController = require('../controllers/lc_calificacionconvecionalController/lc_calificacionconvecionalController');


// Ruta para obtener todas las Calificaciones convecionales
router.get('/calificacionconvecional', lc_calificacionconvecionalController.getAllcalificacionconvecional);

// Ruta para obtener todas las Calificaciones convecionales por ID
router.get('/calificacionconvecional/:id', lc_calificacionconvecionalController.getcalificacionconvecionalById);

// Ruta para crear una todas las Calificaciones convecionales
router.post('/calificacionconvecional', lc_calificacionconvecionalController.createcalificacionconvecional);

// Ruta para actualizar una Calificacion convecional por ID
router.put('/calificacionconvecional/:id', lc_calificacionconvecionalController.updatecalificacionconvecional);

// Ruta para eliminar una Calificacion convecional por ID
router.delete('/calificacionconvecional/:id', lc_calificacionconvecionalController.deletecalificacionconvecional);

module.exports = router;
