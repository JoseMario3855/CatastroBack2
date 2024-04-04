const express = require('express');
const router = express.Router();
const extarchivoController = require('../controllers/extarchivoController/extarchivoController');

// Ruta para obtener todos los registros de extarchivo
router.get('/extarchivo', extarchivoController.getAllextarchivo);

// Ruta para crear un nuevo registro en extarchivo
router.post('/extarchivo', extarchivoController.extarchivocreate);

// Ruta para obtener un registro de extarchivo por su ID
router.get('/extarchivo/:id', extarchivoController.extarchivogetById);

// Ruta para actualizar un registro de extarchivo por su ID
router.put('/extarchivo/:id', extarchivoController.extarchivoupdateById);

// Ruta para eliminar un registro de extarchivo por su ID
router.delete('/extarchivo/:id', extarchivoController.extarchivodeleteById);

module.exports = router;
