const DetailsDevis = require('../models/DetailsDevis');

module.exports = (router) => {

  /**
   * Get All DetailsDevis by devis._id
   */
  router.get('/details-devis/:devis', (req, res, next) => {
    if (!req.params.devis) {
      return res.json({
        success: false,
        message: 'Devis._id not provided'
      });
    } else {
      DetailsDevis.find({ 'devis': req.params.devis }, {}, (err, data) => {
        if (data) {
          return res.json(data);
        } else {
          return res.json({
            success: false,
            message: 'Details Devis not found',
            err: err
          });
        }
      });
    }
  });

  /**
   * Get one DetailsDevis by Id
   */
  router.get('/details-devis/:id', (req, res, next) => {
    if (!req.params.id) {
      return res.json({
        success: false,
        message: 'detailsDevis._id not provided'
      });
    } else {
      DetailsDevis.findById(req.params.id, (err, data) => {
        if (err) {
          return res.json({
            success: false,
            message: 'Details Devis not found',
            err: err
          });
        } else {
          return res.json(data);
        }
      });
    }
  });

  /**
   * Create DetailsDevis
   */
  router.post('/details-devis/', (req, res, next) => {
    if (!req.body) {
      return res.json({
        success: false,
        message: 'data not provided'
      });
    } else {
      DetailsDevis.create(req.body, (err, data) => {
        if (err) {
          if (err.errors.montantHt) {
            return res.json({
              success: false,
              message: err.errors.montantHt.message
            })
          } else {
            return res.json({
              success: false,
              message: 'Erreur création details devis',
              err: err
            });
          }
        } else {
          return res.json({
            success: true,
            message: 'DetailsDevis créé',
            obj: data
          });
        }
      });
    }
  });

  /**
   * Update DetailsDevis
   */
  router.put('/details-devis/:id', (req, res, next) => {
    if (!req.params.id) {
      return res.json({
        success: false,
        message: 'id not provided'
      });
    } else {
      DetailsDevis.findByIdAndUpdate(req.params.id, req.body, (err, data) => {
        if (err) {
          if (err.errors.montantHt) {
            return res.json({
              success: false,
              message: err.errors.montantHt.message
            })
          } else {
            return res.json({
              success: false,
              message: 'Erreur modification Details devis',
              err: err
            });
          }
        } else {
          return res.json({
            success: true,
            message: 'Détails devis modifié',
            obj: data
          });
        }
      });
    }
  });

  /**
   * Delete detailsDevis
   */
  router.delete('/details-devis/:id', (req, res, next) => {
    if (!req.params.id) {
      return res.json({
        success: false,
        message: 'id not provided'
      });
    } else {
      DetailsDevis.findByIdAndRemove(req.params.id, (err, data) => {
        if (err) {
          return res.json({
            success: false,
            message: 'Details devis not found',
            err: err
          });
        } else {
          return res.json({
            success: true,
            message: 'Details Devis supprimé'
          });
        }
      });
    }
  });

  return router;
};