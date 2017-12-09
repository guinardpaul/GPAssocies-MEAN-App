const model = require('../models');

module.exports = (router) => {

    /**
     * GET ALL FactureAccompte
     */
    router.get('/facture-accompte', (req, res, next) => {
        model.FactureAccompte.findAll()
            .then(data => {
                res.status(200).json(data);
            })
            .catch(err => {
                res.status(500).json({
                    success: false,
                    message: 'factureaccompte not find',
                    err: err
                });
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
            model.FactureAccompte.findAll({ where: { factureGlobal: req.params.factureGlobal } })
                .then(data => {
                    res.status(200).json(data);
                })
                .catch(err => {
                    res.status(500).json({
                        success: false,
                        message: 'facture accompte not find',
                        err: err
                    });
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
            model.FactureAccompte.findById(req.params.id)
                .then(data => {
                    res.status(200).json(data);
                })
                .catch(err => {
                    res.status(500).json({
                        success: false,
                        message: 'facture accompte not find',
                        err: err
                    });
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
            model.FactureAccompte.findAll({ where: { ref_factureAccompte: req.params.ref_factureAccompte } })
                .then(data => {
                    let statusVerifRef = false;
                    if (data) {
                        for (var fact in factureAccompte) {
                            if (factureAccompte.hasOwnProperty(fact)) {
                                if (factureAccompte[fact].factureGlobal == req.params.factureGlobal) {
                                    statusVerifRef = true;
                                }
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
                })
                .catch(err => {
                    res.status(500).json({
                        success: false,
                        message: 'facture accompte not find',
                        err: err
                    });
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
            model.FactureAccompte.create(req.body)
                .then(data => {
                    res.status(200).json({
                        success: true,
                        message: 'facture accompte créée',
                        obj: data
                    });
                })
                .catch(err => {
                    res.status(500).json({
                        success: false,
                        message: 'Erreur création facture accompte',
                        err: err
                    });
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
            model.FactureAccompte.update(req.body, { where: { id: req.params.id } })
                .then(data => {
                    res.status(200).json({
                        success: true,
                        message: 'facture accompte modifiée',
                        obj: data
                    });
                })
                .catch(err => {
                    res.status(500).json({
                        success: false,
                        message: 'Erreur modification facture accompte',
                        err: err
                    });
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
            model.FactureAccompte.destroy({ where: { id: req.params.id } })
                .then(resp => {
                    res.status(200).json({
                        success: true,
                        message: 'facture accompte supprimée'
                    });
                })
                .catch(err => {
                    res.status(500).json({
                        success: false,
                        message: 'Erreur suppression facture accompte',
                        err: err
                    });
                });
        }
    });

    return router;
}