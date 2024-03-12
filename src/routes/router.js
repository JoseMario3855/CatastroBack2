const express = require('express');
const router = express.Router();

function authMiddleware(req, res, next) {
    // Verificar la autenticación del usuario
    // Si el usuario está autenticado, llama a next()
    // Si el usuario no está autenticado, devuelve un error 401 Unauthorized
    if (req.isAuthenticated()) {
        return next();
    } else {
        return res.status(401).json({ message: 'Unauthorized' });
    }
}


// Importar controladores
const predioController = require('../controllers/lc_predioController/lc_prediocontroller');
const unidadConstruccionController = require('../controllers/lc_unidadconstruccionController/lc_unidadconstruccionController');
const calificacionConvencionalController = require('../controllers/lc_calificacionconvecionalController/lc_calificacionconvecionalController');
const calificacionNoConvencionalController = require('../controllers/lc_calificacionnoconvencionalController/lc_calificacionnoconvencionalController');
const caracteristicaUnidadConstruccionController = require('../controllers/lc_caracteristicaunidadconstruccionController/lc_caracteristicaunidadconstruccionController');
const construccionPlantaTipoController = require('../controllers/lc_construccionplantatipoController/lc_construccionplantatipoController');
const dominioConstruccionTipoController = require('../controllers/lc_dominioconstrucciontipoController/lc_dominioconstrucciontipoController');
const tipologiaConstruccionController = require('../controllers/lc_tipologiaconstruccionController/lc_tipologiaconstruccionController');
const unidadConstruccionTipoController = require('../controllers/lc_unidadconstrucciontipoController/lc_unidadconstrucciontipoController');
const construccionTipoController = require('../controllers/lc_construcciontipoController/lc_construcciontipoController');
const usoConstruccionTipoController = require('../controllers/lc_usouconstipoController/lc_usouconstipoController');

// Definir rutas
router.use('/predios', predioController);
router.use('/unidad-construccion', unidadConstruccionController);
router.use('/calificacion-convencional', calificacionConvencionalController);
router.use('/calificacion-no-convencional', calificacionNoConvencionalController);
router.use('/caracteristica-unidad-construccion', caracteristicaUnidadConstruccionController);
router.use('/construccion-planta-tipo', construccionPlantaTipoController);
router.use('/dominio-construccion-tipo', dominioConstruccionTipoController);
router.use('/tipologia-construccion', tipologiaConstruccionController);
router.use('/unidad-construccion-tipo', unidadConstruccionTipoController);
router.use('/construccion-tipo', construccionTipoController);
router.use('/uso-construccion-tipo', usoConstruccionTipoController);

module.exports = router;
