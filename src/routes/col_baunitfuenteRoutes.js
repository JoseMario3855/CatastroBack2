import { Router } from 'express';
import {
    getAllcol_baunitfuenteController,
    createcol_baunitfuenteController,
    col_baunitfuenteControllerById,
    ACcol_baunitfuenteControllerById,
    col_baunitfuenteControllerdeleteById



}
from '../controllers/col_baunitfuenteController/col_baunitfuenteController.js';

const router=Router()

// Ruta para obtener todas las col_baunitfuente
router.get('/col_baunitfuente',getAllcol_baunitfuenteController);

// Ruta para obtener todas las col_baunitfuente por ID
router.get('/col_baunitfuente/:id', createcol_baunitfuenteController);

// Ruta para crear una todas las col_baunitfuente
router.post('/col_baunitfuente', col_baunitfuenteControllerById);

// Ruta para actualizar una col_baunitfuente por ID
router.put('/col_baunitfuente/:id', ACcol_baunitfuenteControllerById);

// Ruta para eliminar una col_baunitfuente por ID
router.delete('/col_baunitfuente/:id', col_baunitfuenteControllerdeleteById);

export default router;
