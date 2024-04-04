const express = require('express');
const router = express.Router();
const lc_anexotipoController = require('../controllers/lc_anexotipoController/lc_anexotipoController');

// Ruta para obtener todos los registros de lc_anexotipo
router.get('/lc_anexotipo', lc_anexotipoController.getAlllc_anexotipo);

// Ruta para crear un nuevo registro en lc_anexotipo
router.post('/lc_anexotipo', lc_anexotipoController.lc_anexotipocreate);

// Ruta para obtener un registro de lc_anexotipo por su ID
router.get('/lc_anexotipo/:id', lc_anexotipoController.lc_anexotipogetById);

// Ruta para actualizar un registro de lc_anexotipo por su ID
router.put('/lc_anexotipo/:id', lc_anexotipoController.lc_anexotipoupdateById);

// Ruta para eliminar un registro de lc_anexotipo por su ID
router.delete('/lc_anexotipo/:id', lc_anexotipoController.lc_anexotipodeleteById);

module.exports = router;
