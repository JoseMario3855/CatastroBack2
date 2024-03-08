const pool = require("../../db");

console.log(pool);

const getAgrupacionTipo = async (req, res, next) => {
  try {
    const tipoAgrupacion = await pool.query("SELECT * FROM ladm.col_grupointeresadotipo");
    console.log(tipoAgrupacion); //retirar para deslpiegue
    res.json(tipoAgrupacion.rows);
  } catch (error) {
    next(error);
  }
};

module.exports = {
    getAgrupacionTipo
  };
  