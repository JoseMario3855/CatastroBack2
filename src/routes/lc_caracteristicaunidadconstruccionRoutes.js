// routes/lc_caracteristicaunidadconstruccionController.js
const express = require('express');
const router = express.Router();
const lc_caracteristicaunidadconstruccionController = require('../controllers/lc_caracteristicaunidadconstruccionController');
const lc_caracteristicaunidadconstruccionController = require('../controllers/lc_caracteristicaunidadconstruccionController');


// Ruta para obtener la caracteristica unidad construccion
router.get('/caracteristicaunidadconstruccion', lc_caracteristicaunidadconstruccionController.getAllcaracteristicaunidadconstruccion);

// Ruta para obtener la caracteristica unidad construccion  por ID
router.get('/caracteristicaunidadconstruccion/:id', lc_caracteristicaunidadconstruccionController.getcaracteristicaunidadconstruccionById);

// Ruta para crear la caracteristica unidad construccion
router.post('/caracteristicaunidadconstruccion', lc_caracteristicaunidadconstruccionController.createcaracteristicaunidadconstruccion);

// Ruta para actualizar la caracteristica unidad construccion
router.put('/caracteristicaunidadconstruccion/:id', lc_caracteristicaunidadconstruccionController.updatecaracteristicaunidadconstruccion);

// Ruta para eliminar la caracteristica unidad construccion por ID
router.delete('/caracteristicaunidadconstruccion/:id', lc_caracteristicaunidadconstruccionController.deletecaracteristicaunidadconstruccion);

module.exports = router;