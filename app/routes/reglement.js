const Reglement = require('../models/Reglement');
const FactureAccompte = require('../models/FactureAccompte');

module.exports = (router) => {
  /**
   * Get All Reglements
   */
  router.get('/reglements', (req, res, next) => {
    Reglement.find((err, data) => {
      if (err) {
        res.json({
          success: false,
          err: err
        });
      } else {
        res.json(data);
      }
    });
  });

  /**
   * Get All Reglements by Facture Accompte ID
   */
  router.get('/reglements/:factureAccompte', (req, res, next) => {
    if (!req.params.factureAccompte) {
      res.json({
        success: false,
        message: 'id not provided'
      });
    } else {
      Reglement.find({ 'factureAccompte': req.params.factureAccompte }, (err, data) => {
        if (err) {
          res.json({
            success: false,
            err: err
          });
        } else {
          res.json(data);
        }
      });
    }
  });

  /**
   * Create reglement
   */
  router.post('/reglements', (req, res, next) => {
    if (!req.body) {
      res.json({
        success: false,
        message: 'body not provided'
      });
    } else {
      Reglement.create(req.body, (err, data) => {
        if (err) {
          res.json({
            success: false,
            message: 'Erreur save Reglement',
            err: err
          });
        } else {
          res.json({
            success: true,
            message: 'Reglement saved'
          });
        }
      });
    }
  });

  /**
     * UPDATE DEVIS
     */
  router.put('/reglements/:id', (req, res, next) => {
    if (!req.params.id) {
      res.json({
        success: false,
        message: 'id not provided'
      });
    } else {
      Reglement.findByIdAndUpdate(req.params.id, req.body, (err, data) => {
        if (err) {
          res.json({
            success: false,
            error: err
          });
        } else {
          // Récupère Reglement Updated
          Reglement.findById(req.params.id, (err, data) => {
            res.json({
              success: true,
              obj: data,
              msg: 'Reglement updated'
            });
          });
        }
      });
    }
  });

  /**
   * REMOVE DEVIS
   */
  router.delete('/reglements/:id', (req, res, next) => {
    if (!req.params.id) {
      res.json({
        success: false,
        message: 'id not provided'
      });
    } else {
      Reglement.findByIdAndRemove(req.params.id, req.body, (err, data) => {
        if (data) {
          res.json({
            success: true,
            msg: 'Reglement deleted'
          });
        } else {
          res.json({
            success: false,
            msg: 'Error. Reglement doesn\'t exist'
          });
        }
      });
    }
  });

  return router;
}