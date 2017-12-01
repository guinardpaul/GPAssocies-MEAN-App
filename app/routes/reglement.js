const model = require('../models');

module.exports = (router) => {
  /**
   * Get All Reglements
   */
  router.get('/reglements', (req, res, next) => {
    model.Reglement.findAll()
      .then(data => {
        res.status(200).json(data);
      })
      .catch(err => {
        res.status(500).json({
          success: false,
          message: 'erreur fetching reglements',
          err: err
        });
      });
  });

  /**
   * Get All Reglements by Facture Accompte ID
   */
  router.get('/reglements/:factureAccompte', (req, res, next) => {
    if (!req.params.factureAccompte) {
      return res.status(400).json({
        success: false,
        message: 'id not provided'
      });
    } else {
      model.Reglement.findAll({ where: { factureAccompte: req.params.factureAccompte } })
        .then(data => {
          res.status(200).json(data);
        })
        .catch(err => {
          res.status(500).json({
            success: false,
            message: 'Erreur fetching reglements',
            err: err
          });
        });
    }
  });

  /**
   * Create reglement
   */
  router.post('/reglements', (req, res, next) => {
    if (!req.body) {
      return res.status(400).json({
        success: false,
        message: 'body not provided'
      });
    } else {
      model.Reglement.create(req.body)
        .then(data => {
          res.status(200).json({
            success: true,
            message: 'reglement créé',
            obj: data
          });
        })
        .catch(err => {
          res.status(500).json({
            success: false,
            message: 'Erreur création reglements',
            err: err
          });
        });
    }
  });

  /**
     * UPDATE DEVIS
     */
  router.put('/reglements/:id', (req, res, next) => {
    if (!req.params.id) {
      return res.status(400).json({
        success: false,
        message: 'id not provided'
      });
    } else {
      model.Reglement.update(req.body, { where: { id: req.params.id } })
        .then(data => {
          res.status(200).json({
            success: true,
            message: 'reglement modifié',
            obj: data
          });
        })
        .catch(err => {
          res.status(500).json({
            success: false,
            message: 'Erreur modification reglements',
            err: err
          });
        });
    }
  });

  /**
   * REMOVE DEVIS
   */
  router.delete('/reglements/:id', (req, res, next) => {
    if (!req.params.id) {
      return res.status(400).json({
        success: false,
        message: 'id not provided'
      });
    } else {
      model.Reglement.destroy(req.params.id)
        .then(resp => {
          res.status(200).json({
            success: true,
            message: 'reglement supprimé'
          });
        })
        .catch(err => {
          res.status(500).json({
            success: false,
            message: 'Erreur suppression reglements',
            err: err
          });
        });
    }
  });

  return router;
}