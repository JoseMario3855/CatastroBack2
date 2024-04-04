const express = require('express');
const router = express.Router();
const  col_puntoclController = require('../controllers/col_puntoclController/col_puntoclController');


// Ruta para obtener todas las col_puntocl
router.get('/col_puntocl', col_puntoclController.getAllcol_puntocl);

// Ruta para obtener todas las col_puntocl por ID
router.get('/col_puntocl/:id', col_puntoclController.col_puntoclgetById);

// Ruta para crear una todas las col_puntocl
router.post('/col_puntocl', col_puntoclController.col_puntoclcreate);

// Ruta para actualizar una col_puntocl por ID
router.put('/col_puntocl/:id', col_puntoclController.col_puntoclupdateById);

// Ruta para eliminar una col_puntocl por ID
router.delete('/col_puntocl/:id', col_puntoclController.col_puntocldeleteById);

module.exports = router;