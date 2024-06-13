import express from 'express';
import cors from 'cors'; // Import the cors package
import routes from './routes/router.js';
import { sequelize } from './database/database.js';
 
const app = express();
 
app.use(cors());
 
 
 
app.use(express.json());
app.use(routes);
/*
app.use(predioRoutes);
app.use(colbaunitRoutes);
app.use(ci_forma_presentacion_codigoRoutes);
app.use(col_areavalorRoutes);
app.use(col_baunitcomointeresadoRoutes);
app.use(col_contenidoniveltipoRoutes);
*/
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