const Reglement = require('../models/Reglement');
const FactureAccompte = require('../models/FactureAccompte');

module.exports = (router) => {
  /**
   * Get All Reglements
   */
  router.get('/reglements', (req, res, next) => {
    Reglement.find((err, data) => {
      if (err) return next(err);
      res.json(data);
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
            message: 'facture d\'accompte not found',
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
            message: 'Erreur création réglement',
            err: err
          });
        } else {
          res.json({
            success: true,
            message: 'Reglement créé'
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
            message: 'facture d\'accompte not found',
            err: err
          });
        } else {
          // Récupère Reglement Updated
          Reglement.findById(req.params.id, (err, data) => {
            res.json({
              success: true,
              obj: data,
              message: 'Reglement modifié'
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
            message: 'Reglement supprimé'
          });
        } else {
          res.json({
            success: false,
            message: 'Erreur suppression réglement',
            err: err
          });
        }
      });
    }
  });

  return router;
}