'use strict';

const { faker } = require('@faker-js/faker');

const Trucks = [...Array(50)].map(() => (
  {
    plate_number: faker.vehicle.vin().substring(0, 8),
    license_type: faker.helpers.arrayElement(['yellow', 'black']),
    truck_type:faker.helpers.arrayElement(['tronton', 'container', 'cde']),
    production_year: faker.datatype.number({ min: 2010, max: 2022 }),
    stnk:faker.helpers.arrayElement([
      'https://asset.kompas.com/crops/F72rQFKl933OlDtWkjdOMQ5TPgk=/0x0:778x389/750x500/data/photo/2016/05/26/2331033IMG-20160526-01831780x390.jpg',
      'https://awsimages.detik.net.id/community/media/visual/2017/10/30/6f337c0a-1a5a-4940-870a-155215aded32.jpg?w=700&q=90',
      'https://asset.kompas.com/crops/CU4kseSv1LGLsEpx-3Tao6pQZlU=/14x66:998x722/750x500/data/photo/2018/02/22/3925574548.jpg',
      'https://imgx.gridoto.com/crop/0x85:1066x744/700x465/filters:watermark(file/2017/gridoto/img/watermark.png,5,5,60)/photo/gridoto/2018/02/21/495266299.jpg'
    ]),
    kir: faker.helpers.arrayElement([
      'https://bus-truck.id/image/load/640/360/gallery/stiker-kir2351.jpg',
      'https://asset.kompas.com/crops/K4g0AYl3bekrFaut3ZeZK3imHe0=/0x0:780x390/750x500/data/photo/2013/10/09/2100435Ciracas-20131009-00429780x390.jpg',
      'https://awsimages.detik.net.id/community/media/visual/2015/08/10/a4dfad6a-c80d-4605-a3d2-5e3ef4db68d9.jpg?w=700&q=90',
      'https://jasamart.com/application/public/products/1748_945_1.jpg',
      'https://i0.wp.com/prokopim.magetan.go.id/wp-content/uploads/2020/06/20200602_062729.jpg?fit=480%2C1280&ssl=1'
    ]),
    status: faker.helpers.arrayElement([0, 1]),
    createdAt: new Date(),
    updatedAt: new Date()
  }
))

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Trucks', Trucks, {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Trucks', null, {});
  }
};
