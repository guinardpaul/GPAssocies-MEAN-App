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
            passport.authenticate('local-register', function(err, user, info) {
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

    return router;
}