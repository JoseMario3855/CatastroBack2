const express = require('express');
const router = express.Router();
const  col_puntotipoController = require('../controllers/col_puntotipoController/col_puntotipoController');


// Ruta para obtener todas las col_puntotipo
router.get('/col_puntotipo', col_puntotipoController.getAllcol_puntotipo);

// Ruta para obtener todas las col_puntotipo por ID
router.get('/col_puntotipo/:id', col_puntotipoController.col_puntotipogetById);

// Ruta para crear una todas las col_puntotipo
router.post('/col_puntotipo', col_puntotipoController.col_puntotipocreate);

// Ruta para actualizar una col_puntotipo por ID
router.put('/col_puntotipo/:id', col_puntotipoController.col_puntotipoupdateById);

// Ruta para eliminar una col_puntotipo por ID
router.delete('/col_puntotipo/:id', col_puntotipoController.col_puntotipodeleteById);

module.exports = router;