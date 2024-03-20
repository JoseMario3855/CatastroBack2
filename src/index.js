require('dotenv').config(); // Carga las variables de entorno desde el archivo .env

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const Sequelize = require('sequelize');
const router = require('./routes/router.js'); // Importa el enrutador definido en router.js

// Define la configuración de la base de datos
const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres' // Especifica el dialecto de la base de datos que estás utilizando
});

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use('/', router); // Usa el enrutador definido en router.js en la ruta raíz '/'

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Servidor en puerto ${PORT}`);
});

// Inicializa sequelize
async function initialize() {
    try {
        // Verifica la conexión con la base de datos
        await sequelize.authenticate();
        console.log('Conexión establecida correctamente con la base de datos');
        
        // Sincroniza los modelos con la base de datos
        await sequelize.sync({ alter: true });
        console.log('Modelos sincronizados con la base de datos');
    } catch (error) {
        console.error('Error al conectar y sincronizar con la base de datos:', error);
        // Si hay un error, detiene la aplicación
        process.exit(1);
    }
}

initialize();


