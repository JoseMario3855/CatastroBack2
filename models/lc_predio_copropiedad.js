'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class lc_predio_copropiedad extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  lc_predio_copropiedad.init({
    t_id: DataTypes.INTEGER,
    predio: DataTypes.INTEGER,
    copropiedad: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'lc_predio_copropiedad',
  });
  return lc_predio_copropiedad;
};