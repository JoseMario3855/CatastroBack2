const express = require('express');
const router = express.Router();
const col_relacionsuperficietipoController = require('../controllers/col_relacionsuperficietipoController/col_relacionsuperficietipoController');

// Ruta para obtener todos los registros de col_relacionsuperficietipo
router.get('/col_relacionsuperficietipo', col_relacionsuperficietipoController.getAllcol_relacionsuperficietipo);

// Ruta para crear un nuevo registro en col_relacionsuperficietipo
router.post('/col_relacionsuperficietipo', col_relacionsuperficietipoController.col_relacionsuperficietipocreate);

// Ruta para obtener un registro de col_relacionsuperficietipo por su ID
router.get('/col_relacionsuperficietipo/:id', col_relacionsuperficietipoController.col_relacionsuperficietipogetById);

// Ruta para actualizar un registro de col_relacionsuperficietipo por su ID
router.put('/col_relacionsuperficietipo/:id', col_relacionsuperficietipoController.col_relacionsuperficietipoupdateById);

// Ruta para eliminar un registro de col_relacionsuperficietipo por su ID
router.delete('/col_relacionsuperficietipo/:id', col_relacionsuperficietipoController.col_relacionsuperficietipodeleteById);

module.exports = router;
