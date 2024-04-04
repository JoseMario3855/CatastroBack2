const express = require('express');
const router = express.Router();
const extreferenciaregistralsistemaantiguoController = require('../controllers/extreferenciaregistralsistemaantiguoController/extreferenciaregistralsistemaantiguoController');

// Ruta para obtener todos los registros de extreferenciaregistralsistemaantiguo
router.get('/extreferenciaregistralsistemaantiguo', extreferenciaregistralsistemaantiguoController.getAllextreferenciaregistralsistemaantiguo);

// Ruta para crear un nuevo registro en extreferenciaregistralsistemaantiguo
router.post('/extreferenciaregistralsistemaantiguo', extreferenciaregistralsistemaantiguoController.extreferenciaregistralsistemaantiguocreate);

// Ruta para obtener un registro de extreferenciaregistralsistemaantiguo por su ID
router.get('/extreferenciaregistralsistemaantiguo/:id', extreferenciaregistralsistemaantiguoController.extreferenciaregistralsistemaantiguogetById);

// Ruta para actualizar un registro de extreferenciaregistralsistemaantiguo por su ID
router.put('/extreferenciaregistralsistemaantiguo/:id', extreferenciaregistralsistemaantiguoController.extreferenciaregistralsistemaantiguoupdateById);

// Ruta para eliminar un registro de extreferenciaregistralsistemaantiguo por su ID
router.delete('/extreferenciaregistralsistemaantiguo/:id', extreferenciaregistralsistemaantiguoController.extreferenciaregistralsistemaantiguodeleteById);

module.exports = router;
