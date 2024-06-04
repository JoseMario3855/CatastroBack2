// src/routes/lc_predioRoutes.js
import { Router } from 'express';
import {
    getAllPredios,
    createPredio,
    getPredioById,
    updatePredioById,
    deletePredioById
} from '../controllers/lc_predioController/lc_prediocontroller.js';

const router = Router();

router.get('/predios', getAllPredios);
router.post('/predios', createPredio);
router.get('/predios/:id', getPredioById);
router.put('/predios/:id', updatePredioById);
router.delete('/predios/:id', deletePredioById);

export default router;
