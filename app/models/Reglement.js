'use strict';
const FactureAccompte = require('./factureaccompte');

module.exports = (sequelize, DataTypes) => {
  var Reglement = sequelize.define('Reglement', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    date_reglement: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.now
    },
    reglementTtc: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    factureAccompte: {
      type: DataTypes.INTEGER,
      references: {
        model: 'FactureAccomptes',
        key: 'id'
      }
    },
    valid: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    description: DataTypes.STRING,
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: sequelize.NOW
    }
  }, {
      classMethods: {
        associate: function (models) {
          // associations can be defined here
        }
      }
    });
  return Reglement;
};