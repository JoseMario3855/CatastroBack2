const { Pool } = require('pg');
const { db } = require('./config.js');

// Objeto de la conexión
const pool = new Pool({
    user: "postgres",
    password: "12345",
    host: "localhost",
    port: "5432",
    database: "catastro",
    schema: "penol" 
});

module.exports = pool;

