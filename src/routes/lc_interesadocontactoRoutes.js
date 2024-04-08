const express = require('express');
const router = express.Router();
const lc_interesadocontactoController = require('../controllers/lc_interesadocontactoController/lc_interesadocontactoController');

// Ruta para obtener todos los registros de lc_interesadocontacto
router.get('/lc_interesadocontacto', lc_interesadocontactoController.getAlllc_interesadocontacto);

// Ruta para crear un nuevo registro en lc_interesadocontacto
router.post('/lc_interesadocontacto', lc_interesadocontactoController.lc_interesadocontactocreate);

// Ruta para obtener un registro de lc_interesadocontacto por su ID
router.get('/lc_interesadocontacto/:id', lc_interesadocontactoController.lc_interesadocontactogetById);

// Ruta para actualizar un registro de lc_interesadocontacto por su ID
router.put('/lc_interesadocontacto/:id', lc_interesadocontactoController.lc_interesadocontactoupdateById);

// Ruta para eliminar un registro de lc_interesadocontacto por su ID
router.delete('/lc_interesadocontacto/:id', lc_interesadocontactoController.lc_interesadocontactodeleteById);

module.exports = router;
