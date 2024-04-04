const express = require('express');
const router = express.Router();
const  col_iso19125_tipoController= require('../controllers/col_iso19125_tipoController/col_iso19125_tipoController');


// Ruta para obtener todas las col_iso19125_tipo
router.get('/col_iso19125_tipo', col_iso19125_tipoController.getAllcol_iso19125_tipo);

// Ruta para obtener todas las col_iso19125_tipo por ID
router.get('/col_iso19125_tipo/:id', col_iso19125_tipoController.col_iso19125_tipogetById);

// Ruta para crear una todas las col_iso19125_tipo
router.post('/col_iso19125_tipo', col_iso19125_tipoController.col_iso19125_tipocreate);

// Ruta para actualizar una col_iso19125_tipo por ID
router.put('/col_iso19125_tipo/:id', col_iso19125_tipoController.col_iso19125_tipoupdateById);

// Ruta para eliminar una col_iso19125_tipo por ID
router.delete('/col_iso19125_tipo/:id', col_iso19125_tipoController.col_iso19125_tipodeleteById);

module.exports = router;

