'use strict';

module.exports = (sequelize, DataTypes) => {
  var DetailsDevis = sequelize.define('DetailsDevis', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    montantHt: DataTypes.DOUBLE,
    tauxTva: DataTypes.DOUBLE,
    montantTtc: DataTypes.DOUBLE,
    devis: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Devis',
        key: 'id'
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