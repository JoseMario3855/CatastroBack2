// routes/lc_usouconstipoRoutes.js
const express = require('express');
const router = express.Router();
const lc_usouconstipoController = require('../controllers/lc_usouconstipoController');

// Ruta para obtener todos los Usos construccion tipo
router.get('/usouconstipo', lc_usouconstipoController.getAllusouconstipo);

// Ruta para obtener todos los Usos construccion tipo por ID
router.get('/usouconstipo/:id', lc_usouconstipoController.getusouconstipoById);

// Ruta para crear un Uso construccion tipo
router.post('/usouconstipo', lc_usouconstipoController.createusouconstipo);

// Ruta para actualizar un Uso construccion tipo
router.put('/usouconstipo/:id', lc_usouconstipoController.updateusouconstipo);

// Ruta para eliminar un Uso construccion tipo por ID
router.delete('/usouconstipo/:id', lc_usouconstipoController.deleteusouconstipo);

module.exports = router;
