'use strict';
const bcrypt = require('bcrypt-nodejs');
const secret = require('../config/secret');
const jwt = require('jsonwebtoken');
const util = require('../config/secret');

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
      }
    });

  // Generate hash
  User.prototype.generateHash = function (password) {
    return bcrypt.hashSync(password, null);
  };

  // Compare password received with hash in database
  User.prototype.comparePassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };

  // Generate token when login successfull
  User.prototype.generateToken = function (id) {
    // Set expiration date to date.now() + 7 days
    var expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);

    return jwt.sign({
      userId: id,
      exp: parseInt(expiry.getTime() / 1000),
    }, util.secret);
  };

  return User;
};