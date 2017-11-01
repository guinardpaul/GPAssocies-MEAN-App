const User = require('../models/User');

module.exports = (router, passport) => {

    /**
     * Login User
     */
    router.post('/login', (req, res, next) => {
        passport.authenticate('local-login', (err, user, info) => {
            let token;

            // If Passport throws/catches an error
            if (err) {
                res.status(404).json(err);
                return;
            }

            // If a user is found
            if (user) {
                token = user.generateToken(user._id);
                res.status(200).json({
                    token: token,
                    info: info
                });
            } else {
                // If user is not found
                res.status(401).json(info);
            }
        })(req, res, next);
    });

    /**
     * Register User
     */
    router.post('/register', (req, res, next) => {
        if (!req.body.nom) {
            res.status(409).json({
                success: false,
                message: 'Nom not provided'
            });
        } else if (!req.body.prenom) {
            res.status(409).json({
                success: false,
                message: 'Prenom not provided'
            });
        } else if (!req.body.email) {
            res.status(409).json({
                success: false,
                message: 'Email not provided'
            });
        } else if (!req.body.password) {
            res.status(409).json({
                success: false,
                message: 'Password not provided'
            });
        } else {
            passport.authenticate('local-register', function (err, user, info) {
                if (err) {
                    return next(err); // will generate a 500 error
                }

                if (!user) {
                    return res.status(409).json(info);
                }

                return res.status(200).json(info);
            })(req, res, next);
        }
    });

    /**
     * Get User by Email
     * Forgot password component
     */
    router.get('/users/email/:email', (req, res, next) => {
        if (!req.params.email) {
            res.status(400).json({
                success: false,
                message: 'email not provided'
            });
        } else {
            User.findOne({ email: req.params.email }).select('nom prenom email').exec((err, user) => {
                if (err) return next(err);
                if (!user) {
                    res.status(409).json({
                        success: false,
                        message: 'User not find'
                    });
                }
                return res.status(200).json({
                    success: true,
                    obj: user
                });
            });
        }
    });

    /**
     * Get User by Id
     * Forgot password component
     */
    router.get('/users/:id', (req, res, next) => {
        if (!req.params.id) {
            res.status(400).json({
                success: false,
                message: 'email not provided'
            });
        } else {
            User.findById(req.params.id).select('nom prenom email').exec((err, user) => {
                if (err) return next(err);
                if (!user) {
                    res.status(409).json({
                        success: false,
                        message: 'User not find'
                    });
                }
                return res.status(200).json({
                    success: true,
                    obj: user
                });
            });
        }
    });

    /**
     * Réinitialise password
     */
    router.put('/init-password/:_id', (req, res, next) => {
        if (!req.body.password) {
            res.status(400).json({
                success: false,
                message: 'password not provided'
            });
        } else if (!req.params._id) {
            res.status(400).json({
                success: false,
                message: 'id not provided'
            });
        } else {
            User.findById(req.params._id, (err, user) => {
                if (err) return next(err);
                if (!user) {
                    res.status(409).json({
                        success: false,
                        message: 'user not find'
                    });
                } else {
                    console.log(req.body.password);
                    User.update({ _id: req.params._id }, { password: req.body.password }, (err, raw) => {
                        if (err) return next(err);
                        if (!raw) {
                            res.status(409).json({
                                success: false,
                                message: 'user not find'
                            });
                        } else {
                            res.status(200).json({
                                success: true,
                                message: 'Mot de passe réinitialisé',
                                obj: raw
                            });
                        }
                    });
                }
            });
        }
    });

    return router;
}