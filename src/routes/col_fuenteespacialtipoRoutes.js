const express = require('express');
const router = express.Router();
const  col_fuenteespacialtipoController= require('../controllers/col_fuenteespacialtipoController/col_fuenteespacialtipoController');


// Ruta para obtener todas las col_fuenteespacialtipo
router.get('/col_fuenteespacialtipo', col_fuenteespacialtipoController.getAllcol_fuenteespacialtipo);

// Ruta para obtener todas las col_fuenteespacialtipo por ID
router.get('/col_fuenteespacialtipo/:id', col_fuenteespacialtipoController.col_fuenteespacialtipogetById);

// Ruta para crear una todas las col_fuenteespacialtipo
router.post('/col_fuenteespacialtipo', col_fuenteespacialtipoController.col_fuenteespacialtipocreate);

// Ruta para actualizar una col_fuenteespacialtipo por ID
router.put('/col_fuenteespacialtipo/:id', col_fuenteespacialtipoController.col_fuenteespacialtipoupdateById);

// Ruta para eliminar una col_fuenteespacialtipo por ID
router.delete('/col_fuenteespacialtipo/:id', col_fuenteespacialtipoController.col_fuenteespacialtipodeleteById);

module.exports = router;

