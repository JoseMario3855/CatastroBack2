module.exports = {
    db: {
        username: process.env.DB_USER || "postgres",
        password: process.env.DB_PASSWORD || "12345",
        database: process.env.DB_DATABASE || "catastro",
        host: process.env.DB_HOST || "localhost",
        port: process.env.DB_PORT || 5432,
        dialect: "postgres",
        schema: process.env.DB_SCHEMA || "penol"
    }
};
