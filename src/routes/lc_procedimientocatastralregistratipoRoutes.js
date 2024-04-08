const express = require('express');
const router = express.Router();
const lc_procedimientocatastralregistratipoController = require('../controllers/lc_procedimientocatastralregistratipoController/lc_procedimientocatastralregistratipoController');

// Ruta para obtener todos los registros de lc_procedimientocatastralregistratipo
router.get('/lc_procedimientocatastralregistratipo', lc_procedimientocatastralregistratipoController.getAlllc_procedimientocatastralregistratipo);

// Ruta para crear un nuevo registro en lc_procedimientocatastralregistratipo
router.post('/lc_procedimientocatastralregistratipo', lc_procedimientocatastralregistratipoController.lc_procedimientocatastralregistratipocreate);

// Ruta para obtener un registro de lc_procedimientocatastralregistratipo por su ID
router.get('/lc_procedimientocatastralregistratipo/:id', lc_procedimientocatastralregistratipoController.lc_procedimientocatastralregistratipogetById);

// Ruta para actualizar un registro de lc_procedimientocatastralregistratipo por su ID
router.put('/lc_procedimientocatastralregistratipo/:id', lc_procedimientocatastralregistratipoController.lc_procedimientocatastralregistratipoupdateById);

// Ruta para eliminar un registro de lc_procedimientocatastralregistratipo por su ID
router.delete('/lc_procedimientocatastralregistratipo/:id', lc_procedimientocatastralregistratipoController.lc_procedimientocatastralregistratipodeleteById);

module.exports = router;
