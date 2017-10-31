const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/User');

module.exports = (passport) => {

  /**
   * Login local Strategy authenticate
   */
  passport.use('local-login', new LocalStrategy({
    usernameField: 'email'
  }, (email, password, done) => {
    User.findOne({ email: email }, (err, user) => {
      if (err) return done(err);

      // le compte n'existe pas pour cet email
      if (!user) return done(null, false, {
        success: false,
        message: 'Le Compte n\'existe pas'
      });

      // Password do not match
      if (!user.comparePassword(password))
        return done(null, false, {
          success: false,
          message: 'Email ou mot de passe invalide'
        });

      // Authentication réussie
      return done(null, user, {
        success: true,
        message: 'Vous êtes connecté',
        obj: {
          nom: compte.nom,
          prenom: compte.prenom,
          email: email
        }
      });
    });
  }));


  return passport;
}


