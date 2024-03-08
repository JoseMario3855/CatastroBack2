const pool = require("../../db");

const createAgrupacion = async (req, res, next) => {
    const {
        tipo,
        nombre, 
        comienzo_vida_util_version,
        espacio_de_nombres,
        local_id,
    } = req.body;
  
    try {
      const result = await pool.query(
        "INSERT INTO ladm.lc_agrupacioninteresados (tipo,nombre,comienzo_vida_util_version,espacio_de_nombres,local_id) VALUES ($1,$2,$3,$4,$5) RETURNING *",
        [
            tipo,
            nombre, 
            comienzo_vida_util_version,
            espacio_de_nombres,
            local_id,
        ]
      );
  
      res.json(result.rows[0]);
    } catch (error) {
      next(error);
    }
  };

  module.exports = {
    createAgrupacion
  };