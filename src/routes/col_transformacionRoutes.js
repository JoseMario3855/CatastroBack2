const express = require('express');
const router = express.Router();
const col_transformacionController = require('../controllers/col_transformacionController/col_transformacionController');

// Ruta para obtener todos los registros de col_transformacion
router.get('/col_transformacion', col_transformacionController.getAllcol_transformacion);

// Ruta para crear un nuevo registro en col_transformacion
router.post('/col_transformacion', col_transformacionController.col_transformacioncreate);

// Ruta para obtener un registro de col_transformacion por su ID
router.get('/col_transformacion/:id', col_transformacionController.col_transformaciongetById);

// Ruta para actualizar un registro de col_transformacion por su ID
router.put('/col_transformacion/:id', col_transformacionController.col_transformacionupdateById);

// Ruta para eliminar un registro de col_transformacion por su ID
router.delete('/col_transformacion/:id', col_transformacionController.col_transformaciondeleteById);

module.exports = router;
