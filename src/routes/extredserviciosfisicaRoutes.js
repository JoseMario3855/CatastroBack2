const express = require('express');
const router = express.Router();
const extredserviciosfisicaController = require('../controllers/extredserviciosfisicaController/extredserviciosfisicaController');

// Ruta para obtener todos los registros de extredserviciosfisica
router.get('/extredserviciosfisica', extredserviciosfisicaController.getAllextredserviciosfisica);

// Ruta para crear un nuevo registro en extredserviciosfisica
router.post('/extredserviciosfisica', extredserviciosfisicaController.extredserviciosfisicacreate);

// Ruta para obtener un registro de extredserviciosfisica por su ID
router.get('/extredserviciosfisica/:id', extredserviciosfisicaController.extredserviciosfisicagetById);

// Ruta para actualizar un registro de extredserviciosfisica por su ID
router.put('/extredserviciosfisica/:id', extredserviciosfisicaController.extredserviciosfisicaupdateById);

// Ruta para eliminar un registro de extredserviciosfisica por su ID
router.delete('/extredserviciosfisica/:id', extredserviciosfisicaController.extredserviciosfisicadeleteById);

module.exports = router;
