// routes/lc_construcciontipoController.js
const express = require('express');
const router = express.Router();
const lc_construcciontipoController = require('../controllers/lc_construcciontipoController');

// Ruta para obtener tipo de construccion
router.get('/construcciontipo', lc_construcciontipoController.getAllconstrucciontipo);

// Ruta para obtener los tipos de construccion por ID
router.get('/construcciontipo/:id', lc_construcciontipoController.getconstrucciontipoById);

// Ruta para crear tipos de construccion
router.post('/construcciontipo', lc_construcciontipoController.createconstrucciontipo);

// Ruta para actualizar los tipos de construccion
router.put('/construcciontipo/:id', lc_construcciontipoController.updateconstrucciontipo);

// Ruta para eliminar los tipos de construccion por ID
router.delete('/construcciontipo/:id', lc_construcciontipoController.deleteconstrucciontipo);

module.exports = router;
