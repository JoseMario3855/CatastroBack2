const pool = require('../../db');

console.log(pool)

const getGrupoEtnicoTipo = async (req, res,next) => {
    try {
        const lcGrupoEtnicoTipo = await pool.query('SELECT * FROM ladm.lc_grupoetnicotipo')       
        res.json(lcGrupoEtnicoTipo.rows);
    } catch (error) {
        next(error)
    }
};



module.exports = {
    getGrupoEtnicoTipo
}