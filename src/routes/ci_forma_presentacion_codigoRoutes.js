import { Router } from 'express';
import {
    getAllci_forma_presentacion_codigo,
    createci_forma_presentacion_codigo,
    ci_forma_presentacion_codigoById,
    ACci_forma_presentacion_codigoById,
    ci_forma_presentacion_codigodeleteById

}
from '../controllers/ci_forma_presentacion_codigoController/ci_forma_presentacion_codigoController.js'

const router = Router();
// Ruta para obtener todas las ci_forma_presentacion_codigo
router.get('/ci_forma_presentacion_codigo', getAllci_forma_presentacion_codigo);

// Ruta para obtener todas las ci_forma_presentacion_codigo por ID
router.get('/ci_forma_presentacion_codigo/:id', ci_forma_presentacion_codigoById);

// Ruta para crear una todas las ci_forma_presentacion_codigo
router.post('/ci_forma_presentacion_codigo', createci_forma_presentacion_codigo);

// Ruta para actualizar una ci_forma_presentacion_codigo por ID
router.put('/ci_forma_presentacion_codigo/:id', ACci_forma_presentacion_codigoById);

// Ruta para eliminar una ci_forma_presentacion_codigo por ID
router.delete('/ci_forma_presentacion_codigo/:id', ci_forma_presentacion_codigodeleteById);

export default router;
