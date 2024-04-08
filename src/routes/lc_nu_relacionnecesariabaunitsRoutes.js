const express = require('express');
const router = express.Router();
const lc_nu_relacionnecesariabaunitsController = require('../controllers/lc_nu_relacionnecesariabaunitsController/lc_nu_relacionnecesariabaunitsController');

// Ruta para obtener todos los registros de lc_nu_relacionnecesariabaunits
router.get('/lc_nu_relacionnecesariabaunits', lc_nu_relacionnecesariabaunitsController.getAlllc_nu_relacionnecesariabaunits);

// Ruta para crear un nuevo registro en lc_nu_relacionnecesariabaunits
router.post('/lc_nu_relacionnecesariabaunits', lc_nu_relacionnecesariabaunitsController.lc_nu_relacionnecesariabaunitscreate);

// Ruta para obtener un registro de lc_nu_relacionnecesariabaunits por su ID
router.get('/lc_nu_relacionnecesariabaunits/:id', lc_nu_relacionnecesariabaunitsController.lc_nu_relacionnecesariabaunitsgetById);

// Ruta para actualizar un registro de lc_nu_relacionnecesariabaunits por su ID
router.put('/lc_nu_relacionnecesariabaunits/:id', lc_nu_relacionnecesariabaunitsController.lc_nu_relacionnecesariabaunitsupdateById);

// Ruta para eliminar un registro de lc_nu_relacionnecesariabaunits por su ID
router.delete('/lc_nu_relacionnecesariabaunits/:id', lc_nu_relacionnecesariabaunitsController.lc_nu_relacionnecesariabaunitsdeleteById);

module.exports = router;
