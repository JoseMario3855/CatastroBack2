const express = require('express');
const router = express.Router();
const lc_acuerdotipoController = require('../controllers/lc_acuerdotipoController/lc_acuerdotipoController');

// Ruta para obtener todos los registros de lc_acuerdotipo
router.get('/lc_acuerdotipo', lc_acuerdotipoController.getAlllc_acuerdotipo);

// Ruta para crear un nuevo registro en lc_acuerdotipo
router.post('/lc_acuerdotipo', lc_acuerdotipoController.lc_acuerdotipocreate);

// Ruta para obtener un registro de lc_acuerdotipo por su ID
router.get('/lc_acuerdotipo/:id', lc_acuerdotipoController.lc_acuerdotipogetById);

// Ruta para actualizar un registro de lc_acuerdotipo por su ID
router.put('/lc_acuerdotipo/:id', lc_acuerdotipoController.lc_acuerdotipoupdateById);

// Ruta para eliminar un registro de lc_acuerdotipo por su ID
router.delete('/lc_acuerdotipo/:id', lc_acuerdotipoController.lc_acuerdotipodeleteById);

module.exports = router;
