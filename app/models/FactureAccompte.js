'use strict';
const FactureGlobal = require('./factureglobal');

module.exports = (sequelize, DataTypes) => {
  var FactureAccompte = sequelize.define('FactureAccompte', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    status_factureAccompte: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    ref_factureAccompte: {
      type: DataTypes.STRING,
      allowNull: false
    },
    date_creation: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.NOW
    },
    montantFacture: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    reglementClient: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    factureGlobal: {
      type: DataTypes.INTEGER,
      references: {
        model: 'FactureGlobals',
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
  return FactureAccompte;
};