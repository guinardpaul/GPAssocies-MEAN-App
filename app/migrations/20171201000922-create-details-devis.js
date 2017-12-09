'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('DetailsDevis', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      montantHt: {
        type: Sequelize.DOUBLE
      },
      tauxTva: {
        type: Sequelize.DOUBLE
      },
      montantTtc: {
        type: Sequelize.DOUBLE
      },
      devis: {
        type: Sequelize.INTEGER,
        references: {
          model: Devis,
          key: id,
          onDelete: 'CASCADE'
        }
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
    return queryInterface.dropTable('DetailsDevis');
  }
};