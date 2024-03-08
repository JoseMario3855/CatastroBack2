const pool = require('../../db');

console.log(pool)

const getClaseSueloTipo = async (req, res,next) => {
    try {
        const lcCaseSueloTipo = await pool.query('SELECT * FROM ladm.lc_clasesuelotipo')        
        res.json(lcCaseSueloTipo.rows);
    } catch (error) {
        next(error)
    }
};



module.exports = {
    getClaseSueloTipo
}