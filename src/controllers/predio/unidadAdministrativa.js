const pool = require('../../db');

console.log(pool)

const getUnidadAdministrativaTipo = async (req, res,next) => {
    try {
        const lcPredioTipo = await pool.query('SELECT * FROM ladm.col_unidadadministrativabasicatipo')
        console.log(lcPredioTipo) //retirar para deslpiegue
        res.json(lcPredioTipo.rows);
    } catch (error) {
        next(error)
    }
};



module.exports = {
    getUnidadAdministrativaTipo
}