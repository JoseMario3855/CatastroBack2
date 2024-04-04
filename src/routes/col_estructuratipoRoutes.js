const express = require('express');
const router = express.Router();
const  col_estructuratipoController= require('../controllers/col_estructuratipoController/col_estructuratipoController');


// Ruta para obtener todas las col_estadoredserviciostipo
router.get('/col_estructuratipo', col_estructuratipoController.getAllcol_estructuratipo);

// Ruta para obtener todas las col_estadoredserviciostipo por ID
router.get('/col_estructuratipo/:id', col_estructuratipoController.col_estructuratipogetById);

// Ruta para crear una todas las col_estadoredserviciostipo
router.post('/col_estructuratipo', col_estructuratipoController.col_estructuratipocreate);

// Ruta para actualizar una col_estadoredserviciostipo por ID
router.put('/col_estructuratipo/:id', col_estructuratipoController.col_estructuratipoupdateById);

// Ruta para eliminar una col_estadoredserviciostipo por ID
router.delete('/col_estructuratipo/:id', col_estructuratipoController.col_estructuratipodeleteById);

module.exports = router;

