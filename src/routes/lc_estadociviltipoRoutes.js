const express = require('express');
const router = express.Router();
const lc_estadociviltipoController = require('../controllers/lc_estadociviltipoController/lc_estadociviltipoController');

// Ruta para obtener todos los registros de lc_estadociviltipo
router.get('/lc_estadociviltipo', lc_estadociviltipoController.getAlllc_estadociviltipo);

// Ruta para crear un nuevo registro en lc_estadociviltipo
router.post('/lc_estadociviltipo', lc_estadociviltipoController.lc_estadociviltipocreate);

// Ruta para obtener un registro de lc_estadociviltipo por su ID
router.get('/lc_estadociviltipo/:id', lc_estadociviltipoController.lc_estadociviltipogetById);

// Ruta para actualizar un registro de lc_estadociviltipo por su ID
router.put('/lc_estadociviltipo/:id', lc_estadociviltipoController.lc_estadociviltipoupdateById);

// Ruta para eliminar un registro de lc_estadociviltipo por su ID
router.delete('/lc_estadociviltipo/:id', lc_estadociviltipoController.lc_estadociviltipodeleteById);

module.exports = router;
