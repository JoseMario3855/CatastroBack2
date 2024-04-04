const express = require('express');
const router = express.Router();
const  col_puntofuenteController = require('../controllers/col_puntofuenteController/col_puntofuenteController');


// Ruta para obtener todas las col_puntofuente
router.get('/col_puntofuente', col_puntofuenteController.getAllcol_puntofuente);

// Ruta para obtener todas las col_puntofuente por ID
router.get('/col_puntofuente/:id', col_puntofuenteController.col_puntofuentegetById);

// Ruta para crear una todas las col_puntofuente
router.post('/col_puntofuente', col_puntofuenteController.col_puntofuentecreate);

// Ruta para actualizar una col_puntofuente por ID
router.put('/col_puntofuente/:id', col_puntofuenteController.col_puntofuenteupdateById);

// Ruta para eliminar una col_puntofuente por ID
router.delete('/col_puntofuente/:id', col_puntofuenteController.col_puntofuentedeleteById);

module.exports = router;