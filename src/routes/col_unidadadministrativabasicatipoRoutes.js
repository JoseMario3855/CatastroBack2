const express = require('express');
const router = express.Router();
const col_unidadadministrativabasicatipoController = require('../controllers/col_unidadadministrativabasicatipoController/col_unidadadministrativabasicatipoController');

// Ruta para obtener todos los registros de col_unidadadministrativabasicatipo
router.get('/col_unidadadministrativabasicatipo', col_unidadadministrativabasicatipoController.getAllcol_unidadadministrativabasicatipo);

// Ruta para crear un nuevo registro en col_unidadadministrativabasicatipo
router.post('/col_unidadadministrativabasicatipo', col_unidadadministrativabasicatipoController.col_unidadadministrativabasicatipocreate);

// Ruta para obtener un registro de col_unidadadministrativabasicatipo por su ID
router.get('/col_unidadadministrativabasicatipo/:id', col_unidadadministrativabasicatipoController.col_unidadadministrativabasicatipogetById);

// Ruta para actualizar un registro de col_unidadadministrativabasicatipo por su ID
router.put('/col_unidadadministrativabasicatipo/:id', col_unidadadministrativabasicatipoController.col_unidadadministrativabasicatipoupdateById);

// Ruta para eliminar un registro de col_unidadadministrativabasicatipo por su ID
router.delete('/col_unidadadministrativabasicatipo/:id', col_unidadadministrativabasicatipoController.col_unidadadministrativabasicatipodeleteById);

module.exports = router;
