const express = require('express');
const router = express.Router();
const extdireccion_sector_ciudadController = require('../controllers/extdireccion_sector_ciudadController/extdireccion_sector_ciudadController');

// Ruta para obtener todos los registros de extdireccion_sector_ciudad
router.get('/extdireccion_sector_ciudad', extdireccion_sector_ciudadController.getAllextdireccion_sector_ciudad);

// Ruta para crear un nuevo registro en extdireccion_sector_ciudad
router.post('/extdireccion_sector_ciudad', extdireccion_sector_ciudadController.extdireccion_sector_ciudadcreate);

// Ruta para obtener un registro de extdireccion_sector_ciudad por su ID
router.get('/extdireccion_sector_ciudad/:id', extdireccion_sector_ciudadController.extdireccion_sector_ciudadgetById);

// Ruta para actualizar un registro de extdireccion_sector_ciudad por su ID
router.put('/extdireccion_sector_ciudad/:id', extdireccion_sector_ciudadController.extdireccion_sector_ciudadupdateById);

// Ruta para eliminar un registro de extdireccion_sector_ciudad por su ID
router.delete('/extdireccion_sector_ciudad/:id', extdireccion_sector_ciudadController.extdireccion_sector_ciudaddeleteById);

module.exports = router;
