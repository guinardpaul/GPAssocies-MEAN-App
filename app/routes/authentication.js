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

  return router;
}