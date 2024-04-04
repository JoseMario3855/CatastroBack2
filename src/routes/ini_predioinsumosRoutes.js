const express = require('express');
const router = express.Router();
const ini_predioinsumosController = require('../controllers/ini_predioinsumosController/ini_predioinsumosController');

// Ruta para obtener todos los registros de ini_predioinsumos
router.get('/ini_predioinsumos', ini_predioinsumosController.getAllini_predioinsumos);

// Ruta para crear un nuevo registro en ini_predioinsumos
router.post('/ini_predioinsumos', ini_predioinsumosController.ini_predioinsumoscreate);

// Ruta para obtener un registro de ini_predioinsumos por su ID
router.get('/ini_predioinsumos/:id', ini_predioinsumosController.ini_predioinsumosgetById);

// Ruta para actualizar un registro de ini_predioinsumos por su ID
router.put('/ini_predioinsumos/:id', ini_predioinsumosController.ini_predioinsumosupdateById);

// Ruta para eliminar un registro de ini_predioinsumos por su ID
router.delete('/ini_predioinsumos/:id', ini_predioinsumosController.ini_predioinsumosdeleteById);

module.exports = router;
