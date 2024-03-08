const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const router = require('./routes/router.js');

// Importa Sequelize
const Sequelize = require('sequelize');

// Define la configuración de la base de datos
const sequelize = new Sequelize('catastro', 'postgres', '12345', {
    host: 'localhost',
    dialect: 'postgres' // Especifica el dialecto de la base de datos que estás utilizando
});

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use('/', router);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Servidor en puerto ${PORT}`);
});

// Inicializa sequelize
async function initialize() {
    try {
        await sequelize.authenticate();
        console.log('Conexión establecida correctamente con la base de datos');
        await sequelize.sync({ alter: true });
        console.log('Modelos sincronizados con la base de datos');
    } catch (error) {
        console.error('Error al conectar y sincronizar con la base de datos:', error);
    }
}

initialize();
