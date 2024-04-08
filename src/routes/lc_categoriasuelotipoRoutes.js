const express = require('express');
const router = express.Router();
const lc_categoriasuelotipoController = require('../controllers/lc_categoriasuelotipoController/lc_categoriasuelotipoController');

// Ruta para obtener todos los registros de lc_categoriasuelotipo
router.get('/lc_categoriasuelotipo', lc_categoriasuelotipoController.getAlllc_categoriasuelotipo);

// Ruta para crear un nuevo registro en lc_categoriasuelotipo
router.post('/lc_categoriasuelotipo', lc_categoriasuelotipoController.lc_categoriasuelotipocreate);

// Ruta para obtener un registro de lc_categoriasuelotipo por su ID
router.get('/lc_categoriasuelotipo/:id', lc_categoriasuelotipoController.lc_categoriasuelotipogetById);

// Ruta para actualizar un registro de lc_categoriasuelotipo por su ID
router.put('/lc_categoriasuelotipo/:id', lc_categoriasuelotipoController.lc_categoriasuelotipoupdateById);

// Ruta para eliminar un registro de lc_categoriasuelotipo por su ID
router.delete('/lc_categoriasuelotipo/:id', lc_categoriasuelotipoController.lc_categoriasuelotipodeleteById);

module.exports = router;