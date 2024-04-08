const express = require('express');
const router = express.Router();
const lc_objetoconstrucciontipoController = require('../controllers/lc_objetoconstrucciontipoController/lc_objetoconstrucciontipoController');

// Ruta para obtener todos los registros de lc_objetoconstrucciontipo
router.get('/lc_objetoconstrucciontipo', lc_objetoconstrucciontipoController.getAlllc_objetoconstrucciontipo);

// Ruta para crear un nuevo registro en lc_objetoconstrucciontipo
router.post('/lc_objetoconstrucciontipo', lc_objetoconstrucciontipoController.lc_objetoconstrucciontipocreate);

// Ruta para obtener un registro de lc_objetoconstrucciontipo por su ID
router.get('/lc_objetoconstrucciontipo/:id', lc_objetoconstrucciontipoController.lc_objetoconstrucciontipogetById);

// Ruta para actualizar un registro de lc_objetoconstrucciontipo por su ID
router.put('/lc_objetoconstrucciontipo/:id', lc_objetoconstrucciontipoController.lc_objetoconstrucciontipoupdateById);

// Ruta para eliminar un registro de lc_objetoconstrucciontipo por su ID
router.delete('/lc_objetoconstrucciontipo/:id', lc_objetoconstrucciontipoController.lc_objetoconstrucciontipodeleteById);

module.exports = router;
