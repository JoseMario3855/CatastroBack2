'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class lc_ofertasmercadoinmobiliario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  lc_ofertasmercadoinmobiliario.init({
    t_id: DataTypes.INTEGER,
    t_ili_tid: DataTypes.STRING,
    tipo_oferta: DataTypes.INTEGER,
    valor_predio: DataTypes.INTEGER,
    valor_negociado: DataTypes.INTEGER,
    fecha_captura_oferta: DataTypes.DATE,
    tiempo_oferta_mercado: DataTypes.INTEGER,
    numero_contacto_oferente: DataTypes.STRING,
    nombre_oferente: DataTypes.STRING,
    lc_predio: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'lc_ofertasmercadoinmobiliario',
  });
  return lc_ofertasmercadoinmobiliario;
};