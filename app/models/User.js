const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');
const config = require('../config/secret');
const jwt = require('jsonwebtoken');

const userSchema = new Schema({
    nom: {
        type: String,
        required: true,
    },
    prenom: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
    },
});

// Middleware to encrypt password on save User
userSchema.pre('save', function (next) {
    if (!this.isModified('password'))
        return next();

    bcrypt.hash(this.password, null, null, (err, hash) => {
        if (err) return next(err);
        this.password = hash;
        next();
    });
});

// Middleware to encrypt password on update User
userSchema.pre('update', function (next) {
    bcrypt.hash(this.getUpdate().$set.password, null, null, (err, hash) => {
        if (err) return next(err);
        this.update({}, {
            $set: {
                password: hash
            }
        });
        next();
    });
});

// Compare password with encryted password in database
userSchema.methods.comparePassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

// Generate Json Web Token
userSchema.methods.generateToken = function (_id) {
    // Set expiration date to date.now() + 7 days
    var expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);

    return jwt.sign({
        userId: _id,
        exp: parseInt(expiry.getTime() / 1000),
    }, config.secret);
};

module.exports = mongoose.model('User', userSchema);