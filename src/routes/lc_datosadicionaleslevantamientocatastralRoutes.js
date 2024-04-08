const express = require('express');
const router = express.Router();
const lc_datosadicionaleslevantamientocatastralController = require('../controllers/lc_datosadicionaleslevantamientocatastralController/lc_datosadicionaleslevantamientocatastralController');

// Ruta para obtener todos los registros de lc_datosadicionaleslevantamientocatastral
router.get('/lc_datosadicionaleslevantamientocatastral', lc_datosadicionaleslevantamientocatastralController.getAlllc_datosadicionaleslevantamientocatastral);

// Ruta para crear un nuevo registro en lc_datosadicionaleslevantamientocatastral
router.post('/lc_datosadicionaleslevantamientocatastral', lc_datosadicionaleslevantamientocatastralController.lc_datosadicionaleslevantamientocatastralcreate);

// Ruta para obtener un registro de lc_datosadicionaleslevantamientocatastral por su ID
router.get('/lc_datosadicionaleslevantamientocatastral/:id', lc_datosadicionaleslevantamientocatastralController.lc_datosadicionaleslevantamientocatastralgetById);

// Ruta para actualizar un registro de lc_datosadicionaleslevantamientocatastral por su ID
router.put('/lc_datosadicionaleslevantamientocatastral/:id', lc_datosadicionaleslevantamientocatastralController.lc_datosadicionaleslevantamientocatastralupdateById);

// Ruta para eliminar un registro de lc_datosadicionaleslevantamientocatastral por su ID
router.delete('/lc_datosadicionaleslevantamientocatastral/:id', lc_datosadicionaleslevantamientocatastralController.lc_datosadicionaleslevantamientocatastraldeleteById);

module.exports = router;
