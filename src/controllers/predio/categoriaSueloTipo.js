const pool = require('../../db');

console.log(pool)

const getCategoriaSueloTipo = async (req, res,next) => {
    try {
        const lcCategoriaSueloTipo = await pool.query('SELECT * FROM ladm.lc_categoriasuelotipo')        
        res.json(lcCategoriaSueloTipo.rows);
    } catch (error) {
        next(error)
    }
};



module.exports = {
    getCategoriaSueloTipo
}