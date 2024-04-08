const express = require('express');
const router = express.Router();
const lc_servidumbretransitoController = require('../controllers/lc_servidumbretransitoController/lc_servidumbretransitoController');

// Ruta para obtener todos los registros de lc_servidumbretransito
router.get('/lc_servidumbretransito', lc_servidumbretransitoController.getAlllc_servidumbretransito);

// Ruta para crear un nuevo registro en lc_servidumbretransito
router.post('/lc_servidumbretransito', lc_servidumbretransitoController.lc_servidumbretransitocreate);

// Ruta para obtener un registro de lc_servidumbretransito por su ID
router.get('/lc_servidumbretransito/:id', lc_servidumbretransitoController.lc_servidumbretransitogetById);

// Ruta para actualizar un registro de lc_servidumbretransito por su ID
router.put('/lc_servidumbretransito/:id', lc_servidumbretransitoController.lc_servidumbretransitoupdateById);

// Ruta para eliminar un registro de lc_servidumbretransito por su ID
router.delete('/lc_servidumbretransito/:id', lc_servidumbretransitoController.lc_servidumbretransitodeleteById);

module.exports = router;
