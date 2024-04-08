const express = require('express');
const router = express.Router();
const lc_resultadovisitatipoController = require('../controllers/lc_resultadovisitatipoController/lc_resultadovisitatipoController');

// Ruta para obtener todos los registros de lc_resultadovisitatipo
router.get('/lc_resultadovisitatipo', lc_resultadovisitatipoController.getAlllc_resultadovisitatipo);

// Ruta para crear un nuevo registro en lc_resultadovisitatipo
router.post('/lc_resultadovisitatipo', lc_resultadovisitatipoController.lc_resultadovisitatipocreate);

// Ruta para obtener un registro de lc_resultadovisitatipo por su ID
router.get('/lc_resultadovisitatipo/:id', lc_resultadovisitatipoController.lc_resultadovisitatipogetById);

// Ruta para actualizar un registro de lc_resultadovisitatipo por su ID
router.put('/lc_resultadovisitatipo/:id', lc_resultadovisitatipoController.lc_resultadovisitatipoupdateById);

// Ruta para eliminar un registro de lc_resultadovisitatipo por su ID
router.delete('/lc_resultadovisitatipo/:id', lc_resultadovisitatipoController.lc_resultadovisitatipodeleteById);

module.exports = router;
