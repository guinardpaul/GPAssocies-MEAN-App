'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Clients', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      affaire: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      civilite: {
        type: Sequelize.ENUM,
        values: ['Mr', 'Mme/Mlle']
      },
      status_client: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      nom: {
        type: Sequelize.STRING,
        allowNull: false
      },
      prenom: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      numTel: {
        type: Sequelize.STRING,
        allowNull: false
      },
      adresseFact: {
        type: Sequelize.STRING
      },
      complAdresseFact: {
        type: Sequelize.STRING
      },
      cpFact: {
        type: Sequelize.STRING
      },
      villeFact: {
        type: Sequelize.STRING
      },
      adresseChantier: {
        type: Sequelize.STRING
      },
      complAdresseChantier: {
        type: Sequelize.STRING
      },
      cpChantier: {
        type: Sequelize.STRING
      },
      villeChantier: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('Clients');
  }
};