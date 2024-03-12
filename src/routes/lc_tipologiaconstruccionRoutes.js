// routes/lc_tipologiaconstruccionController.js
const express = require('express');
const router = express.Router();
const lc_tipologiaconstruccionController = require('../controllers/lc_tipologiaconstruccionController');

// Ruta para obtener la tipologia de construccion
router.get('/tipologiaconstruccion', lc_tipologiaconstruccionController.getAlltipologiaconstruccion);

// Ruta para obtener la tipologia de construccion  por ID
router.get('/tipologiaconstruccion/:id', lc_tipologiaconstruccionController.gettipologiaconstruccionById);

// Ruta para crear la tipologia de construccion
router.post('/tipologiaconstruccion', lc_tipologiaconstruccionController.createtipologiaconstruccion);

// Ruta para actualizar la tipologia de construccion
router.put('/tipologiaconstruccion/:id', lc_tipologiaconstruccionController.updatetipologiaconstruccion);

// Ruta para eliminar la tipologia de construccion por ID
router.delete('/tipologiaconstruccion/:id', lc_tipologiaconstruccionController.deletetipologiaconstruccion);

module.exports = router;

