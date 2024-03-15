const express = require('express');
const router = express.Router();
const  col_volumenvalorController= require('../controllers/col_volumenvalorController/col_volumenvalorController');


// Ruta para obtener todas las extdireccion
router.get('/colvolumenvalor', col_volumenvalorController.getAllcolvolumenvalor);

// Ruta para obtener todas las extdireccion por ID
router.get('/colvolumenvalor/:id', col_volumenvalorController.colvolumenvalorgetById);

// Ruta para crear una todas las extdireccion
router.post('/colvolumenvalor', col_volumenvalorController.createcolvolumenvalor);

// Ruta para actualizar una extdireccion por ID
router.put('/colvolumenvalor/:id', col_volumenvalorController.colvolumenvalorupdateById);

// Ruta para eliminar una extdireccion por ID
router.delete('/colvolumenvalor/:id', col_volumenvalorController.colvolumenvalordeleteById);

module.exports = router;