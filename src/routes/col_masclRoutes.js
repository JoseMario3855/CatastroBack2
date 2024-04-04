const express = require('express');
const router = express.Router();
const  col_masclController = require('../controllers/col_masclController/col_masclController');


// Ruta para obtener todas las col_mascl
router.get('/colmascl', col_masclController.getAllcol_mascl);

// Ruta para obtener todas las col_mascl por ID
router.get('/colmascl/:id', col_masclController.col_masclgetById);

// Ruta para crear una todas las col_mascl
router.post('/colmascl', col_masclController.col_masclcreate);

// Ruta para actualizar una col_mascl por ID
router.put('/colmascl/:id', col_masclController.col_masclupdateById);

// Ruta para eliminar una col_mascl por ID
router.delete('/colmascl/:id', col_masclController.col_mascldeleteById);

module.exports = router;