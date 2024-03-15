// routes/lc_usouconstipoRoutes.js
const express = require('express');
const router = express.Router();
const lc_usouconstipoController = require('../controllers/lc_usouconstipoController/lc_usouconstipoController');

// Ruta para obtener todos los Usos construccion tipo
router.get('/usouconstipo', lc_usouconstipoController.getAllTiposUsoConstruccion);

// Ruta para obtener todos los Usos construccion tipo por ID
router.get('/usouconstipo/:id', lc_usouconstipoController.getTipoUsoConstruccionById);

// Ruta para crear un Uso construccion tipo
router.post('/usouconstipo', lc_usouconstipoController.createTipoUsoConstruccion);

// Ruta para actualizar un Uso construccion tipo
router.put('/usouconstipo/:id', lc_usouconstipoController.updateTipoUsoConstruccion);

// Ruta para eliminar un Uso construccion tipo por ID
router.delete('/usouconstipo/:id', lc_usouconstipoController.deleteTipoUsoConstruccion);

module.exports = router;
