const express = require('express');
const router = express.Router();
const lc_calificartipoController = require('../controllers/lc_calificartipoController/lc_calificartipoController');

// Ruta para obtener todos los registros de lc_calificartipo
router.get('/lc_calificartipo', lc_calificartipoController.getAlllc_calificartipo);

// Ruta para crear un nuevo registro en lc_calificartipo
router.post('/lc_calificartipo', lc_calificartipoController.lc_calificartipocreate);

// Ruta para obtener un registro de lc_calificartipo por su ID
router.get('/lc_calificartipo/:id', lc_calificartipoController.lc_calificartipogetById);

// Ruta para actualizar un registro de lc_calificartipo por su ID
router.put('/lc_calificartipo/:id', lc_calificartipoController.lc_calificartipoupdateById);

// Ruta para eliminar un registro de lc_calificartipo por su ID
router.delete('/lc_calificartipo/:id', lc_calificartipoController.lc_calificartipodeleteById);

module.exports = router;
