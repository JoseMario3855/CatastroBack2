const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class lc_ofertasmercadoinmobiliario extends Model {
   
    static associate(models) {
      lc_ofertasmercadoinmobiliario.belongsTo(models.lc_ofertatipo,{foreignKey:'tipo_oferta',targetKey:'tipo_oferta'});
      lc_ofertasmercadoinmobiliario.belongsTo(models.lc_predio,{foreignKey:'lc_predio',targetKey:'lc_predio'});
      
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