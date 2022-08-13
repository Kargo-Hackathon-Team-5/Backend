'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Trucks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      plate_number: {
        type: Sequelize.STRING
      },
      license_type: {
        type: Sequelize.ENUM('yellow', 'black')
      },
      truck_type: {
        type: Sequelize.ENUM('tronton', 'container', 'cde')
      },
      production_year: {
        type: Sequelize.INTEGER
      },
      stnk: {
        type: Sequelize.STRING
      },
      kir: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.ENUM('allocated', 'on_going_to_origin', 'at_origin', 'on_going_to_destination', 'at_destination', 'completed')
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Trucks');
  }
};