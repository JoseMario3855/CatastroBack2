const express = require('express');
const router = express.Router();
const lc_nu_espaciojuridicoredserviciosController = require('../controllers/lc_nu_espaciojuridicoredserviciosController/lc_nu_espaciojuridicoredserviciosController');

// Ruta para obtener todos los registros de lc_nu_espaciojuridicoredservicios
router.get('/lc_nu_espaciojuridicoredservicios', lc_nu_espaciojuridicoredserviciosController.getAlllc_nu_espaciojuridicoredservicios);

// Ruta para crear un nuevo registro en lc_nu_espaciojuridicoredservicios
router.post('/lc_nu_espaciojuridicoredservicios', lc_nu_espaciojuridicoredserviciosController.lc_nu_espaciojuridicoredservicioscreate);

// Ruta para obtener un registro de lc_nu_espaciojuridicoredservicios por su ID
router.get('/lc_nu_espaciojuridicoredservicios/:id', lc_nu_espaciojuridicoredserviciosController.lc_nu_espaciojuridicoredserviciosgetById);

// Ruta para actualizar un registro de lc_nu_espaciojuridicoredservicios por su ID
router.put('/lc_nu_espaciojuridicoredservicios/:id', lc_nu_espaciojuridicoredserviciosController.lc_nu_espaciojuridicoredserviciosupdateById);

// Ruta para eliminar un registro de lc_nu_espaciojuridicoredservicios por su ID
router.delete('/lc_nu_espaciojuridicoredservicios/:id', lc_nu_espaciojuridicoredserviciosController.lc_nu_espaciojuridicoredserviciosdeleteById);

module.exports = router;
