const express = require('express');
const router = express.Router();
const lc_interesadotipoController = require('../controllers/lc_interesadotipoController/lc_interesadotipoController');

// Ruta para obtener todos los registros de lc_interesadotipo
router.get('/lc_interesadotipo', lc_interesadotipoController.getAlllc_interesadotipo);

// Ruta para crear un nuevo registro en lc_interesadotipo
router.post('/lc_interesadotipo', lc_interesadotipoController.lc_interesadotipocreate);

// Ruta para obtener un registro de lc_interesadotipo por su ID
router.get('/lc_interesadotipo/:id', lc_interesadotipoController.lc_interesadotipogetById);

// Ruta para actualizar un registro de lc_interesadotipo por su ID
router.put('/lc_interesadotipo/:id', lc_interesadotipoController.lc_interesadotipoupdateById);

// Ruta para eliminar un registro de lc_interesadotipo por su ID
router.delete('/lc_interesadotipo/:id', lc_interesadotipoController.lc_interesadotipodeleteById);

module.exports = router;
