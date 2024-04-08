const express = require('express');
const router = express.Router();
const lc_sexotipoController = require('../controllers/lc_sexotipoController/lc_sexotipoController');

// Ruta para obtener todos los registros de lc_sexotipo
router.get('/lc_sexotipo', lc_sexotipoController.getAlllc_sexotipo);

// Ruta para crear un nuevo registro en lc_sexotipo
router.post('/lc_sexotipo', lc_sexotipoController.lc_sexotipocreate);

// Ruta para obtener un registro de lc_sexotipo por su ID
router.get('/lc_sexotipo/:id', lc_sexotipoController.lc_sexotipogetById);

// Ruta para actualizar un registro de lc_sexotipo por su ID
router.put('/lc_sexotipo/:id', lc_sexotipoController.lc_sexotipoupdateById);

// Ruta para eliminar un registro de lc_sexotipo por su ID
router.delete('/lc_sexotipo/:id', lc_sexotipoController.lc_sexotipodeleteById);

module.exports = router;
