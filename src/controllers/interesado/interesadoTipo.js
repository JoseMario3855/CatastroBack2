const pool = require('../../db');

console.log(pool)

const getInteresadoTipo = async (req, res,next) => {
    try {
        const lcInteresadoTipo = await pool.query('SELECT * FROM ladm.lc_interesadotipo')       
        res.json(lcInteresadoTipo.rows);
    } catch (error) {
        next(error)
    }
};



module.exports = {
    getInteresadoTipo
}