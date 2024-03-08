const pool = require('../../db');

console.log(pool)

const getSexoTipo = async (req, res,next) => {
    try {
        const lcSexoTipo = await pool.query('SELECT * FROM ladm.lc_sexotipo')       
        res.json(lcSexoTipo.rows);
    } catch (error) {
        next(error)
    }
};



module.exports = {
    getSexoTipo
}