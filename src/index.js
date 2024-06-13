/*
// index.js

// Carga las variables de entorno desde el archivo .env
require('dotenv').config();

// Importa las dependencias necesarias
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const router = require('../src/routes/router'); // Importa el enrutador principal

// Crea una instancia de la aplicación Express
const app = express();

// Configura middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Define las rutas
app.use('/', router); // Usa el enrutador definido en router.js en la ruta raíz '/'

// Define el puerto en el que escuchará el servidor


const PORT = process.env.PORT || 4000;
console.log ('Server is listening on port',4000)

// Arranca el servidor
app.listen(PORT, () => {
    console.log(`Servidor en puerto ${PORT}`);
});
*/

import app from './app.js';
import { sequelize } from './database/database.js';
import './models/lc_predio.js';
import './models/lc_categoriasuelotipo.js';
import './models/lc_destinacioneconomicatipo.js';
import './models/lc_clasesuelotipo.js';
import './models/col_unidadadministrativabasicatipo.js';
import './models/lc_interesadodocumentotipo.js';
import './models/lc_sexotipo.js';
import './models/lc_grupoetnicotipo.js';
import './models/lc_estadociviltipo.js';
import './models/lc_interesado.js';
import './models/col_areavalor.js';
import './models/lc_unidadconstruccion.js';
import './models/ci_forma_presentacion_codigo.js';
import './models/lc_nu_espaciojuridicounidadedificacion.js';
import './models/lc_nu_espaciojuridicoredservicios.js';
import './models/lc_terreno.js';
import './models/lc_servidumbretransito.js';
import './models/lc_construcciontipo.js';
import './models/col_dimensiontipo.js';
import './models/lc_dominioconstrucciontipo.js';
import './models/col_relacionsuperficietipo.js';
import './models/lc_nu_nivel.js';
import './models/col_estadoredserviciostipo.js';
import './models/col_unidadedificaciontipo.js';
import './models/col_relacionsuperficietipo.js';
import './models/col_redserviciostipo.js';
import './models/col_registrotipo.js';
import './models/col_estructuratipo.js';
import './models/col_contenidoniveltipo.js';
import './models/col_baunitcomointeresado.js';
import './models/col_grupointeresadotipo.js';
import './models/col_baunitfuente.js';
import './models/lc_fuenteespacial.js';
import './models/col_fuenteespacialtipo.js';
import './models/col_estadodisponibilidadtipo.js';

async function main (){
    try {
    await sequelize.sync({alter: true})
    app.listen(4000);
    console.log('serveer is listening on port',5000);
}  catch (error) {
    console.error("Unable to connect to the database:", error)

}
}

main();




