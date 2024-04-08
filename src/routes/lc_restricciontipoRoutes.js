const express = require('express');
const router = express.Router();
const lc_restricciontipoController = require('../controllers/lc_restricciontipoController/lc_restricciontipoController');

// Ruta para obtener todos los registros de lc_restricciontipo
router.get('/lc_restricciontipo', lc_restricciontipoController.getAlllc_restricciontipo);

// Ruta para crear un nuevo registro en lc_restricciontipo
router.post('/lc_restricciontipo', lc_restricciontipoController.lc_restricciontipocreate);

// Ruta para obtener un registro de lc_restricciontipo por su ID
router.get('/lc_restricciontipo/:id', lc_restricciontipoController.lc_restricciontipogetById);

// Ruta para actualizar un registro de lc_restricciontipo por su ID
router.put('/lc_restricciontipo/:id', lc_restricciontipoController.lc_restricciontipoupdateById);

// Ruta para eliminar un registro de lc_restricciontipo por su ID
router.delete('/lc_restricciontipo/:id', lc_restricciontipoController.lc_restricciontipodeleteById);

module.exports = router;
