const express = require('express');
const router = express.Router();
const lc_nu_agrupacionunidadesespacialesController = require('../controllers/lc_nu_agrupacionunidadesespacialesController/lc_nu_agrupacionunidadesespacialesController');

// Ruta para obtener todos los registros de lc_nu_agrupacionunidadesespaciales
router.get('/lc_nu_agrupacionunidadesespaciales', lc_nu_agrupacionunidadesespacialesController.getAlllc_nu_agrupacionunidadesespaciales);

// Ruta para crear un nuevo registro en lc_nu_agrupacionunidadesespaciales
router.post('/lc_nu_agrupacionunidadesespaciales', lc_nu_agrupacionunidadesespacialesController.lc_nu_agrupacionunidadesespacialescreate);

// Ruta para obtener un registro de lc_nu_agrupacionunidadesespaciales por su ID
router.get('/lc_nu_agrupacionunidadesespaciales/:id', lc_nu_agrupacionunidadesespacialesController.lc_nu_agrupacionunidadesespacialesgetById);

// Ruta para actualizar un registro de lc_nu_agrupacionunidadesespaciales por su ID
router.put('/lc_nu_agrupacionunidadesespaciales/:id', lc_nu_agrupacionunidadesespacialesController.lc_nu_agrupacionunidadesespacialesupdateById);

// Ruta para eliminar un registro de lc_nu_agrupacionunidadesespaciales por su ID
router.delete('/lc_nu_agrupacionunidadesespaciales/:id', lc_nu_agrupacionunidadesespacialesController.lc_nu_agrupacionunidadesespacialesdeleteById);

module.exports = router;
