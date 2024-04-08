const express = require('express');
const router = express.Router();
const lc_puntocontroltipoController = require('../controllers/lc_puntocontroltipoController/lc_puntocontroltipoController');

// Ruta para obtener todos los registros de lc_puntocontroltipo
router.get('/lc_puntocontroltipo', lc_puntocontroltipoController.getAlllc_puntocontroltipo);

// Ruta para crear un nuevo registro en lc_puntocontroltipo
router.post('/lc_puntocontroltipo', lc_puntocontroltipoController.lc_puntocontroltipocreate);

// Ruta para obtener un registro de lc_puntocontroltipo por su ID
router.get('/lc_puntocontroltipo/:id', lc_puntocontroltipoController.lc_puntocontroltipogetById);

// Ruta para actualizar un registro de lc_puntocontroltipo por su ID
router.put('/lc_puntocontroltipo/:id', lc_puntocontroltipoController.lc_puntocontroltipoupdateById);

// Ruta para eliminar un registro de lc_puntocontroltipo por su ID
router.delete('/lc_puntocontroltipo/:id', lc_puntocontroltipoController.lc_puntocontroltipodeleteById);

module.exports = router;
