const express = require('express');
const router = express.Router();
const  extdireccionController= require('../controllers/extdireccionController/extdireccionController');


// Ruta para obtener todas las extdireccion
router.get('/extdireccion', extdireccionController.getAllextdireccion);

// Ruta para obtener todas las extdireccion por ID
router.get('/extdireccion/:id', extdireccionController.extdirecciongetById);

// Ruta para crear una todas las extdireccion
router.post('/extdireccion', extdireccionController.createextdireccion);

// Ruta para actualizar una extdireccion por ID
router.put('/extdireccion/:id', extdireccionController.extdireccionupdateById);

// Ruta para eliminar una extdireccion por ID
router.delete('/extdireccion/:id', extdireccionController.extdireccionldeleteById);

module.exports = router;
