const { Model, DataTypes } = require('sequelize');

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
    t_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    t_ili_tid: {
      type: DataTypes.STRING,
      allowNull: false

    },
    tipo_oferta: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    valor_predio: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    valor_negociado: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fecha_captura_oferta:{ 
    type: DataTypes.DATE,
    allowNull: true

  },
    tiempo_oferta_mercado: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    numero_contacto_oferente: {
      type: DataTypes.STRING,
      allowNull: false

    },
    nombre_oferente: {
      type: DataTypes.STRING,
      allowNull: false

    },
    lc_predio:{
      type: DataTypes.INTEGER,
      allowNull: true
    },
  }, {
    sequelize,
    modelName: 'lc_ofertasmercadoinmobiliario',
  });
  return lc_ofertasmercadoinmobiliario;
};