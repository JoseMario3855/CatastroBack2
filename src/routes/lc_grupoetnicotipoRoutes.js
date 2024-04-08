const express = require('express');
const router = express.Router();
const lc_grupoetnicotipoController = require('../controllers/lc_grupoetnicotipoController/lc_grupoetnicotipoController');

// Ruta para obtener todos los registros de lc_grupoetnicotipo
router.get('/lc_grupoetnicotipo', lc_grupoetnicotipoController.getAlllc_grupoetnicotipo);

// Ruta para crear un nuevo registro en lc_grupoetnicotipo
router.post('/lc_grupoetnicotipo', lc_grupoetnicotipoController.lc_grupoetnicotipocreate);

// Ruta para obtener un registro de lc_grupoetnicotipo por su ID
router.get('/lc_grupoetnicotipo/:id', lc_grupoetnicotipoController.lc_grupoetnicotipogetById);

// Ruta para actualizar un registro de lc_grupoetnicotipo por su ID
router.put('/lc_grupoetnicotipo/:id', lc_grupoetnicotipoController.lc_grupoetnicotipoupdateById);

// Ruta para eliminar un registro de lc_grupoetnicotipo por su ID
router.delete('/lc_grupoetnicotipo/:id', lc_grupoetnicotipoController.lc_grupoetnicotipodeleteById);

module.exports = router;
