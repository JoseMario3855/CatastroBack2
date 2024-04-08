const express = require('express');
const router = express.Router();
const lc_estratotipoController = require('../controllers/lc_estratotipoController/lc_estratotipoController');

// Ruta para obtener todos los registros de lc_estratotipo
router.get('/lc_estratotipo', lc_estratotipoController.getAlllc_estratotipo);

// Ruta para crear un nuevo registro en lc_estratotipo
router.post('/lc_estratotipo', lc_estratotipoController.lc_estratotipocreate);

// Ruta para obtener un registro de lc_estratotipo por su ID
router.get('/lc_estratotipo/:id', lc_estratotipoController.lc_estratotipogetById);

// Ruta para actualizar un registro de lc_estratotipo por su ID
router.put('/lc_estratotipo/:id', lc_estratotipoController.lc_estratotipoupdateById);

// Ruta para eliminar un registro de lc_estratotipo por su ID
router.delete('/lc_estratotipo/:id', lc_estratotipoController.lc_estratotipodeleteById);

module.exports = router;
