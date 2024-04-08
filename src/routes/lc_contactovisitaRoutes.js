const express = require('express');
const router = express.Router();
const lc_contactovisitaController = require('../controllers/lc_contactovisitaController/lc_contactovisitaController');

// Ruta para obtener todos los registros de lc_contactovisita
router.get('/lc_contactovisita', lc_contactovisitaController.getAlllc_contactovisita);

// Ruta para crear un nuevo registro en lc_contactovisita
router.post('/lc_contactovisita', lc_contactovisitaController.lc_contactovisitacreate);

// Ruta para obtener un registro de lc_contactovisita por su ID
router.get('/lc_contactovisita/:id', lc_contactovisitaController.lc_contactovisitagetById);

// Ruta para actualizar un registro de lc_contactovisita por su ID
router.put('/lc_contactovisita/:id', lc_contactovisitaController.lc_contactovisitaupdateById);

// Ruta para eliminar un registro de lc_contactovisita por su ID
router.delete('/lc_contactovisita/:id', lc_contactovisitaController.lc_contactovisitadeleteById);

module.exports = router;
