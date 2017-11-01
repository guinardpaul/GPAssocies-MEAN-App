const Bug = require('../models/Bug');

module.exports = (router) => {

  /**
   * Get All Bugs
   */
  router.get('/bugs', (req, res, next) => {
    Bug.find((err, data) => {
      if (err) return next(err);
      res.status(200).json(data);
    });
  });

  /**
   * Get One Bug
   */
  router.get('/bugs/:id', (req, res, next) => {
    if (!req.params.id) {
      res.status(400).json({
        success: false,
        message: 'id not provided'
      });
    } else {
      Bug.findById(req.params.id, (err, data) => {
        if (data) {
          res.status(200).json(data);
        } else {
          res.status(409).json({
            success: false,
            message: 'Bug not found',
            err: err
          });
        }
      });
    }
  });

  /**
   * CREATE Bug
   */
  router.post('/bugs', (req, res, next) => {
    if (!req.body) {
      res.status(400).json({
        success: false,
        message: 'body not provided'
      });
    } else {
      Bug.create(req.body, (err, data) => {
        if (err) {
          res.status(500).json({
            success: false,
            message: 'Erreur création bug',
            err: err
          });
        } else {
          res.status(200).json({
            success: true,
            obj: data,
            message: 'Bug créé'
          });
        }
      });
    }
  });

  router.put('/bugs/:id', (req, res, next) => {
    if (!req.params.id) {
      res.status(400).json({
        success: false,
        message: 'id not provided'
      });
    } else {
      Bug.findByIdAndUpdate(req.params.id, req.body, (err, data) => {
        if (err) {
          res.status(500).json({
            success: false,
            message: 'Erreur modification bug',
            err: err
          });
        } else {
          Bug.findById(req.params.id, (err, data) => {
            res.status(200).json({
              success: true,
              obj: data,
              message: 'Bug modifié'
            });
          });
        }
      });
    }
  });

  /**
   * DELETE Bug
   */
  router.delete('/bugs/:id', (req, res, next) => {
    if (!req.params.id) {
      res.status(400).json({
        success: false,
        message: 'id not provided'
      });
    } else {
      Bug.findByIdAndRemove(req.params.id, req.body, (err, data) => {
        if (err) {
          res.status(500).json({
            success: false,
            message: 'Erreur suppresion bug',
            err: err
          });
        } else {
          res.status(200).json({
            success: true,
            message: 'Bug supprimé'
          });
        }
      });
    }
  });

  return router;
}