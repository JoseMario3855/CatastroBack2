// routes/lc_construccionplantatipoRoutes.js
const express = require('express');
const router = express.Router();
const lc_construccionplantatipoController = require('../controllers/lc_construccionplantatipoController/lc_construccionplantatipoController');

// Ruta para obtener todas las Construcciones planta tipo
router.get('/construccionplantatipo', lc_construccionplantatipoController.getAllConstruccionesPlantaTipo);

// Ruta para obtener una Construcción planta tipo por ID
router.get('/construccionplantatipo/:id', lc_construccionplantatipoController.getConstruccionPlantaTipoById);

// Ruta para crear una Construcción planta tipo
router.post('/construccionplantatipo', lc_construccionplantatipoController.createConstruccionPlantaTipo);

// Ruta para actualizar una Construcción planta tipo por ID
router.put('/construccionplantatipo/:id', lc_construccionplantatipoController.updateConstruccionPlantaTipo);

// Ruta para eliminar una Construcción planta tipo por ID
router.delete('/construccionplantatipo/:id', lc_construccionplantatipoController.deleteConstruccionPlantaTipo);

module.exports = router;
