const express = require('express');
const router = express.Router();
const lc_ofertatipoController = require('../controllers/lc_ofertatipoController/lc_ofertatipoController');

// Ruta para obtener todos los registros de lc_ofertatipo
router.get('/lc_ofertatipo', lc_ofertatipoController.getAlllc_ofertatipo);

// Ruta para crear un nuevo registro en lc_ofertatipo
router.post('/lc_ofertatipo', lc_ofertatipoController.lc_ofertatipocreate);

// Ruta para obtener un registro de lc_ofertatipo por su ID
router.get('/lc_ofertatipo/:id', lc_ofertatipoController.lc_ofertatipogetById);

// Ruta para actualizar un registro de lc_ofertatipo por su ID
router.put('/lc_ofertatipo/:id', lc_ofertatipoController.lc_ofertatipoupdateById);

// Ruta para eliminar un registro de lc_ofertatipo por su ID
router.delete('/lc_ofertatipo/:id', lc_ofertatipoController.lc_ofertatipodeleteById);

module.exports = router;
