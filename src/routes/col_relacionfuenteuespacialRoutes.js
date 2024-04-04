const express = require('express');
const router = express.Router();
const col_relacionfuenteuespacialuespacialController = require('../controllers/col_relacionfuenteuespacialController/col_relacionfuenteuespacialController');

// Ruta para obtener todos los registros de col_relacionfuenteuespacial
router.get('/col_relacionfuenteuespacial', col_relacionfuenteuespacialuespacialController.getAllcol_relacionfuenteuespacial);

// Ruta para crear un nuevo registro en col_relacionfuenteuespacial
router.post('/col_relacionfuenteuespacial', col_relacionfuenteuespacialuespacialController.col_relacionfuenteuespacialcreate);

// Ruta para obtener un registro de col_relacionfuenteuespacial por su ID
router.get('/col_relacionfuenteuespacial/:id', col_relacionfuenteuespacialuespacialController.col_relacionfuenteuespacialgetById);

// Ruta para actualizar un registro de col_relacionfuenteuespacial por su ID
router.put('/col_relacionfuenteuespacial/:id', col_relacionfuenteuespacialuespacialController.col_relacionfuenteuespacialupdateById);

// Ruta para eliminar un registro de col_relacionfuenteuespacial por su ID
router.delete('/col_relacionfuenteuespacial/:id', col_relacionfuenteuespacialuespacialController.col_relacionfuenteuespacialdeleteById);

module.exports = router;
