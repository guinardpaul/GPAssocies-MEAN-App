const DetailsDevis = require('../models/DetailsDevis');

module.exports = (router) => {

  /**
   * Get All DetailsDevis by devis._id
   */
  router.get('/details-devis/:devis', (req, res, next) => {
    if (!req.params.devis) {
      return res.status(400).json({
        success: false,
        message: 'Devis._id not provided'
      });
    } else {
      DetailsDevis.find({ 'devis': req.params.devis }, {}, (err, data) => {
        if (data) {
          return res.status(200).json(data);
        } else {
          return res.status(500).json({
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
      return res.status(400).json({
        success: false,
        message: 'detailsDevis._id not provided'
      });
    } else {
      DetailsDevis.findById(req.params.id, (err, data) => {
        if (err) {
          return res.status(500).json({
            success: false,
            message: 'Details Devis not found',
            err: err
          });
        } else {
          return res.status(200).json(data);
        }
      });
    }
  });

  /**
   * Create DetailsDevis
   */
  router.post('/details-devis/', (req, res, next) => {
    if (!req.body) {
      return res.status(400).json({
        success: false,
        message: 'data not provided'
      });
    } else {
      DetailsDevis.create(req.body, (err, data) => {
        if (err) {
          if (err.errors.montantHt) {
            return res.status(409).json({
              success: false,
              message: err.errors.montantHt.message
            })
          } else {
            return res.status(500).json({
              success: false,
              message: 'Erreur création details devis',
              err: err
            });
          }
        } else {
          return res.status(200).json({
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
      return res.status(400).json({
        success: false,
        message: 'id not provided'
      });
    } else {
      DetailsDevis.findByIdAndUpdate(req.params.id, req.body, (err, data) => {
        if (err) {
          if (err.errors.montantHt) {
            return res.status(409).json({
              success: false,
              message: err.errors.montantHt.message
            })
          } else {
            return res.status(500).json({
              success: false,
              message: 'Erreur modification Details devis',
              err: err
            });
          }
        } else {
          return res.status(200).json({
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
      return res.status(400).json({
        success: false,
        message: 'id not provided'
      });
    } else {
      DetailsDevis.findByIdAndRemove(req.params.id, (err, data) => {
        if (err) {
          return res.status(500).json({
            success: false,
            message: 'Details devis not found',
            err: err
          });
        } else {
          return res.status(200).json({
            success: true,
            message: 'Details Devis supprimé'
          });
        }
      });
    }
  });

  return router;
};