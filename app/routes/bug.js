const model = require('../models');

module.exports = (router) => {

  /**
   * Get All Bugs
   */
  router.get('/bugs', (req, res, next) => {
    model.Bug.findAll()
      .then((data) => {
        res.status(200).json(data);
      })
      .catch(err => {
        res.status(500).json({
          success: false,
          message: 'Erreur getting bugs',
          err: err
        });
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
      model.Bug.findById(req.params.id)
        .then(data => {
          return res.status(200).json(data);
        })
        .catch(err => {
          res.status(500).json({
            success: false,
            message: 'Bug not find',
            err: err
          });
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
      model.Bug.create(req.body)
        .then(data => {
          return res.status(200).json({
            success: true,
            obj: data
          });
        })
        .catch(err => {
          res.status(500).json({
            success: false,
            message: 'Erreur création bug',
            err: err
          });
        });
    }
  });

  router.put('/bugs/:id', (req, res, next) => {
    if (!req.params.id) {
      return res.status(400).json({
        success: false,
        message: 'id not provided'
      });
    } else {
      model.Bug.update(req.body, { where: { id: req.params.id } })
        .then(data => {
          res.status(200).json({
            success: true,
            obj: data,
            message: 'Bug modifié'
          });
        })
        .catch(err => {
          res.status(500).json({
            success: false,
            message: 'Erreur modification bug',
            err: err
          });
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
      model.Bug.destroy({ where: { id: req.params.id } })
        .then(resp => {
          res.status(200).json({
            success: true,
            message: 'bug supprimé'
          });
        })
        .catch(err => {
          res.status(500).json({
            success: false,
            message: 'Erreur suppression bug'
          });
        });
    }
  });

  return router;
}