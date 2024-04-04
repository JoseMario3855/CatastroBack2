const express = require('express');
const router = express.Router();
const  col_puntocclController = require('../controllers/col_puntocclController/col_puntocclController');


// Ruta para obtener todas las col_puntoccl
router.get('/col_puntoccl', col_puntocclController.getAllcol_puntoccl);

// Ruta para obtener todas las col_puntoccl por ID
router.get('/col_puntoccl/:id', col_puntocclController.col_puntocclgetById);

// Ruta para crear una todas las col_puntoccl
router.post('/col_puntoccl', col_puntocclController.col_puntocclcreate);

// Ruta para actualizar una col_puntoccl por ID
router.put('/col_puntoccl/:id', col_puntocclController.col_puntocclupdateById);

// Ruta para eliminar una col_puntoccl por ID
router.delete('/col_puntoccl/:id', col_puntocclController.col_puntoccldeleteById);

module.exports = router;