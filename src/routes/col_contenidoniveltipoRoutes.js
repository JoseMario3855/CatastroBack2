const express = require('express');
const router = express.Router();
const  col_contenidoniveltipoController= require('../controllers/col_contenidoniveltipoController/col_contenidoniveltipoController');


// Ruta para obtener todas las col_contenidoniveltipo
router.get('/col_contenidoniveltipo', col_contenidoniveltipoController.getAllcol_contenidoniveltipo);

// Ruta para obtener todas las col_contenidoniveltipo por ID
router.get('/col_contenidoniveltipo/:id', col_contenidoniveltipoController.col_contenidoniveltipoById);

// Ruta para crear una todas las col_contenidoniveltipo
router.post('/col_contenidoniveltipo', col_contenidoniveltipoController.createcol_contenidoniveltipo);

// Ruta para actualizar una col_contenidoniveltipo por ID
router.put('/col_contenidoniveltipo/:id', col_contenidoniveltipoController.ACcol_contenidoniveltipoById);

// Ruta para eliminar una col_contenidoniveltipo por ID
router.delete('/col_contenidoniveltipo/:id', col_contenidoniveltipoController.Deletecol_contenidoniveltipoById);

module.exports = router;
