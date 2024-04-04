const express = require('express');
const router = express.Router();
const  col_miembrosController = require('../controllers/col_miembrosController/col_miembrosController');


// Ruta para obtener todas las col_miembros
router.get('/col_miembros', col_miembrosController.getAllcol_miembros);

// Ruta para obtener todas las col_miembros por ID
router.get('/col_miembros/:id', col_miembrosController.col_miembrosgetById);

// Ruta para crear una todas las col_miembros
router.post('/col_miembros', col_miembrosController.col_miembroscreate);

// Ruta para actualizar una col_miembros por ID
router.put('/col_miembros/:id', col_miembrosController.col_miembrosupdateById);

// Ruta para eliminar una col_miembros por ID
router.delete('/col_miembros/:id', col_miembrosController.col_miembrosdeleteById);

module.exports = router;