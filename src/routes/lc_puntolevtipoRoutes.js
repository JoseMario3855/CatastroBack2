const express = require('express');
const router = express.Router();
const lc_puntolevtipoController = require('../controllers/lc_puntolevtipoController/lc_puntolevtipoController');

// Ruta para obtener todos los registros de lc_puntolevtipo
router.get('/lc_puntolevtipo', lc_puntolevtipoController.getAlllc_puntolevtipo);

// Ruta para crear un nuevo registro en lc_puntolevtipo
router.post('/lc_puntolevtipo', lc_puntolevtipoController.lc_puntolevtipocreate);

// Ruta para obtener un registro de lc_puntolevtipo por su ID
router.get('/lc_puntolevtipo/:id', lc_puntolevtipoController.lc_puntolevtipogetById);

// Ruta para actualizar un registro de lc_puntolevtipo por su ID
router.put('/lc_puntolevtipo/:id', lc_puntolevtipoController.lc_puntolevtipoupdateById);

// Ruta para eliminar un registro de lc_puntolevtipo por su ID
router.delete('/lc_puntolevtipo/:id', lc_puntolevtipoController.lc_puntolevtipodeleteById);

module.exports = router;
