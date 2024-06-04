// src/app.js
import express from 'express';
import predioRoutes from './routes/lc_predioRoutes.js';
import { sequelize } from './database/database.js';

const app = express();

app.use(express.json());

// Prefijo '/api' para todas las rutas de predios
app.use( predioRoutes);

const PORT = process.env.PORT || 5000;

const startServer = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

startServer();

export default app;
