'use strict';
module.exports = (sequelize, DataTypes) => {
  var Client = sequelize.define('Client', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    affaire: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    civilite: {
      type: DataTypes.ENUM,
      values: ['Mr', 'Mme/Mlle']
    },
    status_client: {
      type: DataTypes.STRING,
      defaultValue: false
    },
    nom: {
      type: DataTypes.STRING,
      allowNull: false
    },
    prenom: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    numTel: DataTypes.STRING,
    adresseFact: DataTypes.STRING,
    complAdresseFact: DataTypes.STRING,
    cpFact: DataTypes.INTEGER,
    villeFact: DataTypes.STRING,
    adresseChantier: DataTypes.STRING,
    complAdresseChantier: DataTypes.STRING,
    cpChantier: DataTypes.INTEGER,
    villeChantier: DataTypes.STRING
  }, {
      classMethods: {
        associate: function (models) {
          // associations can be defined here
        }
      }
    });
  return Client;
};