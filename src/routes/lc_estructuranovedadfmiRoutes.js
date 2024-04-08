const express = require('express');
const router = express.Router();
const lc_estructuranovedadfmiController = require('../controllers/lc_estructuranovedadfmiController/lc_estructuranovedadfmiController');

// Ruta para obtener todos los registros de lc_estructuranovedadfmi
router.get('/lc_estructuranovedadfmi', lc_estructuranovedadfmiController.getAlllc_estructuranovedadfmi);

// Ruta para crear un nuevo registro en lc_estructuranovedadfmi
router.post('/lc_estructuranovedadfmi', lc_estructuranovedadfmiController.lc_estructuranovedadfmicreate);

// Ruta para obtener un registro de lc_estructuranovedadfmi por su ID
router.get('/lc_estructuranovedadfmi/:id', lc_estructuranovedadfmiController.lc_estructuranovedadfmigetById);

// Ruta para actualizar un registro de lc_estructuranovedadfmi por su ID
router.put('/lc_estructuranovedadfmi/:id', lc_estructuranovedadfmiController.lc_estructuranovedadfmiupdateById);

// Ruta para eliminar un registro de lc_estructuranovedadfmi por su ID
router.delete('/lc_estructuranovedadfmi/:id', lc_estructuranovedadfmiController.lc_estructuranovedadfmideleteById);

module.exports = router;
