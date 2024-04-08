const express = require('express');
const router = express.Router();
const lc_nu_nivelController = require('../controllers/lc_nu_nivelController/lc_nu_nivelController');

// Ruta para obtener todos los registros de lc_nu_nivel
router.get('/lc_nu_nivel', lc_nu_nivelController.getAlllc_nu_nivel);

// Ruta para crear un nuevo registro en lc_nu_nivel
router.post('/lc_nu_nivel', lc_nu_nivelController.lc_nu_nivelcreate);

// Ruta para obtener un registro de lc_nu_nivel por su ID
router.get('/lc_nu_nivel/:id', lc_nu_nivelController.lc_nu_nivelgetById);

// Ruta para actualizar un registro de lc_nu_nivel por su ID
router.put('/lc_nu_nivel/:id', lc_nu_nivelController.lc_nu_nivelupdateById);

// Ruta para eliminar un registro de lc_nu_nivel por su ID
router.delete('/lc_nu_nivel/:id', lc_nu_nivelController.lc_nu_niveldeleteById);

module.exports = router;
