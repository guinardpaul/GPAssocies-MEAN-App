'use strict';

module.exports = (sequelize, DataTypes) => {
  var DetailsDevis = sequelize.define('DetailsDevis', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    montantHt: {
      type: DataTypes.DOUBLE,
      validate: {
        idDecimal: true
      }
    },
    tauxTva: {
      type: DataTypes.DOUBLE,
      validate: {
        idDecimal: true
      }
    },
    montantTtc: {
      type: DataTypes.DOUBLE,
      validate: {
        idDecimal: true
      }
    },
    devis: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Devis',
        key: 'id',
        onDelete: 'CASCADE'
      }
    }
  }, {
      classMethods: {
        associate: function (models) {
          // associations can be defined here
        }
      }
    });
  return DetailsDevis;
};