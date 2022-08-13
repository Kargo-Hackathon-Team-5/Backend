'use strict';

const faker = require('faker');

const Trucks = [...Array(50)].map(() => (
  {
    plateNumber: faker.vehicle.vin().substring(0, 5),
    license_type: faker.random.arrayElement(['yellow', 'black']),
    truck_type: faker.random.arrayElement(['yellow', 'black']),
    userName: faker.internet.userName(),
    password: faker.internet.password(8),
    jobTitle: faker.name.jobTitle(),
    createdAt: new Date(),
    updatedAt: new Date()
  }
))

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
