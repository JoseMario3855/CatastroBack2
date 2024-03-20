const { Pool } = require('pg');
const { db } = require('./config.js');

// Objeto de la conexión
const pool = new Pool({
    user: db.username,
    password: db.password,
    host: db.host,
    port: db.port,
    database: db.database,
    schema: db.schema 
});

module.exports = pool;