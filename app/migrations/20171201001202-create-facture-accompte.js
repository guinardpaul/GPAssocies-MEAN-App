'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('FactureAccomptes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      status_factureAccompte: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      ref_factureAccompte: {
        type: Sequelize.STRING,
        allowNull: false
      },
      date_creation: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      },
      montantFacture: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      reglementClient: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      factureGlobal: {
        type: Sequelize.INTEGER,
        references: {
          model: FactureGlobal,
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
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('FactureAccomptes');
  }
};