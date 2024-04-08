const express = require('express');
const router = express.Router();
const lc_ofertasmercadoinmobiliarioController = require('../controllers/lc_ofertasmercadoinmobiliarioController/lc_ofertasmercadoinmobiliarioController');

// Ruta para obtener todos los registros de lc_ofertasmercadoinmobiliario
router.get('/lc_ofertasmercadoinmobiliario', lc_ofertasmercadoinmobiliarioController.getAlllc_ofertasmercadoinmobiliario);

// Ruta para crear un nuevo registro en lc_ofertasmercadoinmobiliario
router.post('/lc_ofertasmercadoinmobiliario', lc_ofertasmercadoinmobiliarioController.lc_ofertasmercadoinmobiliariocreate);

// Ruta para obtener un registro de lc_ofertasmercadoinmobiliario por su ID
router.get('/lc_ofertasmercadoinmobiliario/:id', lc_ofertasmercadoinmobiliarioController.lc_ofertasmercadoinmobiliariogetById);

// Ruta para actualizar un registro de lc_ofertasmercadoinmobiliario por su ID
router.put('/lc_ofertasmercadoinmobiliario/:id', lc_ofertasmercadoinmobiliarioController.lc_ofertasmercadoinmobiliarioupdateById);

// Ruta para eliminar un registro de lc_ofertasmercadoinmobiliario por su ID
router.delete('/lc_ofertasmercadoinmobiliario/:id', lc_ofertasmercadoinmobiliarioController.lc_ofertasmercadoinmobiliariodeleteById);

module.exports = router;
