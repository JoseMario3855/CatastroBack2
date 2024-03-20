const { config } = require('dotenv');
config();

module.exports = {
    db: {
        username: process.env.DB_USERNAME || "postgres",
        password: process.env.DB_PASSWORD || "12345",
        database: process.env.DB_DATABASE || "catastro",
        host: process.env.DB_HOST || "localhost",
        dialect: process.env.DB_DIALECT || "postgres",
        schema: process.env.DB_SCHEMA || "penol" 
    }
};