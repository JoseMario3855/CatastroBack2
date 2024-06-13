import { Router } from 'express';
import {
    getAllcol_estadoredserviciostipo,
    col_estadoredserviciostipogetById,
    col_estadoredserviciostipocreate,
    col_estadoredserviciostipoupdateById,
    col_estadoredserviciostipodeleteById
} from '../controllers/col_estadoredserviciostipoController/col_estadoredserviciostipoController.js';

const router = Router();

// Ruta para obtener todas las col_estadoredserviciostipo
router.get('/col_estadoredserviciostipo', getAllcol_estadoredserviciostipo);

// Ruta para obtener todas las col_estadoredserviciostipo por ID
router.get('/col_estadoredserviciostipo/:id', col_estadoredserviciostipogetById);

// Ruta para crear una todas las col_estadoredserviciostipo
router.post('/col_estadoredserviciostipo', col_estadoredserviciostipocreate);

// Ruta para actualizar una col_estadoredserviciostipo por ID
router.put('/col_estadoredserviciostipo/:id', col_estadoredserviciostipoupdateById);

// Ruta para eliminar una col_estadoredserviciostipo por ID
router.delete('/col_estadoredserviciostipo/:id', col_estadoredserviciostipodeleteById);

export default router;

