import { Router } from 'express';
import{
    getAllcol_baunitcomointeresado,
    col_baunitcomointeresadoById,
    createcol_baunitcomointeresado,
    ACcol_baunitcomointeresadoById,
    col_baunitcomointeresadodeleteById


    
}
from '../controllers/col_baunitcomointeresadoController/col_baunitcomointeresadoController.js'

const router = Router();
// Ruta para obtener todas las col_baunitcomointeresado
router.get('/col_baunitcomointeresado', getAllcol_baunitcomointeresado);

// Ruta para obtener todas las col_baunitcomointeresado por ID
router.get('/ col_baunitcomointeresado/:id', col_baunitcomointeresadoById);

// Ruta para crear una todas las col_baunitcomointeresado
router.post('/col_baunitcomointeresado', createcol_baunitcomointeresado);

// Ruta para actualizar una col_baunitcomointeresado por ID
router.put('/col_baunitcomointeresado/:id', ACcol_baunitcomointeresadoById);

// Ruta para eliminar una col_baunitcomointeresado por ID
router.delete('/col_baunitcomointeresado/:id',col_baunitcomointeresadodeleteById);

export default router;
