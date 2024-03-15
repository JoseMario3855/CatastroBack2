const express = require('express');
const router = express.Router();



// Importar controladores
const predioRoutes = require('./lc_predioRoutes');
const unidadconstruccionroutes = require('./lc_unidadconstruccionRoutes');
const calificacionconvencionalroutes = require('./lc_calificacionconvencionalRoutes');
const calificacionnoconvencionalroutes= require('./lc_calificacionconvencionalRoutes');
const caracteristicaunidadconstruccionRoutes = require ('./lc_caracteristicaunidadconstruccionRoutes');
const construccionplantatipoRoutes = require ('./lc_construccionplantatipoRoutes');
const construcciontipoRoutes= require ('./lc_construcciontipoRoutes');
const dominioConstruccionTipoRoutes=require ('./lc_dominioconstrucciontipoRoutes');
const tipologiaConstruccionRoutes =require('./lc_tipologiaconstruccionRoutes');
const unidadconstrucciontipoRoutes = require ('./lc_unidadconstrucciontipoRoutes');
const usouconstipoRoutes = require('./lc_usouconstipoRoutes');
const extdireccionRoutes = require ('./extdireccionRoutes');
const colareavalorRoutes = require ('./col_arevalorRoutes');
const colmasccRoutes = require ('./col_mascclRoutes');
const colvolumenvalorRoutes = require ('./col_volumenvalorRoutes');





// Definir rutas
router.use(predioRoutes);
router.use(unidadconstruccionroutes);
router.use(calificacionconvencionalroutes);
router.use(calificacionnoconvencionalroutes);
router.use(caracteristicaunidadconstruccionRoutes);
router.use (construccionplantatipoRoutes);
router.use(construcciontipoRoutes);
router.use(dominioConstruccionTipoRoutes);
router.use(tipologiaConstruccionRoutes);
router.use(unidadconstrucciontipoRoutes);
router.use(usouconstipoRoutes);
router.use(extdireccionRoutes);
router.use (colareavalorRoutes);
router.use (colmasccRoutes);
router.use(colvolumenvalorRoutes);



module.exports = router;
