const model = require('../models');

module.exports = (router) => {

    /**
     * GET ALL FactureGlobal
     */
    router.get('/facture-global', (req, res, next) => {
        model.FactureGlobal.findAll()
            .then(data => {
                res.status(200).json(data);
            })
            .catch(err => {
                res.status(500).json({
                    success: false,
                    message: 'Erreur fetching facture globals',
                    err: err
                });
            });
    });

    /**
     * GET ALL FactureGlobal BY CLIENT
     */
    router.get('/facture-global/client/:client', (req, res, next) => {
        if (!req.params.client) {
            return res.status(400).json({
                success: false,
                message: 'client_id not provided'
            });
        } else {
            model.FactureGlobal.findAll({ where: { client: req.params.client } })
                .then(data => {
                    res.status(200).json(data);
                })
                .catch(err => {
                    res.status(500).json({
                        success: false,
                        message: 'Erreur fetching facture global',
                        err: err
                    });
                });
        }
    });

    /**
     * GET All FactureGlobal by Devis
     */
    router.get('/facture-global/devis/:devis', (req, res, next) => {
        if (!req.params.devis) {
            return res.status(400).json({
                success: false,
                message: 'devis not provided'
            });
        } else {
            model.FactureGlobal.findAll({ where: { devis: req.params.devis } })
                .then(data => {
                    res.status(200).json(data);
                })
                .catch(err => {
                    res.status(500).json({
                        success: false,
                        message: 'Erreur fetching facture global',
                        err: err
                    });
                });
        }
    });

    /**
     * Check unicité Ref_factureGlobal
     * GET ONE FactureGlobal BY REF_FACTUREGLOBAL
     * Check ensuite si la factureglobal fait partie de la liste des factureglobal du client
     */
    router.get('/facture-global/client/:client/ref/:ref_factureGlobal', (req, res, next) => {
        if (!req.params.ref_factureGlobal) {
            return res.status(400).json({
                success: false,
                message: 'Ref not provided'
            });
        } else if (!req.params.client) {
            return res.status(400).json({
                success: false,
                message: 'id client not provided'
            });
        } else {
            // associe ref to params
            // {} display all FactureGlobal informations
            model.FactureGlobal.findAll({ where: { ref_factureGlobal: req.params.ref_factureGlobal } })
                .then(data => {
                    let statusVerifRef = false;
                    if (data) {
                        for (var fact in data) {
                            if (data.hasOwnProperty(fact)) {
                                if (data[fact].client == req.params.client) {
                                    statusVerifRef = true;
                                }
                            }
                        }
                    }
                    if (statusVerifRef) {
                        return res.status(200).json({
                            success: true,
                            message: 'Facture global with ref "' + req.params.ref_factureGlobal + '" already exists'
                        });
                    } else {
                        return res.status(200).json({
                            success: false,
                            message: 'Facture Global not found'
                        });
                    }
                })
                .catch(err => {
                    console.log(err);
                    res.status(500).json({
                        success: false,
                        message: 'erreur fetching facture globals',
                        err: err
                    });
                });
        }
    });

    /**
     * GET ONE FactureGlobal
     */
    router.get('/facture-global/:id', (req, res, next) => {
        if (!req.params.id) {
            return res.status(400).json({
                success: false,
                message: 'id_fact not provided'
            });
        } else {
            model.FactureGlobal.findById(req.params.id)
                .then(data => {
                    res.status(200).json(data);
                })
                .catch(err => {
                    res.status(500).json({
                        success: false,
                        message: 'Erreur fetching facture global',
                        err: err
                    });
                });
        }
    });

    /**
     * SAVE FactureGlobal
     */
    router.post('/facture-global', (req, res, next) => {
        if (!req.body) {
            return res.status(400).json({
                success: false,
                message: 'Data not provided'
            });
        } else {
            model.FactureGlobal.create(req.body)
                .then(data => {
                    res.status(200).json({
                        success: true,
                        message: 'facture global sauvée',
                        obj: data
                    });
                })
                .catch(err => {
                    res.status(500).json({
                        success: false,
                        message: 'Erreur saving facture global',
                        err: err
                    });
                });
        }
    });

    /**
     * UPDATE FactureGlobal
     */
    router.put('/facture-global/:id', (req, res, next) => {
        if (!req.params.id) {
            return res.status(400).json({
                success: false,
                message: 'id_fact not provided'
            });
        } else {
            model.FactureGlobal.update(req.body, { where: { id: req.params.id } })
                .then(data => {
                    res.status(200).json({
                        success: true,
                        message: 'facture global modifiée',
                        obj: data
                    });
                })
                .catch(err => {
                    res.status(500).json({
                        success: false,
                        message: 'Erreur update facture global',
                        err: err
                    });
                });
        }
    });

    /**
     * REMOVE FactureGlobal
     */
    router.delete('/facture-global/:id', (req, res, next) => {
        if (!req.params.id) {
            return res.status(400).json({
                success: false,
                message: 'id_fact not provided'
            });
        } else {
            model.FactureGlobal.destroy({ where: { id: req.params.id } })
                .then(resp => {
                    res.status(200).json({
                        success: true,
                        message: 'facture global supprimée'
                    });
                })
                .catch(err => {
                    res.status(500).json({
                        success: false,
                        message: 'Erreur suppression facture global',
                        err: err
                    });
                });
        }
    });

    return router;
}