const FactureAccompte = require('../models/FactureAccompte');

module.exports = (router) => {

    /**
     * GET ALL FactureAccompte
     */
    router.get('/facture-accompte', (req, res, next) => {
        FactureAccompte.find((err, data) => {
            if (err) return next(err);
            res.json(data);
        });
    });

    /**
     * GET ALL FactureAccompte BY FactureGlobal
     */
    router.get('/facture-accompte/facture-global/:factureGlobal', (req, res, next) => {
        if (!req.params.factureGlobal) {
            res.json({
                success: false,
                message: 'factureGlobal._id not provided'
            });
        } else {
            // associe client to params
            // {} display all FactureAccompte informations
            FactureAccompte.find({ 'factureGlobal': req.params.factureGlobal }, {}, (err, data) => {
                if (err) {
                    return res.json({
                        success: false,
                        error: err
                    });
                } else {
                    res.json(data);
                }
            });
        }
    });

    /**
     * GET ONE FactureAccompte
     */
    router.get('/facture-accompte/:id', (req, res, next) => {
        if (!req.params.id) {
            res.json({
                success: false,
                message: 'id not provided'
            });
        } else {
            FactureAccompte.findById(req.params.id, (err, data) => {
                if (err) {
                    return res.json({
                        success: false,
                        error: err
                    });
                } else {
                    res.json(data);
                }
            });
        }
    });

    /**
     * SAVE FactureAccompte
     */
    router.post('/facture-accompte', (req, res, next) => {
        if (!req.body) {
            res.json({
                success: false,
                message: 'data not provided'
            });
        } else {
            FactureAccompte.create(req.body, (err, data) => {
                if (err) {
                    return res.json({
                        success: false,
                        error: err
                    });
                } else {
                    res.json({
                        success: true,
                        obj: data,
                        message: 'Facture Accompte created'
                    });
                }
            });
        }
    });

    /**
     * UPDATE FactureAccompte
     */
    router.put('/facture-accompte/:id', (req, res, next) => {
        if (!req.params.id) {
            res.json({
                success: false,
                message: 'id not provided'
            });
        } else {
            FactureAccompte.findByIdAndUpdate(req.params.id, req.body, (err, data) => {
                if (err) {
                    return res.json({
                        success: false,
                        error: err
                    });
                } else {
                    FactureAccompte.findById(req.params.id, (err, data) => {
                        res.json({
                            success: true,
                            obj: data,
                            message: 'Facture Accompte updated'
                        });
                    });
                }
            });
        }
    });

    /**
     * REMOVE FactureAccompte
     */
    router.delete('/facture-accompte/:id', (req, res, next) => {
        if (!req.params.id) {
            res.json({
                success: false,
                message: 'id not provided'
            });
        } else {
            FactureAccompte.findByIdAndRemove(req.params.id, req.body, (err, data) => {
                if (err) {
                    return res.json({
                        success: false,
                        error: err
                    });
                } else {
                    if (data != null) {
                        res.json({
                            success: true,
                            message: 'Facture Accompte deleted'
                        });
                    } else {
                        res.json({
                            success: true,
                            message: 'Error. Facture Accompte doesn\'t exist'
                        });
                    }
                }
            });
        }
    });

    return router;
}