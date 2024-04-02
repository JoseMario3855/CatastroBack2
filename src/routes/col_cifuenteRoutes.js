const express = require('express');
const router = express.Router();
const  col_cifuenteController= require('../controllers/col_cifuenteController/col_cifuenteController');


// Ruta para obtener todas las col_baunitcomointeresado
router.get('/col_cifuente', col_cifuenteController.getAllcol_cifuente);

// Ruta para obtener todas las col_baunitcomointeresado por ID
router.get('/col_cifuente/:id', col_cifuenteController.col_cifuenterById);

// Ruta para crear una todas las col_baunitcomointeresado
router.post('/col_cifuente', col_cifuenteController.createcol_cifuente);

// Ruta para actualizar una col_baunitcomointeresado por ID
router.put('/col_cifuente/:id', col_cifuenteController.ACcol_cifuenteById);

// Ruta para eliminar una col_baunitcomointeresado por ID
router.delete('/col_cifuente/:id', col_cifuenteController.col_cifuenteeById);

module.exports = router;
