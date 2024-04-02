const express = require('express');
const router = express.Router();
const  col_baunitfuenteController= require('../controllers/col_baunitfuenteController/col_baunitfuenteController');


// Ruta para obtener todas las col_baunitfuente
router.get('/col_baunitfuente', col_baunitfuenteController.getAllcol_baunitfuenteController);

// Ruta para obtener todas las col_baunitfuente por ID
router.get('/col_baunitfuente/:id', col_baunitfuenteController.col_baunitfuenteControllerById);

// Ruta para crear una todas las col_baunitfuente
router.post('/col_baunitfuente', col_baunitfuenteController.createcol_baunitfuenteController);

// Ruta para actualizar una col_baunitfuente por ID
router.put('/col_baunitfuente/:id', col_baunitfuenteController.ACcol_baunitfuenteControllerById);

// Ruta para eliminar una col_baunitfuente por ID
router.delete('/col_baunitfuente/:id', col_baunitfuenteController.col_baunitfuenteControllerdeleteById);

module.exports = router;
