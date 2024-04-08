const express = require('express');
const router = express.Router();
const lc_fuenteadministrativaController = require('../controllers/lc_fuenteadministrativaController/lc_fuenteadministrativaController');

// Ruta para obtener todos los registros de lc_fuenteadministrativa
router.get('/lc_fuenteadministrativa', lc_fuenteadministrativaController.getAlllc_fuenteadministrativa);

// Ruta para crear un nuevo registro en lc_fuenteadministrativa
router.post('/lc_fuenteadministrativa', lc_fuenteadministrativaController.lc_fuenteadministrativacreate);

// Ruta para obtener un registro de lc_fuenteadministrativa por su ID
router.get('/lc_fuenteadministrativa/:id', lc_fuenteadministrativaController.lc_fuenteadministrativagetById);

// Ruta para actualizar un registro de lc_fuenteadministrativa por su ID
router.put('/lc_fuenteadministrativa/:id', lc_fuenteadministrativaController.lc_fuenteadministrativaupdateById);

// Ruta para eliminar un registro de lc_fuenteadministrativa por su ID
router.delete('/lc_fuenteadministrativa/:id', lc_fuenteadministrativaController.lc_fuenteadministrativadeleteById);

module.exports = router;

