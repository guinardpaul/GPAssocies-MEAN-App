'use strict';
const bcrypt = require('bcrypt-nodejs');
const secret = require('../config/secret');
const jwt = require('jsonwebtoken');

module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
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
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
      classMethods: {
        associate: function (models) {
          // associations can be defined here
        }
      },
      instanceMethods: {
        generateHash(password) {
          return bcrypt.hash(password, null, null, (err, hash) => {
            if (err) return next(err);
            password = hash;
          });
        },
        // TODO:
        comparePassword(password) {
          return bcrypt.compareSync(password, this.password);
        },
        generateToken(id) {
          // Set expiration date to date.now() + 7 days
          var expiry = new Date();
          expiry.setDate(expiry.getDate() + 7);

          return jwt.sign({
            userId: _id,
            exp: parseInt(expiry.getTime() / 1000),
          }, config.secret);
        }
      }
    });
  return User;
};