const express = require('express');
const router = express.Router();
const lc_fotoidentificaciontipoController = require('../controllers/lc_fotoidentificaciontipoController/lc_fotoidentificaciontipoController');

// Ruta para obtener todos los registros de lc_fotoidentificaciontipo
router.get('/lc_fotoidentificaciontipo', lc_fotoidentificaciontipoController.getAlllc_fotoidentificaciontipo);

// Ruta para crear un nuevo registro en lc_fotoidentificaciontipo
router.post('/lc_fotoidentificaciontipo', lc_fotoidentificaciontipoController.lc_fotoidentificaciontipocreate);

// Ruta para obtener un registro de lc_fotoidentificaciontipo por su ID
router.get('/lc_fotoidentificaciontipo/:id', lc_fotoidentificaciontipoController.lc_fotoidentificaciontipogetById);

// Ruta para actualizar un registro de lc_fotoidentificaciontipo por su ID
router.put('/lc_fotoidentificaciontipo/:id', lc_fotoidentificaciontipoController.lc_fotoidentificaciontipoupdateById);

// Ruta para eliminar un registro de lc_fotoidentificaciontipo por su ID
router.delete('/lc_fotoidentificaciontipo/:id', lc_fotoidentificaciontipoController.lc_fotoidentificaciontipodeleteById);

module.exports = router;
