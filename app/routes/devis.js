const Devis = require('../models/Devis');

module.exports = (router) => {

    /**
     * Get All Devis
     */
    router.get('/devis', (req, res, next) => {
        Devis.find((err, data) => {
            if (err) return next(err);
            res.json(data);
        });
    });

    /**
     * GET ALL DEVIS BY CLIENT
     */
    router.get('/devis/client/:client', (req, res, next) => {
        if (!req.params.client) {
            res.json({
                success: false,
                message: 'client._id not provided'
            });
        } else {
            // associe client to params
            // {} display all Devis informations
            Devis.find({ 'client': req.params.client }, {}, (err, data) => {
                if (data) {
                    res.json(data);
                } else {
                    res.json({
                        success: false,
                        message: 'Devis not found',
                        err: err
                    });
                }
            });
        }
    });

    /**
     * GET ONE DEVIS
     */
    router.get('/devis/:id', (req, res, next) => {
        if (!req.params.id) {
            res.json({
                success: false,
                message: 'id not provided'
            });
        } else {
            Devis.findById(req.params.id, (err, data) => {
                if (data) {
                    res.json(data);
                } else {
                    res.json({
                        success: false,
                        message: 'Devis not found',
                        err: err
                    });
                }
            });
        }
    });

    /**
     * SAVE DEVIS
     */
    router.post('/devis', (req, res, next) => {
        if (!req.body) {
            if (req.body.ref_devis === '') {
                res.json({
                    success: false,
                    message: 'Ref Devis not provided'
                });
            } else {
                res.json({
                    success: false,
                    message: 'data not provided'
                });
            }
        } else {
            Devis.create(req.body, (err, data) => {
                if (err) {
                    res.json({
                        success: false,
                        message: 'Erreur création devis',
                        err: err
                    });
                } else {
                    res.json({
                        success: true,
                        obj: data,
                        message: 'Devis créé'
                    });
                }
            });
        }
    });

    /**
     * UPDATE DEVIS
     */
    router.put('/devis/:id', (req, res, next) => {
        if (!req.params.id) {
            res.json({
                success: false,
                message: 'id not provided'
            });
        } else {
            Devis.findByIdAndUpdate(req.params.id, req.body, (err, data) => {
                if (err) {
                    res.json({
                        success: false,
                        message: 'Erreur modification devis',
                        err: err
                    });
                } else {
                    // Récupère Devis Updated
                    Devis.findById(req.params.id, (err, data) => {
                        res.json({
                            success: true,
                            obj: data,
                            message: 'Devis modifié'
                        });
                    });
                }
            });
        }
    });

    /**
     * REMOVE DEVIS
     */
    router.delete('/devis/:id', (req, res, next) => {
        if (!req.params.id) {
            res.json({
                success: false,
                message: 'id not provided'
            });
        } else {
            Devis.findByIdAndRemove(req.params.id, req.body, (err, data) => {
                if (data) {
                    res.json({
                        success: true,
                        message: 'Devis supprimé'
                    });
                } else {
                    res.json({
                        success: false,
                        message: 'Erreur suppression devis',
                        err: err
                    });
                }
            });
        }
    });

    return router;
}