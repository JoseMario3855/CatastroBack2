const pool = require('../../db');

console.log(pool)

const getDocumentoTipo = async (req, res,next) => {
    try {
        const lcDocumentoTipo = await pool.query('SELECT * FROM ladm.lc_interesadodocumentotipo')       
        res.json(lcDocumentoTipo.rows);
    } catch (error) {
        next(error)
    }
};



module.exports = {
    getDocumentoTipo
}