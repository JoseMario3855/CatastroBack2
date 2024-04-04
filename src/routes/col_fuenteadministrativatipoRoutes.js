const express = require('express');
const router = express.Router();
const  col_fuenteadministrativatipoController= require('../controllers/col_fuenteadministrativatipoController/col_fuenteadministrativatipoController');


// Ruta para obtener todas las col_fuenteadministrativatipo
router.get('/col_fuenteadministrativatipo', col_fuenteadministrativatipoController.getAllcol_fuenteadministrativatipo);

// Ruta para obtener todas las col_fuenteadministrativatipo por ID
router.get('/col_fuenteadministrativatipo/:id', col_fuenteadministrativatipoController.col_fuenteadministrativatipogetById);

// Ruta para crear una todas las col_fuenteadministrativatipo
router.post('/col_fuenteadministrativatipo', col_fuenteadministrativatipoController.col_fuenteadministrativatipocreate);

// Ruta para actualizar una col_fuenteadministrativatipo por ID
router.put('/col_fuenteadministrativatipo/:id', col_fuenteadministrativatipoController.col_fuenteadministrativatipoupdateById);

// Ruta para eliminar una col_fuenteadministrativatipo por ID
router.delete('/col_fuenteadministrativatipo/:id', col_fuenteadministrativatipoController.col_fuenteadministrativatipodeleteById);

module.exports = router;

