const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class lc_tipologiaconstruccion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  lc_tipologiaconstruccion.init({
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
    tipo_tipologia: {
      type: DataTypes.INTEGER,
      allowNull:true
    },
    lc_unidad_construccion: {
      type: DataTypes.INTEGER,
      allowNull:true
    },
    cual: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'lc_tipologiaconstruccion',
  });
  return lc_tipologiaconstruccion;
};