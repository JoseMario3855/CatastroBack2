const express = require('express');
const router = express.Router();
const extdireccion_clase_via_principalController = require('../controllers/extdireccion_clase_via_principalController/extdireccion_clase_via_principalController');

// Ruta para obtener todos los registros de extdireccion_clase_via_principal
router.get('/extdireccion_clase_via_principal', extdireccion_clase_via_principalController.getAllextdireccion_clase_via_principal);

// Ruta para crear un nuevo registro en extdireccion_clase_via_principal
router.post('/extdireccion_clase_via_principal', extdireccion_clase_via_principalController.extdireccion_clase_via_principalcreate);

// Ruta para obtener un registro de extdireccion_clase_via_principal por su ID
router.get('/extdireccion_clase_via_principal/:id', extdireccion_clase_via_principalController.extdireccion_clase_via_principalgetById);

// Ruta para actualizar un registro de extdireccion_clase_via_principal por su ID
router.put('/extdireccion_clase_via_principal/:id', extdireccion_clase_via_principalController.extdireccion_clase_via_principalupdateById);

// Ruta para eliminar un registro de extdireccion_clase_via_principal por su ID
router.delete('/extdireccion_clase_via_principal/:id', extdireccion_clase_via_principalController.extdireccion_clase_via_principaldeleteById);

module.exports = router;
