'use strict';

module.exports = (sequelize, DataTypes) => {
  var Devis = sequelize.define('Devis', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    ref_devis: {
      type: DataTypes.STRING,
      allowNul: false
    },
    date_creation: {
      type: DataTypes.STRING,
      allowNul: false,
      defaultValue: sequelize.NOW
    },
    montantHt: {
      type: DataTypes.DOUBLE,
      allowNul: false,
      validate: {
        isDecimal: true
      }
    },
    tauxTva: {
      type: DataTypes.DOUBLE,
      allowNul: false,
      validate: {
        isDecimal: true
      }
    },
    montantTtc: {
      type: DataTypes.DOUBLE,
      validate: {
        isDecimal: true
      },
    },
    client: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Clients',
        key: 'id'
      }
    },
    valid: {
      type: DataTypes.BOOLEAN,
      allowNul: false,
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
  return Devis;
};