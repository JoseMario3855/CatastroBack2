import {Router} from 'express';
import predioRoutes from './lc_predioRoutes.js'
import colbaunitRoutes from './col_baunitfuenteRoutes.js';
import ci_forma_presentacion_codigoRoutes from './ci_forma_presentacion_codigoRoutes.js';
import col_areavalorRoutes from './col_arevalorRoutes.js';
import col_baunitcomointeresadoRoutes from './col_baunitcomointeresadoRoutes.js';
import col_contenidoniveltipoRoutes from './col_contenidoniveltipoRoutes.js';
import col_baunitfuenteRoutes from './col_baunitfuenteRoutes.js';
import col_dimensiontipoRoutes from './col_dimensiontipoRoutes.js';
import col_estadodisponibilidadRoutes from './col_estadodisponibilidadtipoRoutes.js';
import col_estadoredserviciostipoRoutes from './col_estadoredserviciostipoRoutes.js';
import col_estructuratipo from './col_estructuratipoRoutes.js';
const router1 =Router();

// Definir rutas
router1.use(predioRoutes);
router1.use(colbaunitRoutes)
router1.use(ci_forma_presentacion_codigoRoutes);
router1.use (col_areavalorRoutes);
router1.use(col_baunitcomointeresadoRoutes);
router1.use(col_contenidoniveltipoRoutes);
router1.use(col_baunitfuenteRoutes);
router1.use(col_dimensiontipoRoutes);
router1.use(col_estadodisponibilidadRoutes);
router1.use(col_estadoredserviciostipoRoutes);
router1.use(col_estructuratipo)



export default  router1;