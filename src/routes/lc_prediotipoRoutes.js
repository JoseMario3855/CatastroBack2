const express = require('express');
const router = express.Router();
const lc_prediotipoController = require('../controllers/lc_prediotipoController/lc_prediotipoController');

// Ruta para obtener todos los registros de lc_prediotipo
router.get('/lc_prediotipo', lc_prediotipoController.getAlllc_prediotipo);

// Ruta para crear un nuevo registro en lc_prediotipo
router.post('/lc_prediotipo', lc_prediotipoController.lc_prediotipocreate);

// Ruta para obtener un registro de lc_prediotipo por su ID
router.get('/lc_prediotipo/:id', lc_prediotipoController.lc_prediotipogetById);

// Ruta para actualizar un registro de lc_prediotipo por su ID
router.put('/lc_prediotipo/:id', lc_prediotipoController.lc_prediotipoupdateById);

// Ruta para eliminar un registro de lc_prediotipo por su ID
router.delete('/lc_prediotipo/:id', lc_prediotipoController.lc_prediotipodeleteById);

module.exports = router;
