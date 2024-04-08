const express = require('express');
const router = express.Router();
const lc_predio_copropiedadController = require('../controllers/lc_predio_copropiedadController/lc_predio_copropiedadController');

// Ruta para obtener todos los registros de lc_predio_copropiedad
router.get('/lc_predio_copropiedad', lc_predio_copropiedadController.getAlllc_predio_copropiedad);

// Ruta para crear un nuevo registro en lc_predio_copropiedad
router.post('/lc_predio_copropiedad', lc_predio_copropiedadController.lc_predio_copropiedadcreate);

// Ruta para obtener un registro de lc_predio_copropiedad por su ID
router.get('/lc_predio_copropiedad/:id', lc_predio_copropiedadController.lc_predio_copropiedadgetById);

// Ruta para actualizar un registro de lc_predio_copropiedad por su ID
router.put('/lc_predio_copropiedad/:id', lc_predio_copropiedadController.lc_predio_copropiedadupdateById);

// Ruta para eliminar un registro de lc_predio_copropiedad por su ID
router.delete('/lc_predio_copropiedad/:id', lc_predio_copropiedadController.lc_predio_copropiedaddeleteById);

module.exports = router;
