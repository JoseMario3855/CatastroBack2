const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class lc_terreno extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  lc_terreno.init({
      t_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        t_ili_tid: {
          type: DataTypes.UUID,
          allowNull: true
        },
        area_terreno:{
            type: DataTypes.INTEGER,
            allowNull: true
        },
        avaluo_terreno:{
            type: DataTypes.INTEGER,
            allowNull: true
        },
        manzana_vereda_codigo: {
            type: DataTypes.STRING,
            allowNull: true
        },
        geometria:{
            type: DataTypes.GEOMETRY,
            allowNull:true
        },
        dimension:{
            type: DataTypes.INTEGER,
            allowNull: true
        },
        etiqueta: {
            type: DataTypes.STRING,
            allowNull: true
        },
        relacion_superficie:{
            type: DataTypes.INTEGER,
            allowNull: true
        },
        nivel:{
            type: DataTypes.INTEGER,
            allowNull: true
        },
        espacio_de_nombres: {
            type: DataTypes.STRING,
            allowNull: true
        },
        local_id: {
            type: DataTypes.STRING,
            allowNull: true
        },
    }, {
        sequelize,
        modelName: 'lc_terreno',
      });
      return lc_terreno;
};