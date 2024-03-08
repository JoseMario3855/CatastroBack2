const pool = require("../../db");

console.log(pool);

const getLcPredios = async (req, res, next) => {
  try {
    const lcPredios = await pool.query("SELECT * FROM ladm.lc_predio");
    console.log(lcPredios); //retirar para deslpiegue
    res.json(lcPredios.rows);
  } catch (error) {
    next(error);
  }
};

//buscar por ficha predial
const getLcPredio = async (req, res, next) => {
  const { id_operacion } = req.params;
  try {
    const result = await pool.query(
      "SELECT * FROM ladm.lc_predio WHERE id_operacion= $1",
      [id_operacion]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        message: "Ficha no encontrada",
      });
    }
    res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

const createLcPredio = async (req, res, next) => {
  const {
    departamento,
    municipio,
    id_operacion,
    tiene_fmi,
    codigo_orip,
    matricula_inmobiliaria,
    numero_predial,
    numero_predial_anterior,
    codigo_homologado,
    interrelacionado,
    codigo_homologado_fmi,
    nupre,
    avaluo_catastral,
    valor_referencia,
    tipo,
    condicion_predio,
    destinacion_economica,
    clase_suelo,
    categoria_suelo,
    nombre,
    comienzo_vida_util_version,
    espacio_de_nombres,
    local_id
  } = req.body;

  try {
    const result = await pool.query(
      "INSERT INTO ladm.lc_predio (departamento,municipio,id_operacion,tiene_fmi,codigo_orip,matricula_inmobiliaria,numero_predial,numero_predial_anterior,codigo_homologado,interrelacionado,codigo_homologado_fmi,nupre,avaluo_catastral,valor_referencia,tipo,condicion_predio,destinacion_economica,clase_suelo,categoria_suelo,nombre,comienzo_vida_util_version,espacio_de_nombres,local_id) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23) RETURNING *",
      [
        departamento,
        municipio,
        id_operacion,
        tiene_fmi,
        codigo_orip,
        matricula_inmobiliaria,
        numero_predial,
        numero_predial_anterior,
        codigo_homologado,
        interrelacionado,
        codigo_homologado_fmi,
        nupre,
        avaluo_catastral,
        valor_referencia,
        tipo,
        condicion_predio,
        destinacion_economica,
        clase_suelo,
        categoria_suelo,
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

const deleteLcPredio = async (req, res, next) => {
  const { id_operacion } = req.params;

  try {
    const result = await pool.query(
      "DELETE FROM ladm.lc_predio WHERE id_operacion= $1",
      [id_operacion]
    );

    if (result.rows.length === 0)
      return res.status(404).json({
        message: "nupre no encontrado",
      });

    //console.log(result)  //
    return res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

const updateLcPredio = async (req, res, next) => {
  try {
    const { id_operacion } = req.params;
    const {
      departamento,
      municipio,
      tiene_fmi,
      codigo_orip,
      matricula_inmobiliaria,
      numero_predial,
      numero_predial_anterior,
      codigo_homologado,
      interrelacionado,
      codigo_homologado_fmi,
      nupre,
      avaluo_catastral,
      valor_referencia,
      tipo,
      condicion_predio,
      destinacion_economica,
      clase_suelo,
      categoria_suelo,
      nombre,
      comienzo_vida_util_version,
      espacio_de_nombres,
      local_id,
    } = req.body;

    const result = await pool.query(
      "UPDATE ladm.lc_predio SET departamento = $1, municipio = $2, tiene_fmi = $3, codigo_orip = $4, matricula_inmobiliaria = $5, numero_predial = $6, numero_predial_anterior = $7, codigo_homologado = $8, interrelacionado = $9, codigo_homologado_fmi = $10, nupre = $11, avaluo_catastral = $12, valor_referencia = $13, tipo = $14, condicion_predio = $15, destinacion_economica = $16, clase_suelo = $17, categoria_suelo = $18, nombre = $19, comienzo_vida_util_version = $20, espacio_de_nombres = $21, local_id = $22  WHERE id_operacion = $23 RETURNING *",
      [
        departamento,
        municipio,
        tiene_fmi,
        codigo_orip,
        matricula_inmobiliaria,
        numero_predial,
        numero_predial_anterior,
        codigo_homologado,
        interrelacionado,
        codigo_homologado_fmi,
        nupre,
        avaluo_catastral,
        valor_referencia,
        tipo,
        condicion_predio,
        destinacion_economica,
        clase_suelo,
        categoria_suelo,
        nombre,
        comienzo_vida_util_version,
        espacio_de_nombres,
        local_id,
        id_operacion,
      ]
    );

    if (result.rows.length === 0)
      return res.status(404).json({
        message: "Nupre no encontrado",
      });
    res.json(result.rows[0]);
    res.send("registro actualizado");
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createLcPredio,
  getLcPredios,
  getLcPredio,
  updateLcPredio,
  deleteLcPredio
};