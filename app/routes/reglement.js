const Reglement = require('../models/Reglement');
const FactureAccompte = require('../models/FactureAccompte');

module.exports = (router) => {
  /**
   * Get All Reglements
   */
  router.get('/reglements', (req, res, next) => {
    Reglement.find((err, data) => {
      if (err) return next(err);
      return res.status(200).json(data);
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
      Reglement.find({ 'factureAccompte': req.params.factureAccompte }, (err, data) => {
        if (err) {
          return res.status(500).json({
            success: false,
            message: 'facture d\'accompte not found',
            err: err
          });
        } else {
          return res.status(200).json(data);
        }
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
      Reglement.create(req.body, (err, data) => {
        if (err) {
          if (err.errors.reglementTtc) {
            return res.status(409).json({
              success: false,
              message: err.errors.reglementTtc.message
            });
          } else {
            return res.status(500).json({
              success: false,
              message: 'Erreur création réglement',
              err: err
            });
          }
        } else {
          return res.status(200).json({
            success: true,
            message: 'Règlement créé'
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
      return res.status(400).json({
        success: false,
        message: 'id not provided'
      });
    } else {
      Reglement.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, data) => {
        if (err) {
          return res.status(500).json({
            success: false,
            message: 'facture d\'accompte not found',
            err: err
          });
        } else {
          return res.status(200).json({
            success: true,
            obj: data,
            message: 'Règlement modifié'
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
      return res.status(400).json({
        success: false,
        message: 'id not provided'
      });
    } else {
      Reglement.findByIdAndRemove(req.params.id, req.body, (err, data) => {
        if (data) {
          return res.status(200).json({
            success: true,
            message: 'Règlement supprimé'
          });
        } else {
          return res.status(500).json({
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