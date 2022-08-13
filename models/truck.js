'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Truck extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Truck.init({
    plate_number: DataTypes.STRING,
    license_type: DataTypes.ENUM('yellow', 'black'),
    truck_type: DataTypes.ENUM('tronton', 'container', 'cde'),
    production_year: DataTypes.INTEGER,
    stnk: DataTypes.STRING,
    kir: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Truck',
  });
  return Truck;
};