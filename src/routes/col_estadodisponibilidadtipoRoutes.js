const express = require('express');
const router = express.Router();
const  col_estadodisponibilidadtipoController= require('../controllers/col_estadodisponibilidadtipoController/col_estadodisponibilidadtipoController');


// Ruta para obtener todas las col_estadodisponibilidad
router.get('/col_estadodisponibilidad', col_estadodisponibilidadtipoController.getAllcol_estadodisponibilidadtipo);

// Ruta para obtener todas las col_estadodisponibilidad por ID
router.get('/col_estadodisponibilidad/:id', col_estadodisponibilidadtipoController.col_estadodisponibilidadtipoById);

// Ruta para crear una todas las col_estadodisponibilidad
router.post('/col_estadodisponibilidad', col_estadodisponibilidadtipoController.createcol_estadodisponibilidadtipo);

// Ruta para actualizar una col_estadodisponibilidad por ID
router.put('/col_estadodisponibilidad/:id', col_estadodisponibilidadtipoController.ACcol_estadodisponibilidadtipoById);

// Ruta para eliminar una col_estadodisponibilidad por ID
router.delete('/col_estadodisponibilidad/:id', col_estadodisponibilidadtipoController.col_estadodisponibilidadtipoById);

module.exports = router;
