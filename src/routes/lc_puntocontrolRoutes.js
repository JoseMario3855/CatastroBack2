const express = require('express');
const router = express.Router();
const lc_puntocontrolController = require('../controllers/lc_puntocontrolController/lc_puntocontrolController');

// Ruta para obtener todos los registros de lc_puntocontrol
router.get('/lc_puntocontrol', lc_puntocontrolController.getAlllc_puntocontrol);

// Ruta para crear un nuevo registro en lc_puntocontrol
router.post('/lc_puntocontrol', lc_puntocontrolController.lc_puntocontrolcreate);

// Ruta para obtener un registro de lc_puntocontrol por su ID
router.get('/lc_puntocontrol/:id', lc_puntocontrolController.lc_puntocontrolgetById);

// Ruta para actualizar un registro de lc_puntocontrol por su ID
router.put('/lc_puntocontrol/:id', lc_puntocontrolController.lc_puntocontrolupdateById);

// Ruta para eliminar un registro de lc_puntocontrol por su ID
router.delete('/lc_puntocontrol/:id', lc_puntocontrolController.lc_puntocontroldeleteById);

module.exports = router;
