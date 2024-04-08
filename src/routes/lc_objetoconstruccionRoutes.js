const express = require('express');
const router = express.Router();
const lc_objetoconstruccionController = require('../controllers/lc_objetoconstruccionController/lc_objetoconstruccionController');

// Ruta para obtener todos los registros de lc_objetoconstruccion
router.get('/lc_objetoconstruccion', lc_objetoconstruccionController.getAlllc_objetoconstruccion);

// Ruta para crear un nuevo registro en lc_objetoconstruccion
router.post('/lc_objetoconstruccion', lc_objetoconstruccionController.lc_objetoconstruccioncreate);

// Ruta para obtener un registro de lc_objetoconstruccion por su ID
router.get('/lc_objetoconstruccion/:id', lc_objetoconstruccionController.lc_objetoconstrucciongetById);

// Ruta para actualizar un registro de lc_objetoconstruccion por su ID
router.put('/lc_objetoconstruccion/:id', lc_objetoconstruccionController.lc_objetoconstruccionupdateById);

// Ruta para eliminar un registro de lc_objetoconstruccion por su ID
router.delete('/lc_objetoconstruccion/:id', lc_objetoconstruccionController.lc_objetoconstrucciondeleteById);

module.exports = router;
