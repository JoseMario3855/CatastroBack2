const {config} =require ('dotenv');
config()

module.exports = {
    db: {
        username: "postgres",
        password: "12345",
        database: "catastro",
        host: "localhost",
        dialect: "postgres"
    }
};

