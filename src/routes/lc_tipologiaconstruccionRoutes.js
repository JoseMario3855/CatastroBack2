// routes/lc_tipologiaconstruccionController.js
const express = require('express');
const router = express.Router();
const lc_tipologiaconstruccionController = require('../controllers/lc_tipologiaconstruccionController/lc_tipologiaconstruccionController');

// Ruta para obtener la tipologia de construccion
router.get('/tipologiaconstruccion', lc_tipologiaconstruccionController.getAllTipologiasConstruccion);

// Ruta para obtener la tipologia de construccion  por ID
router.get('/tipologiaconstruccion/:id', lc_tipologiaconstruccionController.getTipologiaConstruccionById);

// Ruta para crear la tipologia de construccion
router.post('/tipologiaconstruccion', lc_tipologiaconstruccionController.createTipologiaConstruccion);

// Ruta para actualizar la tipologia de construccion
router.put('/tipologiaconstruccion/:id', lc_tipologiaconstruccionController.updateTipologiaConstruccion);

// Ruta para eliminar la tipologia de construccion por ID
router.delete('/tipologiaconstruccion/:id', lc_tipologiaconstruccionController.deleteTipologiaConstruccion);

module.exports = router;

