const express = require('express');
const router = express.Router();
const col_ueuegrupoController = require('../controllers/col_ueuegrupoController/col_ueuegrupoController');

// Ruta para obtener todos los registros de col_ueuegrupo
router.get('/col_ueuegrupo', col_ueuegrupoController.getAllcol_ueuegrupo);

// Ruta para crear un nuevo registro en col_ueuegrupo
router.post('/col_ueuegrupo', col_ueuegrupoController.col_ueuegrupocreate);

// Ruta para obtener un registro de col_ueuegrupo por su ID
router.get('/col_ueuegrupo/:id', col_ueuegrupoController.col_ueuegrupogetById);

// Ruta para actualizar un registro de col_ueuegrupo por su ID
router.put('/col_ueuegrupo/:id', col_ueuegrupoController.col_ueuegrupoupdateById);

// Ruta para eliminar un registro de col_ueuegrupo por su ID
router.delete('/col_ueuegrupo/:id', col_ueuegrupoController.col_ueuegrupodeleteById);

module.exports = router;
