const { Model, DataTypes } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class col_topografofuente extends Model {
   
    static associate(models) {
      col_topografofuente.belongsTo(models.lc_interesado,{foreignKey:'topografo_lc_interesado',targetKey:'topografo_lc_interesado'});
      col_topografofuente.belongsTo(models.lc_agrupacioninteresados,{foreignKey:'topografo_lc_agrupacioninteresados',targetKey:'topografo_lc_agrupacioninteresados'});
      col_topografofuente.belongsTo(models.lc_fuenteespacial,{foreignKey:'fuente_espacial',targetKey:'fuente_espacial'});
    }
  }
  col_topografofuente.init({
    t_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },

    t_ili_tid: {
      type: DataTypes.STRING,
      allowNull: true
    },
    fuente_espacial:  {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    topografo_lc_interesado:  {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    topografo_lc_agrupacioninteresados:  {
      type: DataTypes.INTEGER,
      allowNull: true
    }
    }, {
    sequelize,
    modelName: 'col_topografofuente',
  });
  return col_topografofuente;
};