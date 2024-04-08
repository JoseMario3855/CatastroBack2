const express = require('express');
const router = express.Router();
const lc_nu_caraslinderoController = require('../controllers/lc_nu_caraslinderoController/lc_nu_caraslinderoController');

// Ruta para obtener todos los registros de lc_nu_caraslindero
router.get('/lc_nu_caraslindero', lc_nu_caraslinderoController.getAlllc_nu_caraslindero);

// Ruta para crear un nuevo registro en lc_nu_caraslindero
router.post('/lc_nu_caraslindero', lc_nu_caraslinderoController.lc_nu_caraslinderocreate);

// Ruta para obtener un registro de lc_nu_caraslindero por su ID
router.get('/lc_nu_caraslindero/:id', lc_nu_caraslinderoController.lc_nu_caraslinderogetById);

// Ruta para actualizar un registro de lc_nu_caraslindero por su ID
router.put('/lc_nu_caraslindero/:id', lc_nu_caraslinderoController.lc_nu_caraslinderoupdateById);

// Ruta para eliminar un registro de lc_nu_caraslindero por su ID
router.delete('/lc_nu_caraslindero/:id', lc_nu_caraslinderoController.lc_nu_caraslinderodeleteById);

module.exports = router;
