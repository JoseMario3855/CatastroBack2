const express = require('express');
const router = express.Router();
const lc_datosphcondominioController = require('../controllers/lc_datosphcondominioController/lc_datosphcondominioController');

// Ruta para obtener todos los registros de lc_datosphcondominio
router.get('/lc_datosphcondominio', lc_datosphcondominioController.getAlllc_datosphcondominio);

// Ruta para crear un nuevo registro en lc_datosphcondominio
router.post('/lc_datosphcondominio', lc_datosphcondominioController.lc_datosphcondominiocreate);

// Ruta para obtener un registro de lc_datosphcondominio por su ID
router.get('/lc_datosphcondominio/:id', lc_datosphcondominioController.lc_datosphcondominiogetById);

// Ruta para actualizar un registro de lc_datosphcondominio por su ID
router.put('/lc_datosphcondominio/:id', lc_datosphcondominioController.lc_datosphcondominioupdateById);

// Ruta para eliminar un registro de lc_datosphcondominio por su ID
router.delete('/lc_datosphcondominio/:id', lc_datosphcondominioController.lc_datosphcondominiodeleteById);

module.exports = router;
