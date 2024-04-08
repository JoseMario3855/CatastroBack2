const express = require('express');
const router = express.Router();
const lc_interesadodocumentotipoController = require('../controllers/lc_interesadodocumentotipoController/lc_interesadodocumentotipoController');

// Ruta para obtener todos los registros de lc_interesadodocumentotipo
router.get('/lc_interesadodocumentotipo', lc_interesadodocumentotipoController.getAlllc_interesadodocumentotipo);

// Ruta para crear un nuevo registro en lc_interesadodocumentotipo
router.post('/lc_interesadodocumentotipo', lc_interesadodocumentotipoController.lc_interesadodocumentotipocreate);

// Ruta para obtener un registro de lc_interesadodocumentotipo por su ID
router.get('/lc_interesadodocumentotipo/:id', lc_interesadodocumentotipoController.lc_interesadodocumentotipogetById);

// Ruta para actualizar un registro de lc_interesadodocumentotipo por su ID
router.put('/lc_interesadodocumentotipo/:id', lc_interesadodocumentotipoController.lc_interesadodocumentotipoupdateById);

// Ruta para eliminar un registro de lc_interesadodocumentotipo por su ID
router.delete('/lc_interesadodocumentotipo/:id', lc_interesadodocumentotipoController.lc_interesadodocumentotipodeleteById);

module.exports = router;
