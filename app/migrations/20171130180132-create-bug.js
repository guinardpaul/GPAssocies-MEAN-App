'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Bugs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      status_correction: {
        allowNull: false,
        defaultValue: 'Ouvert',
        type: Sequelize.ENUM,
        values: ['Ouvert', 'Corrige', 'Annule'],
      },
      date_creation: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      description: {
        allowNull: false,
        type: Sequelize.STRING
      },
      criticite: {
        allowNull: false,
        type: Sequelize.ENUM,
        values: ['Mineur', 'Bloquant', 'Amelioration'],
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Bugs');
  }
};