const express = require('express');
const router = express.Router();
const  col_interpolaciontipoController= require('../controllers/col_interpolaciontipoController/col_interpolaciontipoController');


// Ruta para obtener todas las col_interpolaciontipo
router.get('/col_interpolaciontipo', col_interpolaciontipoController.getAllcol_interpolaciontipo);

// Ruta para obtener todas las col_interpolaciontipo por ID
router.get('/col_interpolaciontipo/:id', col_interpolaciontipoController.col_interpolaciontipogetById);

// Ruta para crear una todas las col_interpolaciontipo
router.post('/col_interpolaciontipo', col_interpolaciontipoController.col_interpolaciontipocreate);

// Ruta para actualizar una col_interpolaciontipo por ID
router.put('/col_interpolaciontipo/:id', col_interpolaciontipoController.col_interpolaciontipoupdateById);

// Ruta para eliminar una col_interpolaciontipo por ID
router.delete('/col_interpolaciontipo/:id', col_interpolaciontipoController.col_interpolaciontipodeleteById);

module.exports = router;

