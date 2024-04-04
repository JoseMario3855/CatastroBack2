const express = require('express');
const router = express.Router();
const col_uebaunitController = require('../controllers/col_uebaunitController/col_uebaunitController');

// Ruta para obtener todos los registros de col_uebaunit
router.get('/col_uebaunit', col_uebaunitController.getAllcol_uebaunit);

// Ruta para crear un nuevo registro en col_uebaunit
router.post('/col_uebaunit', col_uebaunitController.col_uebaunitcreate);

// Ruta para obtener un registro de col_uebaunit por su ID
router.get('/col_uebaunit/:id', col_uebaunitController.col_uebaunitgetById);

// Ruta para actualizar un registro de col_uebaunit por su ID
router.put('/col_uebaunit/:id', col_uebaunitController.col_uebaunitupdateById);

// Ruta para eliminar un registro de col_uebaunit por su ID
router.delete('/col_uebaunit/:id', col_uebaunitController.col_uebaunitdeleteById);

module.exports = router;
