'use strict';

const { faker } = require('@faker-js/faker');

const Shipments = [...Array(50)].map(() => (
  {
    truck_id: faker.datatype.number({ min: 5, max: 30 }),
    driver_id: faker.datatype.number({ min: 5, max: 30 }),
    origin: faker.helpers.arrayElement(['Solo', 'Bali', 'Banten']),
    destination: faker.helpers.arrayElement(['Jakarta', 'Bandung', 'Tangerang', 'Surabaya']),
    loading_date: faker.date.past(),
    status: faker.helpers.arrayElement([
      'allocated', 
      'on_going_to_origin', 
      'at_origin', 
      'on_going_to_destination', 
      'at_destination', 
      'completed'
    ]),
    createdAt: new Date(),
    updatedAt: new Date()
  }
))

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Shipments', Shipments, {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Shipments', null, {});
  }
};
