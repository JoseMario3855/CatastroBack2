const express = require('express');
const router = express.Router();
const lc_nu_espaciojuridicounidadedificacionController = require('../controllers/lc_nu_espaciojuridicounidadedificacionController/lc_nu_espaciojuridicounidadedificacionController');

// Ruta para obtener todos los registros de lc_nu_espaciojuridicounidadedificacion
router.get('/lc_nu_espaciojuridicounidadedificacion', lc_nu_espaciojuridicounidadedificacionController.getAlllc_nu_espaciojuridicounidadedificacion);

// Ruta para crear un nuevo registro en lc_nu_espaciojuridicounidadedificacion
router.post('/lc_nu_espaciojuridicounidadedificacion', lc_nu_espaciojuridicounidadedificacionController.lc_nu_espaciojuridicounidadedificacioncreate);

// Ruta para obtener un registro de lc_nu_espaciojuridicounidadedificacion por su ID
router.get('/lc_nu_espaciojuridicounidadedificacion/:id', lc_nu_espaciojuridicounidadedificacionController.lc_nu_espaciojuridicounidadedificaciongetById);

// Ruta para actualizar un registro de lc_nu_espaciojuridicounidadedificacion por su ID
router.put('/lc_nu_espaciojuridicounidadedificacion/:id', lc_nu_espaciojuridicounidadedificacionController.lc_nu_espaciojuridicounidadedificacionupdateById);

// Ruta para eliminar un registro de lc_nu_espaciojuridicounidadedificacion por su ID
router.delete('/lc_nu_espaciojuridicounidadedificacion/:id', lc_nu_espaciojuridicounidadedificacionController.lc_nu_espaciojuridicounidadedificaciondeleteById);

module.exports = router;
