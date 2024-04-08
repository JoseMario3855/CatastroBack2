const express = require('express');
const router = express.Router();
const lc_terrenoController = require('../controllers/lc_terrenoController/lc_terrenoController');

// Ruta para obtener todos los registros de lc_terreno
router.get('/lc_terreno', lc_terrenoController.getAlllc_terreno);

// Ruta para crear un nuevo registro en lc_terreno
router.post('/lc_terreno', lc_terrenoController.lc_terrenocreate);

// Ruta para obtener un registro de lc_terreno por su ID
router.get('/lc_terreno/:id', lc_terrenoController.lc_terrenogetById);

// Ruta para actualizar un registro de lc_terreno por su ID
router.put('/lc_terreno/:id', lc_terrenoController.lc_terrenoupdateById);

// Ruta para eliminar un registro de lc_terreno por su ID
router.delete('/lc_terreno/:id', lc_terrenoController.lc_terrenodeleteById);

module.exports = router;
