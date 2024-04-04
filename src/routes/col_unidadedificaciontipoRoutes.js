const express = require('express');
const router = express.Router();
const col_unidadedificaciontipoController = require('../controllers/col_unidadedificaciontipoController/col_unidadedificaciontipoController');

// Ruta para obtener todos los registros de col_unidadedificaciontipo
router.get('/col_unidadedificaciontipo', col_unidadedificaciontipoController.getAllcol_unidadedificaciontipo);

// Ruta para crear un nuevo registro en col_unidadedificaciontipo
router.post('/col_unidadedificaciontipo', col_unidadedificaciontipoController.col_unidadedificaciontipocreate);

// Ruta para obtener un registro de col_unidadedificaciontipo por su ID
router.get('/col_unidadedificaciontipo/:id', col_unidadedificaciontipoController.col_unidadedificaciontipogetById);

// Ruta para actualizar un registro de col_unidadedificaciontipo por su ID
router.put('/col_unidadedificaciontipo/:id', col_unidadedificaciontipoController.col_unidadedificaciontipoupdateById);

// Ruta para eliminar un registro de col_unidadedificaciontipo por su ID
router.delete('/col_unidadedificaciontipo/:id', col_unidadedificaciontipoController.col_unidadedificaciontipodeleteById);

module.exports = router;
