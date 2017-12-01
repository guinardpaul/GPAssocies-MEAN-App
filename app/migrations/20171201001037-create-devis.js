'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Devis', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ref_devis: {
        type: Sequelize.STRING,
        allowNul: false
      },
      date_creation: {
        type: Sequelize.STRING,
        allowNul: false,
        defaultValue: Sequelize.NOW
      },
      montantHt: {
        type: Sequelize.DOUBLE,
        allowNul: false
      },
      tauxTva: {
        type: Sequelize.DOUBLE,
        allowNul: false
      },
      montantTtc: {
        type: Sequelize.DOUBLE
      },
      client: {
        type: Sequelize.INTEGER,
        references: {
          model: Client,
          key: id
        }
      },
      valid: {
        type: Sequelize.BOOLEAN,
        allowNul: false,
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
    return queryInterface.dropTable('Devis');
  }
};