'use strict';

const {
  Model
} = require('sequelize');

const db = require("./index");

module.exports = (sequelize, DataTypes) => {
  class Shipment extends Model {
    static associate(models) {
      Shipment.hasOne(models.Driver, {
        as: 'driver',
        foreignKey: 'driver_id'
      })

      Shipment.belongsTo(models.Truck, {
        as: 'truck',
        foreignKey: 'truck_id'
      })
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