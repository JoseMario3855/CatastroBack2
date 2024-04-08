const express = require('express');
const router = express.Router();
const lc_condicionprediotipoController = require('../controllers/lc_condicionprediotipoController/lc_condicionprediotipoController');

// Ruta para obtener todos los registros de lc_condicionprediotipo
router.get('/lc_condicionprediotipo', lc_condicionprediotipoController.getAlllc_condicionprediotipo);

// Ruta para crear un nuevo registro en lc_condicionprediotipo
router.post('/lc_condicionprediotipo', lc_condicionprediotipoController.lc_condicionprediotipocreate);

// Ruta para obtener un registro de lc_condicionprediotipo por su ID
router.get('/lc_condicionprediotipo/:id', lc_condicionprediotipoController.lc_condicionprediotipogetById);

// Ruta para actualizar un registro de lc_condicionprediotipo por su ID
router.put('/lc_condicionprediotipo/:id', lc_condicionprediotipoController.lc_condicionprediotipoupdateById);

// Ruta para eliminar un registro de lc_condicionprediotipo por su ID
router.delete('/lc_condicionprediotipo/:id', lc_condicionprediotipoController.lc_condicionprediotipodeleteById);

module.exports = router;
