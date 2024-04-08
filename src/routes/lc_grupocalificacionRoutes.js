const express = require('express');
const router = express.Router();
const lc_grupocalificacionController = require('../controllers/lc_grupocalificacionController/lc_grupocalificacionController');

// Ruta para obtener todos los registros de lc_grupocalificacion
router.get('/lc_grupocalificacion', lc_grupocalificacionController.getAlllc_grupocalificacion);

// Ruta para crear un nuevo registro en lc_grupocalificacion
router.post('/lc_grupocalificacion', lc_grupocalificacionController.lc_grupocalificacioncreate);

// Ruta para obtener un registro de lc_grupocalificacion por su ID
router.get('/lc_grupocalificacion/:id', lc_grupocalificacionController.lc_grupocalificaciongetById);

// Ruta para actualizar un registro de lc_grupocalificacion por su ID
router.put('/lc_grupocalificacion/:id', lc_grupocalificacionController.lc_grupocalificacionupdateById);

// Ruta para eliminar un registro de lc_grupocalificacion por su ID
router.delete('/lc_grupocalificacion/:id', lc_grupocalificacionController.lc_grupocalificaciondeleteById);

module.exports = router;
