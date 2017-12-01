'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('FactureGlobals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      status_factureGlobal: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      ref_factureGlobal: {
        type: Sequelize.STRING,
        allowNull: false
      },
      date_creation: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      },
      montantHt: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      tauxTva: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      montantTtcTotal: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      montantTtcRegle: {
        type: Sequelize.DOUBLE,
        defaultValue: 0
      },
      montantTtcFacture: {
        type: Sequelize.DOUBLE,
        defaultValue: 0
      },
      client: {
        type: Sequelize.INTEGER,
        references: {
          model: Client,
          key: id
        }
      },
      devis: {
        type: Sequelize.INTEGER,
        references: {
          model: Devis,
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
        defaultValue: Sequelize.NOW,
        allowNull: false
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('FactureGlobals');
  }
};