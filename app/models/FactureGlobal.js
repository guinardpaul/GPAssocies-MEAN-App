'use strict';

module.exports = (sequelize, DataTypes) => {
  var FactureGlobal = sequelize.define('FactureGlobal', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    status_factureGlobal: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    ref_factureGlobal: {
      type: DataTypes.STRING,
      allowNull: false
    },
    date_creation: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.NOW
    },
    montantHt: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      validate: {
        isDecimal: true
      }
    },
    tauxTva: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      validate: {
        isDecimal: true
      }
    },
    montantTtcTotal: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      validate: {
        isDecimal: true
      }
    },
    montantTtcRegle: {
      type: DataTypes.DOUBLE,
      defaultValue: 0,
      validate: {
        isDecimal: true
      }
    },
    montantTtcFacture: {
      type: DataTypes.DOUBLE,
      defaultValue: 0,
      validate: {
        isDecimal: true
      }
    },
    client: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Clients',
        key: 'id'
      }
    },
    devis: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Devis',
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
  return FactureGlobal;
};