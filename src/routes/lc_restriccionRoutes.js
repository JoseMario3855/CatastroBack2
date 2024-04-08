const express = require('express');
const router = express.Router();
const lc_restriccionController = require('../controllers/lc_restriccionController/lc_restriccionController');

// Ruta para obtener todos los registros de lc_restriccion
router.get('/lc_restriccion', lc_restriccionController.getAlllc_restriccion);

// Ruta para crear un nuevo registro en lc_restriccion
router.post('/lc_restriccion', lc_restriccionController.lc_restriccioncreate);

// Ruta para obtener un registro de lc_restriccion por su ID
router.get('/lc_restriccion/:id', lc_restriccionController.lc_restricciongetById);

// Ruta para actualizar un registro de lc_restriccion por su ID
router.put('/lc_restriccion/:id', lc_restriccionController.lc_restriccionupdateById);

// Ruta para eliminar un registro de lc_restriccion por su ID
router.delete('/lc_restriccion/:id', lc_restriccionController.lc_restricciondeleteById);

module.exports = router;
