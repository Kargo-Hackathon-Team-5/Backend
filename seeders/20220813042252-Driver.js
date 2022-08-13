'use strict';

const { faker } = require('@faker-js/faker');
faker.setLocale('id_ID');

const Drivers = [...Array(50)].map(() => (
  { 
    name: faker.name.fullName(),
    phone: faker.phone.number(),
    id_card: faker.helpers.arrayElement([
      'https://awsimages.detik.net.id/community/media/visual/2017/07/20/3a1c67e8-064d-4f56-80eb-feced76cad3e_169.jpg?w=700&q=90',
      'https://cdns.klimg.com/merdeka.com/i/w/news/2022/03/17/1417566/640x320/banyak-orang-tak-pd-dengan-foto-di-ktp-kini-warga-surabaya-diperbolehkan-ganti-foto.jpg',
      'https://radarsulteng.id/wp-content/uploads/2020/06/1-Pasien-Corona-Kabur-dari-Anutapura.jpg'
    ]),
    license: faker.helpers.arrayElement([
      'https://tsoimageprod.azureedge.net/sys-master-hybrismedia/h0e/had/8825934675998/cara-cek-nomor-surat-izin-mengemudi.jpg',
      'https://imgx.gridoto.com/crop/3x0:1077x693/700x500/photo/gridoto/2017/12/10/1384775416.jpg',
      'https://asset-a.grid.id/crop/0x0:0x0/x/photo/2020/12/17/951561178.jpg'
    ]),
    status:faker.helpers.arrayElement([0, 1]),
    createdAt: new Date(),
    updatedAt: new Date()
  }
))

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Drivers', Drivers, {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Drivers', null, {});
  }
};
