const express = require('express');
const router = express.Router();
const extinteresadoController = require('../controllers/extinteresadoController/extinteresadoController');

// Ruta para obtener todos los registros de extinteresado
router.get('/extinteresado', extinteresadoController.getAllextinteresado);

// Ruta para crear un nuevo registro en extinteresado
router.post('/extinteresado', extinteresadoController.extinteresadocreate);

// Ruta para obtener un registro de extinteresado por su ID
router.get('/extinteresado/:id', extinteresadoController.extinteresadogetById);

// Ruta para actualizar un registro de extinteresado por su ID
router.put('/extinteresado/:id', extinteresadoController.extinteresadoupdateById);

// Ruta para eliminar un registro de extinteresado por su ID
router.delete('/extinteresado/:id', extinteresadoController.extinteresadodeleteById);

module.exports = router;
