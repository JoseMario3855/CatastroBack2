const pool = require('../../db');

console.log(pool)

const getDestinacionEconomicaTipo = async (req, res,next) => {
    try {
        const lcDestinacionEconomicaTipo = await pool.query('SELECT * FROM ladm.lc_destinacioneconomicatipo')
        console.log(lcDestinacionEconomicaTipo) //retirar para deslpiegue
        res.json(lcDestinacionEconomicaTipo.rows);
    } catch (error) {
        next(error)
    }
};



module.exports = {
    getDestinacionEconomicaTipo
}