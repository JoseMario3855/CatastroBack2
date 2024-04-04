const express = require('express');
const router = express.Router();
const  col_redserviciostipoController = require('../controllers/col_redserviciostipoController/col_redserviciostipoController');


// Ruta para obtener todas las col_redserviciostipo
router.get('/col_redserviciostipo', col_redserviciostipoController.getAllcol_redserviciostipo);

// Ruta para obtener todas las col_redserviciostipo por ID
router.get('/col_redserviciostipo/:id', col_redserviciostipoController.col_redserviciostipogetById);

// Ruta para crear una todas las col_redserviciostipo
router.post('/col_redserviciostipo', col_redserviciostipoController.col_redserviciostipocreate);

// Ruta para actualizar una col_redserviciostipo por ID
router.put('/col_redserviciostipo/:id', col_redserviciostipoController.col_redserviciostipoupdateById);

// Ruta para eliminar una col_redserviciostipo por ID
router.delete('/col_redserviciostipo/:id', col_redserviciostipoController.col_redserviciostipodeleteById);

module.exports = router;