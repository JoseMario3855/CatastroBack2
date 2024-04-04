const express = require('express');
const router = express.Router();
const col_unidadfuenteController = require('../controllers/col_unidadfuenteController/col_unidadfuenteController');

// Ruta para obtener todos los registros de col_unidadfuente
router.get('/col_unidadfuente', col_unidadfuenteController.getAllcol_unidadfuente);

// Ruta para crear un nuevo registro en col_unidadfuente
router.post('/col_unidadfuente', col_unidadfuenteController.col_unidadfuentecreate);

// Ruta para obtener un registro de col_unidadfuente por su ID
router.get('/col_unidadfuente/:id', col_unidadfuenteController.col_unidadfuentegetById);

// Ruta para actualizar un registro de col_unidadfuente por su ID
router.put('/col_unidadfuente/:id', col_unidadfuenteController.col_unidadfuenteupdateById);

// Ruta para eliminar un registro de col_unidadfuente por su ID
router.delete('/col_unidadfuente/:id', col_unidadfuenteController.col_unidadfuentedeleteById);

module.exports = router;
