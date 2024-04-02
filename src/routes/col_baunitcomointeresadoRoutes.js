const express = require('express');
const router = express.Router();
const  col_baunitcomointeresadoController= require('../controllers/col_baunitcomointeresadoController/col_baunitcomointeresadoController');


// Ruta para obtener todas las col_baunitcomointeresado
router.get('/col_baunitcomointeresado', col_baunitcomointeresadoController.getAllcol_baunitcomointeresado);

// Ruta para obtener todas las col_baunitcomointeresado por ID
router.get('/ col_baunitcomointeresado/:id', col_baunitcomointeresadoController.col_baunitcomointeresadoById);

// Ruta para crear una todas las col_baunitcomointeresado
router.post('/col_baunitcomointeresado', col_baunitcomointeresadoController.createcol_baunitcomointeresado);

// Ruta para actualizar una col_baunitcomointeresado por ID
router.put('/col_baunitcomointeresado/:id', col_baunitcomointeresadoController.ACcol_baunitcomointeresadoById);

// Ruta para eliminar una col_baunitcomointeresado por ID
router.delete('/col_baunitcomointeresado/:id', col_baunitcomointeresadoController.col_baunitcomointeresadodeleteById);

module.exports = router;
