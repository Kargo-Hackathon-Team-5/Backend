'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Shipment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Shipment.init({
    truck_id: DataTypes.STRING,
    driver_id: DataTypes.STRING,
    origin: DataTypes.STRING,
    destination: DataTypes.STRING,
    loading_date: DataTypes.DATE,
    status: DataTypes.ENUM('allocated', 'on_going_to_origin', 'at_origin', 'on_going_to_destination', 'at_destination', 'completed')
  }, {
    sequelize,
    modelName: 'Shipment',
  });
  return Shipment;
};