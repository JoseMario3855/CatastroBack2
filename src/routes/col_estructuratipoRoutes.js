import { Router } from 'express';
import {
    getAllcol_estructuratipo,
    col_estructuratipogetById,
    col_estructuratipocreate,
    col_estructuratipoupdateById,
    col_estructuratipodeleteById
} from '../controllers/col_estructuratipoController/col_estructuratipoController.js';

const router = Router();

// Ruta para obtener todas las col_estructuratipo
router.get('/col_estructuratipo', getAllcol_estructuratipo);

// Ruta para obtener una col_estructuratipo por ID
router.get('/col_estructuratipo/:id', col_estructuratipogetById);

// Ruta para crear una col_estructuratipo
router.post('/col_estructuratipo', col_estructuratipocreate);

// Ruta para actualizar una col_estructuratipo por ID
router.put('/col_estructuratipo/:id', col_estructuratipoupdateById);

// Ruta para eliminar una col_estructuratipo por ID
router.delete('/col_estructuratipo/:id', col_estructuratipodeleteById);

export default router;