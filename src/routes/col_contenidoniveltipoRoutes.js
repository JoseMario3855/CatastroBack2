import { Router } from 'express';
import {
    getAllcol_contenidoniveltipo,
    col_contenidoniveltipoById,
    createcol_contenidoniveltipo,
    ACcol_contenidoniveltipoById,
    Deletecol_contenidoniveltipoById



} from '../controllers/col_contenidoniveltipoController/col_contenidoniveltipoController.js'

const router =Router();
// Ruta para obtener todas las col_contenidoniveltipo
router.get('/col_contenidoniveltipo', getAllcol_contenidoniveltipo);

// Ruta para obtener todas las col_contenidoniveltipo por ID
router.get('/col_contenidoniveltipo/:id', col_contenidoniveltipoById);

// Ruta para crear una todas las col_contenidoniveltipo
router.post('/col_contenidoniveltipo', createcol_contenidoniveltipo);

// Ruta para actualizar una col_contenidoniveltipo por ID
router.put('/col_contenidoniveltipo/:id',ACcol_contenidoniveltipoById);

// Ruta para eliminar una col_contenidoniveltipo por ID
router.delete('/col_contenidoniveltipo/:id', Deletecol_contenidoniveltipoById);

export default router;
