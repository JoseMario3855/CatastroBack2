import { Router } from 'express';
import {
    getAllcol_estadodisponibilidadtipo,
    col_estadodisponibilidadtipoById,
    createcol_estadodisponibilidadtipo,
    ACcol_estadodisponibilidadtipoById,
    Updatecol_estadodisponibilidadtipoById
} from '../controllers/col_estadodisponibilidadtipoController/col_estadodisponibilidadtipoController.js';

const router = Router();

// Ruta para obtener todas las col_estadodisponibilidad
router.get('/col_estadodisponibilidad', getAllcol_estadodisponibilidadtipo);

// Ruta para obtener todas las col_estadodisponibilidad por ID
router.get('/col_estadodisponibilidad/:id', col_estadodisponibilidadtipoById);

// Ruta para crear una todas las col_estadodisponibilidad
router.post('/col_estadodisponibilidad', createcol_estadodisponibilidadtipo);

// Ruta para actualizar una col_estadodisponibilidad por ID
router.put('/col_estadodisponibilidad/:id', ACcol_estadodisponibilidadtipoById);

// Ruta para eliminar una col_estadodisponibilidad por ID
router.delete('/col_estadodisponibilidad/:id', Updatecol_estadodisponibilidadtipoById);

export default  router;
