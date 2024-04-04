const express = require('express');
const router = express.Router();
const  col_dimensiontipoController= require('../controllers/col_dimensiontipoController/col_dimensiontipoController');


// Ruta para obtener todas las col_dimensiontipo
router.get('/col_dimensiontipo', col_dimensiontipoController.getAllcol_dimensiontipo);

// Ruta para obtener todas las col_dimensiontipo por ID
router.get('/col_dimensiontipo/:id', col_dimensiontipoController.col_dimensiontipoById);

// Ruta para crear una todas las col_dimensiontipo
router.post('/col_dimensiontipo', col_dimensiontipoController.createcol_dimensiontipo);

// Ruta para actualizar una col_dimensiontipo por ID
router.put('/col_dimensiontipo/:id', col_dimensiontipoController.ACcol_dimensiontipooById);

// Ruta para eliminar una col_dimensiontipo por ID
router.delete('/col_dimensiontipo/:id', col_dimensiontipoController.col_dimensiontipoById);

module.exports = router;
