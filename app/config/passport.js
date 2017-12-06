const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const model = require('../models');

module.exports = (passport) => {

    /**
     * Login local Strategy authenticate
     */
    passport.use('local-login', new LocalStrategy({
        usernameField: 'email'
    }, (email, password, done) => {
        model.User.findOne({ where: { email: email } })
            .then(user => {
                console.log('then');
                console.log(user);
                // le compte n'existe pas pour cet email
                if (!user)
                    return done(null, false, {
                        success: false,
                        message: 'Le compte n\'existe pas'
                    });

                // Password do not match
                // TODO:
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
                        nom: user.nom,
                        prenom: user.prenom,
                        email: email
                    }
                });
            })
            .catch(err => {
                console.log('err');
                console.log(err);
                return done(err);
            });
    }));

    /**
     * Register authenticate
     */
    passport.use('local-register', new LocalStrategy({
        usernameField: 'email',
        passReqToCallback: true
    }, (req, email, password, done) => {
        process.nextTick(() => {
            model.User.findOne({ where: { email: email } })
                .then(user => {
                    // Si un compte existe déja avec cet email
                    if (user) {
                        return done(null, false, {
                            success: false,
                            message: 'Cet email est déjà utilisé pour un compte valide'
                        });
                    } else {
                        // Si aucun compte associé a l'email => création nouveau user
                        // TODO: pq utiliser newUser throw error return nom,prenom,email,password = null
                        const newUser = new model.User({
                            nom: req.body.nom,
                            prenom: req.body.prenom,
                            email: email,
                            password: password
                        });

                        // Generate hash
                        const hash = newUser.generateHash(newUser.password);

                        // Create User
                        model.User.create({
                            nom: req.body.nom,
                            prenom: req.body.prenom,
                            email: email,
                            password: hash
                        })
                            .then(data => {
                                return done(null, data, {
                                    success: true,
                                    message: 'User registered',
                                    obj: {
                                        nom: data.nom,
                                        prenom: data.prenom,
                                        email: data.email
                                    }
                                });
                            })
                            .catch(err => {
                                return done(null, false, {
                                    success: false,
                                    message: err
                                });
                            });
                    }
                })
                .catch(err => {
                    return done(null, false, {
                        success: false,
                        message: err
                    });
                });
        });
    }));


    return passport;
}