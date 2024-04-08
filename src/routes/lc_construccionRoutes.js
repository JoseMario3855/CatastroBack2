const express = require('express');
const router = express.Router();
const lc_construccionController = require('../controllers/lc_construccionController/lc_construccionController');

// Ruta para obtener todos los registros de lc_construccion
router.get('/lc_construccion', lc_construccionController.getAllConstrucciones);

// Ruta para crear un nuevo registro en lc_construccion
router.post('/lc_construccion', lc_construccionController.createConstrucciones);

// Ruta para obtener un registro de lc_construccion por su ID
router.get('/lc_construccion/:id', lc_construccionController.getConstruccionesyId);

// Ruta para actualizar un registro de lc_construccion por su ID
router.put('/lc_construccion/:id', lc_construccionController.updateConstrucciones);

// Ruta para eliminar un registro de lc_construccion por su ID
router.delete('/lc_construccion/:id', lc_construccionController.deleteConstrucciones);

module.exports = router;
