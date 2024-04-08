const express = require('express');
const router = express.Router();
const lc_clasesuelotipoController = require('../controllers/lc_clasesuelotipoController/lc_clasesuelotipoController');

// Ruta para obtener todos los registros de lc_clasesuelotipo
router.get('/lc_clasesuelotipo', lc_clasesuelotipoController.getAlllc_clasesuelotipo);

// Ruta para crear un nuevo registro en lc_clasesuelotipo
router.post('/lc_clasesuelotipo', lc_clasesuelotipoController.lc_clasesuelotipocreate);

// Ruta para obtener un registro de lc_clasesuelotipo por su ID
router.get('/lc_clasesuelotipo/:id', lc_clasesuelotipoController.lc_clasesuelotipogetById);

// Ruta para actualizar un registro de lc_clasesuelotipo por su ID
router.put('/lc_clasesuelotipo/:id', lc_clasesuelotipoController.lc_clasesuelotipoupdateById);

// Ruta para eliminar un registro de lc_clasesuelotipo por su ID
router.delete('/lc_clasesuelotipo/:id', lc_clasesuelotipoController.lc_clasesuelotipodeleteById);

module.exports = router;
