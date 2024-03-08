const pool = require('../../db');

console.log(pool)

const getCondicionPredioTipo = async (req, res,next) => {
    try {
        const lcCondicionPredioTipo = await pool.query('SELECT * FROM ladm.lc_condicionprediotipo')       
        res.json(lcCondicionPredioTipo.rows);
    } catch (error) {
        next(error)
    }
};



module.exports = {
    getCondicionPredioTipo
}