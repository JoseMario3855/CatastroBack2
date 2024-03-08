const pool = require('../../db');

console.log(pool)

const getEstadoCivilTipo = async (req, res,next) => {
    try {
        const lcEstadoCivilTipo = await pool.query('SELECT * FROM ladm.lc_estadociviltipo')       
        res.json(lcEstadoCivilTipo.rows);
    } catch (error) {
        next(error)
    }
};



module.exports = {
    getEstadoCivilTipo
}