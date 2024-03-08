'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class extdireccion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  extdireccion.init({
    t_id: DataTypes.INTEGER,
    t_seq: DataTypes.INTEGER,
    tipo_direccion: DataTypes.INTEGER,
    es_direccion_principal: DataTypes.BOOLEAN,
    codigo_postal: DataTypes.STRING,
    clase_via_principal: DataTypes.INTEGER,
    valor_via_principal: DataTypes.STRING,
    letra_via_principal: DataTypes.STRING,
    sector_ciudad: DataTypes.INTEGER,
    valor_via_generadora: DataTypes.STRING,
    letra_via_generadora: DataTypes.STRING,
    numero_predio: DataTypes.STRING,
    sector_predio: DataTypes.INTEGER,
    complemento: DataTypes.STRING,
    nombre_predio: DataTypes.STRING,
    extunidadedificcnfsica_ext_direccion_id: DataTypes.INTEGER,
    extinteresado_ext_direccion_id: DataTypes.INTEGER,
    lc_construccion_ext_direccion_id: DataTypes.INTEGER,
    lc_predio_direccion: DataTypes.INTEGER,
    lc_terreno_ext_direccion_id: DataTypes.INTEGER,
    lc_servidumbretransito_ext_direccion_id: DataTypes.INTEGER,
    lc_unidadconstruccion_ext_direccion_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'extdireccion',
  });
  return extdireccion;
};