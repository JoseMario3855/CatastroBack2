const express = require('express');
const router = express.Router();
const extdireccion_sector_predioController = require('../controllers/extdireccion_sector_predioController/extdireccion_sector_predioController');

// Ruta para obtener todos los registros de extdireccion_sector_predio
router.get('/extdireccion_sector_predio', extdireccion_sector_predioController.getAllextdireccion_sector_predio);

// Ruta para crear un nuevo registro en extdireccion_sector_predio
router.post('/extdireccion_sector_predio', extdireccion_sector_predioController.extdireccion_sector_prediocreate);

// Ruta para obtener un registro de extdireccion_sector_predio por su ID
router.get('/extdireccion_sector_predio/:id', extdireccion_sector_predioController.extdireccion_sector_prediogetById);

// Ruta para actualizar un registro de extdireccion_sector_predio por su ID
router.put('/extdireccion_sector_predio/:id', extdireccion_sector_predioController.extdireccion_sector_predioupdateById);

// Ruta para eliminar un registro de extdireccion_sector_predio por su ID
router.delete('/extdireccion_sector_predio/:id', extdireccion_sector_predioController.extdireccion_sector_prediodeleteById);

module.exports = router;
