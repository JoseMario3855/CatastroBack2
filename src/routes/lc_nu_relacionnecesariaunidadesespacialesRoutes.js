const express = require('express');
const router = express.Router();
const lc_nu_relacionnecesariaunidadesespacialesController = require('../controllers/lc_nu_relacionnecesariaunidadesespacialesController/lc_nu_relacionnecesariaunidadesespacialesController');

// Ruta para obtener todos los registros de lc_nu_relacionnecesariaunidadesespaciales
router.get('/lc_nu_relacionnecesariaunidadesespaciales', lc_nu_relacionnecesariaunidadesespacialesController.getAlllc_nu_relacionnecesariaunidadesespaciales);

// Ruta para crear un nuevo registro en lc_nu_relacionnecesariaunidadesespaciales
router.post('/lc_nu_relacionnecesariaunidadesespaciales', lc_nu_relacionnecesariaunidadesespacialesController.lc_nu_relacionnecesariaunidadesespacialescreate);

// Ruta para obtener un registro de lc_nu_relacionnecesariaunidadesespaciales por su ID
router.get('/lc_nu_relacionnecesariaunidadesespaciales/:id', lc_nu_relacionnecesariaunidadesespacialesController.lc_nu_relacionnecesariaunidadesespacialesgetById);

// Ruta para actualizar un registro de lc_nu_relacionnecesariaunidadesespaciales por su ID
router.put('/lc_nu_relacionnecesariaunidadesespaciales/:id', lc_nu_relacionnecesariaunidadesespacialesController.lc_nu_relacionnecesariaunidadesespacialesupdateById);

// Ruta para eliminar un registro de lc_nu_relacionnecesariaunidadesespaciales por su ID
router.delete('/lc_nu_relacionnecesariaunidadesespaciales/:id', lc_nu_relacionnecesariaunidadesespacialesController.lc_nu_relacionnecesariaunidadesespacialesdeleteById);

module.exports = router;
