const express = require('express');
const router = express.Router();
const lc_linderoController = require('../controllers/lc_linderoController/lc_linderoController');

// Ruta para obtener todos los registros de lc_lindero
router.get('/lc_lindero', lc_linderoController.getAlllc_lindero);

// Ruta para crear un nuevo registro en lc_lindero
router.post('/lc_lindero', lc_linderoController.lc_linderocreate);

// Ruta para obtener un registro de lc_lindero por su ID
router.get('/lc_lindero/:id', lc_linderoController.lc_linderogetById);

// Ruta para actualizar un registro de lc_lindero por su ID
router.put('/lc_lindero/:id', lc_linderoController.lc_linderoupdateById);

// Ruta para eliminar un registro de lc_lindero por su ID
router.delete('/lc_lindero/:id', lc_linderoController.lc_linderodeleteById);

module.exports = router;
