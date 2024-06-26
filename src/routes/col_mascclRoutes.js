const express = require('express');
const router = express.Router();
const  col_mascclController = require('../controllers/col_mascclController/col_mascclController');


// Ruta para obtener todas las col_masccl
router.get('/colmasccl', col_mascclController.getAllcolmasccl);

// Ruta para obtener todas las col_masccl por ID
router.get('/colmasccl/:id', col_mascclController.colmascclgetById);

// Ruta para crear una todas las col_masccl
router.post('/colmasccl', col_mascclController.colmascclcreate);

// Ruta para actualizar una col_masccl por ID
router.put('/colmasccl/:id', col_mascclController.colmascclupdateById);

// Ruta para eliminar una col_masccl por ID
router.delete('/colmasccl/:id', col_mascclController.colmasccldeleteById);

module.exports = router;