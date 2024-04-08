const express = require('express');
const router = express.Router();
const lc_estadoconservaciontipoController = require('../controllers/lc_estadoconservaciontipoController/lc_estadoconservaciontipoController');

// Ruta para obtener todos los registros de lc_estadoconservaciontipo
router.get('/lc_estadoconservaciontipo', lc_estadoconservaciontipoController.getAlllc_estadoconservaciontipo);

// Ruta para crear un nuevo registro en lc_estadoconservaciontipo
router.post('/lc_estadoconservaciontipo', lc_estadoconservaciontipoController.lc_estadoconservaciontipocreate);

// Ruta para obtener un registro de lc_estadoconservaciontipo por su ID
router.get('/lc_estadoconservaciontipo/:id', lc_estadoconservaciontipoController.lc_estadoconservaciontipogetById);

// Ruta para actualizar un registro de lc_estadoconservaciontipo por su ID
router.put('/lc_estadoconservaciontipo/:id', lc_estadoconservaciontipoController.lc_estadoconservaciontipoupdateById);

// Ruta para eliminar un registro de lc_estadoconservaciontipo por su ID
router.delete('/lc_estadoconservaciontipo/:id', lc_estadoconservaciontipoController.lc_estadoconservaciontipodeleteById);

module.exports = router;
