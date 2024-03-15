// routes/lc_caracteristicaunidadconstruccionController.js
const express = require('express');
const router = express.Router();
const lc_caracteristicaunidadconstruccionController = require('../controllers/lc_caracteristicaunidadconstruccionController/lc_caracteristicaunidadconstruccionController');


// Ruta para obtener la caracteristica unidad construccion
router.get('/caracteristicaunidadconstruccion', lc_caracteristicaunidadconstruccionController.getAllcaracteristicasdelaunidaddeconstruccion);

// Ruta para obtener la caracteristica unidad construccion  por ID
router.get('/caracteristicaunidadconstruccion/:id', lc_caracteristicaunidadconstruccionController.getcaracteristicasdelaunidaddeconstruccionById);

// Ruta para crear la caracteristica unidad construccion
router.post('/caracteristicaunidadconstruccion', lc_caracteristicaunidadconstruccionController.createcaracteristicasdelaunidaddeconstruccion);

// Ruta para actualizar la caracteristica unidad construccion
router.put('/caracteristicaunidadconstruccion/:id', lc_caracteristicaunidadconstruccionController.updatecaracteristicasdelaunidaddeconstruccion);

// Ruta para eliminar la caracteristica unidad construccion por ID
router.delete('/caracteristicaunidadconstruccion/:id', lc_caracteristicaunidadconstruccionController.deletecaracteristicasdelaunidaddeconstruccion);

module.exports = router;