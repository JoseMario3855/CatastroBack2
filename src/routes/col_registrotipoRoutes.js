const express = require('express');
const router = express.Router();
const  col_registrotipoController = require('../controllers/col_registrotipoController/col_registrotipoController');


// Ruta para obtener todas las col_registrotipo
router.get('/col_registrotipo', col_registrotipoController.getAllcol_registrotipo);

// Ruta para obtener todas las col_registrotipo por ID
router.get('/col_registrotipo/:id', col_registrotipoController.col_registrotipogetById);

// Ruta para crear una todas las col_registrotipo
router.post('/col_registrotipo', col_registrotipoController.col_registrotipocreate);

// Ruta para actualizar una col_registrotipo por ID
router.put('/col_registrotipo/:id', col_registrotipoController.col_registrotipoupdateById);

// Ruta para eliminar una col_registrotipo por ID
router.delete('/col_registrotipo/:id', col_registrotipoController.col_registrotipodeleteById);

module.exports = router;