// routes/lc_dominioconstrucciontipoController.js
const express = require('express');
const router = express.Router();
const lc_dominioconstrucciontipoController = require('../controllers/lc_dominioconstrucciontipoController/lc_dominioconstrucciontipoController');


// Ruta para obtener tipo de dominio construccion
router.get('/dominioconstrucciontipo', lc_dominioconstrucciontipoController.getAllDominiosConstruccionTipo);

// Ruta para obtener los tipos de dominio construccion por ID
router.get('/dominioconstrucciontipo/:id', lc_dominioconstrucciontipoController.getDominioConstruccionTipoById);

// Ruta para crear los tipos dominio construccion
router.post('/dominioconstrucciontipo', lc_dominioconstrucciontipoController.createDominioConstruccionTipo);

// Ruta para actualizar los tipos dominio construccion
router.put('/dominioconstrucciontipo/:id', lc_dominioconstrucciontipoController.updateDominioConstruccionTipo);

// Ruta para eliminar los tipos dominio construccion por ID
router.delete('/dominioconstrucciontipo/:id', lc_dominioconstrucciontipoController.deleteDominioConstruccionTipo);

module.exports = router;
