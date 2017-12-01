'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Reglements', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      date_reglement: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.now
      },
      reglementTtc: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      factureAccompte: {
        type: Sequelize.INTEGER,
        references: {
          model: FactureAccompte,
          key: id
        }
      },
      valid: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
      description: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Reglements');
  }
};