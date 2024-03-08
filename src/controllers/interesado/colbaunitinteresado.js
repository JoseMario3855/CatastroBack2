const pool = require("../../db");


const getColBaunit = async (req, res, next) => {
    try {
      const colBaunitInteresado = await pool.query("SELECT * FROM ladm.col_baunitcomointeresado");
      console.log(colBaunitInteresado); //retirar para deslpiegue
      res.json(colBaunitInteresado.rows);
    } catch (error) {
      next(error);
    }
  };
  
const createColBaunitInteresado = async (req, res, next) => {
    const {
        interesado_lc_interesado,
interesado_lc_agrupacioninteresados,
unidad,
    } = req.body;
  
    try {
      const result = await pool.query(
        "INSERT INTO ladm.col_baunitcomointeresado (interesado_lc_interesado,interesado_lc_agrupacioninteresados,unidad) VALUES ($1,$2,$3) RETURNING *",
        [
            interesado_lc_interesado,
            interesado_lc_agrupacioninteresados,
            unidad,
        ]
      );
  
      res.json(result.rows[0]);
    } catch (error) {
      next(error);
    }
  };

  module.exports = {
    createColBaunitInteresado
  };