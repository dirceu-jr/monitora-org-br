'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Cities', [
      { name: 'Londrina', createdAt: new Date().toDateString(), updatedAt: new Date().toDateString() },
      { name: 'São Paulo', createdAt: new Date().toDateString(), updatedAt: new Date().toDateString() },
      { name: 'Uberaba', createdAt: new Date().toDateString(), updatedAt: new Date().toDateString() },
      { name: 'Curitiba', createdAt: new Date().toDateString(), updatedAt: new Date().toDateString() }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Cities', null, {});
  }
};
