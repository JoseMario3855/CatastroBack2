const express = require('express');
const router = express.Router();
const lc_clasecalificaciontipoController = require('../controllers/lc_clasecalificaciontipoController/lc_clasecalificaciontipoController');

// Ruta para obtener todos los registros de lc_clasecalificaciontipo
router.get('/lc_clasecalificaciontipo', lc_clasecalificaciontipoController.getAlllc_clasecalificaciontipo);

// Ruta para crear un nuevo registro en lc_clasecalificaciontipo
router.post('/lc_clasecalificaciontipo', lc_clasecalificaciontipoController.lc_clasecalificaciontipocreate);

// Ruta para obtener un registro de lc_clasecalificaciontipo por su ID
router.get('/lc_clasecalificaciontipo/:id', lc_clasecalificaciontipoController.lc_clasecalificaciontipogetById);

// Ruta para actualizar un registro de lc_clasecalificaciontipo por su ID
router.put('/lc_clasecalificaciontipo/:id', lc_clasecalificaciontipoController.lc_clasecalificaciontipoupdateById);

// Ruta para eliminar un registro de lc_clasecalificaciontipo por su ID
router.delete('/lc_clasecalificaciontipo/:id', lc_clasecalificaciontipoController.lc_clasecalificaciontipodeleteById);

module.exports = router;