const express = require('express');
const router = express.Router();
const col_volumentipoController = require('../controllers/col_volumentipoController/col_volumentipoController');

// Ruta para obtener todos los registros de col_volumentipo
router.get('/col_volumentipo', col_volumentipoController.getAllcol_volumentipo);

// Ruta para crear un nuevo registro en col_volumentipo
router.post('/col_volumentipo', col_volumentipoController.col_volumentipocreate);

// Ruta para obtener un registro de col_volumentipo por su ID
router.get('/col_volumentipo/:id', col_volumentipoController.col_volumentipogetById);

// Ruta para actualizar un registro de col_volumentipo por su ID
router.put('/col_volumentipo/:id', col_volumentipoController.col_volumentipoupdateById);

// Ruta para eliminar un registro de col_volumentipo por su ID
router.delete('/col_volumentipo/:id', col_volumentipoController.col_volumentipodeleteById);

module.exports = router;
