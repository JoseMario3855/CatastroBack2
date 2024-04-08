const express = require('express');
const router = express.Router();
const lc_interesadoController = require('../controllers/lc_interesadoController/lc_interesadoController');

// Ruta para obtener todos los registros de lc_interesado
router.get('/lc_interesado', lc_interesadoController.getAlllc_interesado);

// Ruta para crear un nuevo registro en lc_interesado
router.post('/lc_interesado', lc_interesadoController.lc_interesadocreate);

// Ruta para obtener un registro de lc_interesado por su ID
router.get('/lc_interesado/:id', lc_interesadoController.lc_interesadogetById);

// Ruta para actualizar un registro de lc_interesado por su ID
router.put('/lc_interesado/:id', lc_interesadoController.lc_interesadoupdateById);

// Ruta para eliminar un registro de lc_interesado por su ID
router.delete('/lc_interesado/:id', lc_interesadoController.lc_interesadodeleteById);

module.exports = router;
