'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Shipments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      truck_id: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      driver_id: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      origin: {
        type: Sequelize.STRING
      },
      destination: {
        type: Sequelize.STRING
      },
      loading_date: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('Shipments');
  }
};