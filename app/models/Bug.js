'use strict';
module.exports = (sequelize, DataTypes) => {
  var Bug = sequelize.define('Bug', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    status_correction: {
      type: DataTypes.ENUM,
      values: ['Ouvert', 'Corrige', 'Annule'],
      allowNull: false,
      defaultValue: 'Ouvert'
    },
    date_creation: {
      type: DataTypes.DATE,
      defaultValue: sequelize.NOW
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    criticite: {
      type: DataTypes.ENUM,
      values: ['Mineur', 'Bloquant', 'Amelioration'],
      allowNull: false
    }
  }, {
      classMethods: {
        associate: function (models) {
          // associations can be defined here
        }
      }
    });
  return Bug;
};