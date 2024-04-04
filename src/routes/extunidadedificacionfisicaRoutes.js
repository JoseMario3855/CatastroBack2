const express = require('express');
const router = express.Router();
const extunidadedificacionfisicaController = require('../controllers/extunidadedificacionfisicaController/extunidadedificacionfisicaController');

// Ruta para obtener todos los registros de extunidadedificacionfisica
router.get('/extunidadedificacionfisica', extunidadedificacionfisicaController.getAllextunidadedificacionfisica);

// Ruta para crear un nuevo registro en extunidadedificacionfisica
router.post('/extunidadedificacionfisica', extunidadedificacionfisicaController.extunidadedificacionfisicacreate);

// Ruta para obtener un registro de extunidadedificacionfisica por su ID
router.get('/extunidadedificacionfisica/:id', extunidadedificacionfisicaController.extunidadedificacionfisicagetById);

// Ruta para actualizar un registro de extunidadedificacionfisica por su ID
router.put('/extunidadedificacionfisica/:id', extunidadedificacionfisicaController.extunidadedificacionfisicaupdateById);

// Ruta para eliminar un registro de extunidadedificacionfisica por su ID
router.delete('/extunidadedificacionfisica/:id', extunidadedificacionfisicaController.extunidadedificacionfisicadeleteById);

module.exports = router;
