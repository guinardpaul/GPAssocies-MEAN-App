const DetailsDevis = require('../models/DetailsDevis');

module.exports = (router) => {

  /**
   * Get All DetailsDevis by devis._id
   */
  router.get('/details-devis/:devis', (req, res, next) => {
    if (!req.params.devis) {
      res.json({
        success: false,
        message: 'Devis._id not provided'
      });
    } else {
      DetailsDevis.find({ 'devis': req.params.devis }, {}, (err, data) => {
        if (data) {
          res.json(data);
        } else {
          res.json({
            success: false,
            message: 'Details Devis not found'
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
      res.json({
        success: false,
        message: 'detailsDevis._id not provided'
      });
    } else {
      DetailsDevis.findById(req.params.id, (err, data) => {
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
   * Create DetailsDevis
   */
  router.post('/details-devis/', (req, res, next) => {
    if (!req.body) {
      res.json({
        success: false,
        message: 'data not provided'
      });
    } else {
      DetailsDevis.create(req.body, (err, data) => {
        if (err) {
          res.json({
            success: false,
            err: err
          });
        } else {
          res.json({
            success: true,
            message: 'DetailsDevis saved',
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
      res.json({
        success: false,
        message: 'id not provided'
      });
    } else {
      DetailsDevis.findByIdAndUpdate(req.params.id, req.body, (err, data) => {
        if (err) {
          res.json({
            success: false,
            message: 'Erreur modification Details devis' + err
          });
        } else {
          res.json({
            success: true,
            message: 'Détails devis mis à jour',
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
      res.json({
        success: false,
        message: 'id not provided'
      });
    } else {
      DetailsDevis.findByIdAndRemove(req.params.id, (err, data) => {
        if (err) {
          res.json({
            success: false,
            err: err
          });
        } else {
          res.json({
            success: true,
            message: 'Details Devis deleted'
          });
        }
      });
    }
  });

  return router;
};