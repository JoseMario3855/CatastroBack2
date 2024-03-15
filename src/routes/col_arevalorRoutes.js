const express = require('express');
const router = express.Router();
const  col_areavalorController= require('../controllers/col_areavalorController/col_areavalorController');


// Ruta para obtener todas las extdireccion
router.get('/colareavalor', col_areavalorController.getAllcolareavalor);

// Ruta para obtener todas las extdireccion por ID
router.get('/colareavalor/:id', col_areavalorController.colareavalorgetById);

// Ruta para crear una todas las extdireccion
router.post('/colareavalor', col_areavalorController.createcolareavalor);

// Ruta para actualizar una extdireccion por ID
router.put('/colareavalor/:id', col_areavalorController.colareavalorupdateById);

// Ruta para eliminar una extdireccion por ID
router.delete('/colareavalor/:id', col_areavalorController.colareavalordeleteById);

module.exports = router;
