import  { Router } from 'express';

import {
    getAllcolareavalor,
    colareavalorgetById,
    createcolareavalor,
    colareavalorupdateById,
    colareavalordeleteById

    

} from '../controllers/col_areavalorController/col_areavalorController.js'

const router= Router();
// Ruta para obtener todas las extdireccion
router.get('/colareavalor', getAllcolareavalor);

// Ruta para obtener todas las extdireccion por ID
router.get('/colareavalor/:id', colareavalorgetById);

// Ruta para crear una todas las extdireccion
router.post('/colareavalor', createcolareavalor);

// Ruta para actualizar una extdireccion por ID
router.put('/colareavalor/:id', colareavalorupdateById);

// Ruta para eliminar una extdireccion por ID
router.delete('/colareavalor/:id', colareavalordeleteById);

export default router;
