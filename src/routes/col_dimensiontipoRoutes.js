import { Router } from 'express';
import {
    getAllcol_dimensiontipo,
    col_dimensiontipoById,
    createcol_dimensiontipo,
    ACcol_dimensiontipooById,
    updatecol_dimensiontipoById
} from '../controllers/col_dimensiontipoController/col_dimensiontipoController.js';

const router= Router();
// Ruta para obtener todas las col_dimensiontipo
router.get('/col_dimensiontipo', getAllcol_dimensiontipo);

// Ruta para obtener todas las col_dimensiontipo por ID
router.get('/col_dimensiontipo/:id', col_dimensiontipoById);

// Ruta para crear una todas las col_dimensiontipo
router.post('/col_dimensiontipo', createcol_dimensiontipo);

// Ruta para actualizar una col_dimensiontipo por ID
router.put('/col_dimensiontipo/:id', ACcol_dimensiontipooById);

// Ruta para eliminar una col_dimensiontipo por ID
router.delete('/col_dimensiontipo/:id', updatecol_dimensiontipoById);

export default router;

