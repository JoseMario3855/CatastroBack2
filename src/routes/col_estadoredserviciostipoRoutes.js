const express = require('express');
const router = express.Router();
const  col_estadoredserviciostipoController= require('../controllers/col_estadoredserviciostipoController/col_estadoredserviciostipoController');


// Ruta para obtener todas las col_estadoredserviciostipo
router.get('/col_estadoredserviciostipo', col_estadoredserviciostipoController.getAllcol_estadoredserviciostipo);

// Ruta para obtener todas las col_estadoredserviciostipo por ID
router.get('/col_estadoredserviciostipo/:id', col_estadoredserviciostipoController.col_estadoredserviciostipogetById);

// Ruta para crear una todas las col_estadoredserviciostipo
router.post('/col_estadoredserviciostipo', col_estadoredserviciostipoController.col_estadoredserviciostipocreate);

// Ruta para actualizar una col_estadoredserviciostipo por ID
router.put('/col_estadoredserviciostipo/:id', col_estadoredserviciostipoController.col_estadoredserviciostipoupdateById);

// Ruta para eliminar una col_estadoredserviciostipo por ID
router.delete('/col_estadoredserviciostipo/:id', col_estadoredserviciostipoController.col_estadoredserviciostipodeleteById);

module.exports = router;

