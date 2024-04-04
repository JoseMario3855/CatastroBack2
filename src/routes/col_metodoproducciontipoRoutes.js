const express = require('express');
const router = express.Router();
const  col_metodoproducciontipoController = require('../controllers/col_metodoproducciontipoController/col_metodoproducciontipoController');


// Ruta para obtener todas las col_metodoproducciontipo
router.get('/col_metodoproducciontipo', col_metodoproducciontipoController.getAllcol_metodoproducciontipo);

// Ruta para obtener todas las col_metodoproducciontipo por ID
router.get('/col_metodoproducciontipo/:id', col_metodoproducciontipoController.col_metodoproducciontipogetById);

// Ruta para crear una todas las col_metodoproducciontipo
router.post('/col_metodoproducciontipo', col_metodoproducciontipoController.col_metodoproducciontipocreate);

// Ruta para actualizar una col_metodoproducciontipo por ID
router.put('/col_metodoproducciontipo/:id', col_metodoproducciontipoController.col_metodoproducciontipoupdateById);

// Ruta para eliminar una col_metodoproducciontipo por ID
router.delete('/col_metodoproducciontipo/:id', col_metodoproducciontipoController.col_metodoproducciontipodeleteById);

module.exports = router;