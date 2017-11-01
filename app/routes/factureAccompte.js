const FactureAccompte = require('../models/FactureAccompte');

module.exports = (router) => {

    /**
     * GET ALL FactureAccompte
     */
    router.get('/facture-accompte', (req, res, next) => {
        FactureAccompte.find((err, data) => {
            if (err) return next(err);
            return res.status(200).json(data);
        });
    });

    /**
     * GET ALL FactureAccompte BY FactureGlobal
     */
    router.get('/facture-accompte/facture-global/:factureGlobal', (req, res, next) => {
        if (!req.params.factureGlobal) {
            return res.status(400).json({
                success: false,
                message: 'factureGlobal._id not provided'
            });
        } else {
            // associe client to params
            // {} display all FactureAccompte informations
            FactureAccompte.find({ 'factureGlobal': req.params.factureGlobal }, {}, (err, data) => {
                if (err) {
                    return res.status(500).json({
                        success: false,
                        message: 'Facture d\'accompte not found',
                        err: err
                    });
                } else {
                    return res.status(200).json(data);
                }
            });
        }
    });

    /**
     * GET ONE FactureAccompte
     */
    router.get('/facture-accompte/:id', (req, res, next) => {
        if (!req.params.id) {
            return res.status(400).json({
                success: false,
                message: 'id not provided'
            });
        } else {
            FactureAccompte.findById(req.params.id, (err, data) => {
                if (err) {
                    return res.status(500).json({
                        success: false,
                        message: 'Facture d\'accompte not found',
                        err: err
                    });
                } else {
                    return res.status(200).json(data);
                }
            });
        }
    });

    /**
     * Check unicité Ref_factureAccompte
     * GET ONE Facture accompte BY Ref_factureAccompte
     * Check ensuite si la Facture accompte fait partie de la liste des Facture accompte de la facture global
     */
    router.get('/facture-accompte/facture-global/:factureGlobal/ref/:ref_factureAccompte', (req, res, next) => {
        if (!req.params.ref_factureAccompte) {
            return res.status(400).json({
                success: false,
                message: 'Ref not provided'
            });
        } else if (!req.params.factureGlobal) {
            return res.status(400).json({
                success: false,
                message: 'id factureGlobal not provided'
            });
        } else {
            // associe ref to params
            // {} display all Devis informations
            FactureAccompte.find({ 'ref_factureAccompte': req.params.ref_factureAccompte }, {}, (err, factureAccompte) => {
                if (err) {
                    return res.status(500).json({
                        success: false,
                        message: 'Facture Accompte not found',
                        err: err
                    });
                }
                if (factureAccompte) {
                    let statusVerifRef = false;
                    for (var fact in factureAccompte) {
                        if (factureAccompte.hasOwnProperty(fact)) {
                            if (factureAccompte[fact].factureGlobal == req.params.factureGlobal) {
                                statusVerifRef = true;
                            }
                        }
                    }
                    if (statusVerifRef) {
                        return res.status(200).json({
                            success: true,
                            message: 'Facture Accompte with ref "' + req.params.ref_factureAccompte + '" already exists'
                        });
                    } else {
                        return res.status(200).json({
                            success: false,
                            message: 'Facture Accompte not found'
                        });
                    }
                }
            });
        }
    });

    /**
     * SAVE FactureAccompte
     */
    router.post('/facture-accompte', (req, res, next) => {
        if (!req.body) {
            return res.status(400).json({
                success: false,
                message: 'data not provided'
            });
        } else {
            FactureAccompte.create(req.body, (err, data) => {
                if (err) {
                    if (err.errors.montantFacture) {
                        return res.status(409).json({
                            success: false,
                            message: err.errors.montantFacture.message
                        });
                    } else {
                        return res.status(500).json({
                            success: false,
                            err: err,
                            message: 'Erreur création facture d\'accompte'
                        });
                    }
                } else {
                    return res.status(200).json({
                        success: true,
                        obj: data,
                        message: 'Facture d\'accompte créée'
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
            return res.status(400).json({
                success: false,
                message: 'id not provided'
            });
        } else {
            FactureAccompte.findByIdAndUpdate(req.params.id, req.body, (err, data) => {
                if (err) {
                    return res.status(500).json({
                        success: false,
                        message: 'Erreur modification facture d\'accompte',
                        err: err
                    });
                } else {
                    FactureAccompte.findById(req.params.id, (err, data) => {
                        return res.status(200).json({
                            success: true,
                            obj: data,
                            message: 'Facture  d\'accompte modifiée'
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
            return res.status(400).json({
                success: false,
                message: 'id not provided'
            });
        } else {
            FactureAccompte.findByIdAndRemove(req.params.id, req.body, (err, data) => {
                if (data) {
                    return res.status(200).json({
                        success: true,
                        message: 'Facture d\'accompte supprimée'
                    });
                } else {
                    return res.status(500).json({
                        success: false,
                        message: 'Erreur suppresion facture d\'accompte',
                        err: err
                    });
                }
            });
        }
    });

    return router;
}