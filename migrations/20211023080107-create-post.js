'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      url: {
        type: Sequelize.STRING(2048)
      },
      digest: {
        type: Sequelize.TEXT
      },
      date: {
        type: Sequelize.DATE
      },
      image: {
        type: Sequelize.STRING(10240)
      },
      organizationId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Organizations'
          }
        },
        allowNull: false
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Posts');
  }
};