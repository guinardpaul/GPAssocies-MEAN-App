const model = require('../models');

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
      model.DetailsDevis.findAll({ where: { devis: req.params.devis } })
        .then(data => {
          res.status(200).json(data);
        })
        .catch(err => {
          res.status(500).json({
            success: false,
            message: 'detailsDevis not find',
            err: err
          });
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
      model.DetailsDevis.findById(req.params.id)
        .then(data => {
          res.status(200).json(data);
        })
        .catch(err => {
          res.status(500).json({
            success: false,
            message: 'detailsDevis not find',
            err: err
          });
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
      model.DetailsDevis.create(req.body)
        .then(data => {
          res.status(200).json({
            success: true,
            message: 'DetailsDevis sauvé',
            obj: data
          });
        })
        .catch(err => {
          res.status(500).json({
            success: false,
            message: 'Erreur création detailsDevis',
            err: err
          });
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
      model.DetailsDevis.update(req.body, { where: { id: req.params.id } })
        .then(data => {
          res.status(200).json({
            success: true,
            message: 'DetailsDevis modifié',
            obj: data
          });
        })
        .catch(err => {
          res.status(500).json({
            success: false,
            message: 'Erreur modification detailsDevis',
            err: err
          });
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
      model.DetailsDevis.destroy({ where: { id: req.params.id } })
        .then(resp => {
          res.status(200).json({
            success: true,
            message: 'DetailsDevis supprimé'
          });
        })
        .catch(err => {
          res.status(500).json({
            success: false,
            message: 'Erreur suppression detailsDevis',
            err: err
          });
        });
    }
  });

  return router;
};