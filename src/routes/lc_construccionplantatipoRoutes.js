// routes/lc_construccionplantatipoRoutes.js
const express = require('express');
const router = express.Router();
const lc_construccionplantatipoController = require('../controllers/lc_construccionplantatipoController');

// Ruta para obtener todas las Construcciones planta tipo
router.get('/construccionplantatipo', lc_construccionplantatipoController.getAllconstruccionplantatipo);

// Ruta para obtener una Construcción planta tipo por ID
router.get('/construccionplantatipo/:id', lc_construccionplantatipoController.getconstruccionplantatipoById);

// Ruta para crear una Construcción planta tipo
router.post('/construccionplantatipo', lc_construccionplantatipoController.createconstruccionplantatipo);

// Ruta para actualizar una Construcción planta tipo por ID
router.put('/construccionplantatipo/:id', lc_construccionplantatipoController.updateconstruccionplantatipo);

// Ruta para eliminar una Construcción planta tipo por ID
router.delete('/construccionplantatipo/:id', lc_construccionplantatipoController.deleteconstruccionplantatipo);

module.exports = router;
