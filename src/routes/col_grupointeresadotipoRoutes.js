const express = require('express');
const router = express.Router();
const  col_grupointeresadotipoController= require('../controllers/col_grupointeresadotipoController/col_grupointeresadotipoController');


// Ruta para obtener todas las col_grupointeresadotipo
router.get('/col_grupointeresadotipo', col_grupointeresadotipoController.getAllcol_grupointeresadotipo);

// Ruta para obtener todas las col_grupointeresadotipo por ID
router.get('/col_grupointeresadotipo/:id', col_grupointeresadotipoController.col_grupointeresadotipogetById);

// Ruta para crear una todas las col_grupointeresadotipo
router.post('/col_grupointeresadotipo', col_grupointeresadotipoController.col_grupointeresadotipocreate);

// Ruta para actualizar una col_grupointeresadotipo por ID
router.put('/col_grupointeresadotipo/:id', col_grupointeresadotipoController.col_grupointeresadotipoupdateById);

// Ruta para eliminar una col_grupointeresadotipo por ID
router.delete('/col_grupointeresadotipo/:id', col_grupointeresadotipoController.col_grupointeresadotipodeleteById);

module.exports = router;

