const express = require('express');
const router = express.Router();
const lc_predio_ini_predioinsumosController = require('../controllers/lc_predio_ini_predioinsumosController/lc_predio_ini_predioinsumosController');

// Ruta para obtener todos los registros de lc_predio_ini_predioinsumos
router.get('/lc_predio_ini_predioinsumos', lc_predio_ini_predioinsumosController.getAlllc_predio_ini_predioinsumos);

// Ruta para crear un nuevo registro en lc_predio_ini_predioinsumos
router.post('/lc_predio_ini_predioinsumos', lc_predio_ini_predioinsumosController.lc_predio_ini_predioinsumoscreate);

// Ruta para obtener un registro de lc_predio_ini_predioinsumos por su ID
router.get('/lc_predio_ini_predioinsumos/:id', lc_predio_ini_predioinsumosController.lc_predio_ini_predioinsumosgetById);

// Ruta para actualizar un registro de lc_predio_ini_predioinsumos por su ID
router.put('/lc_predio_ini_predioinsumos/:id', lc_predio_ini_predioinsumosController.lc_predio_ini_predioinsumosupdateById);

// Ruta para eliminar un registro de lc_predio_ini_predioinsumos por su ID
router.delete('/lc_predio_ini_predioinsumos/:id', lc_predio_ini_predioinsumosController.lc_predio_ini_predioinsumosdeleteById);

module.exports = router;
