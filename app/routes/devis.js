const model = require('../models');

module.exports = (router) => {

    /**
     * Get All Devis
     */
    router.get('/devis', (req, res, next) => {
        model.Devis.findAll()
            .then(data => {
                res.status(200).json(data);
            })
            .catch(err => {
                res.status(500).json({
                    success: false,
                    message: 'devis not find',
                    err: err
                });
            });
    });

    /**
     * GET ALL DEVIS BY CLIENT
     */
    router.get('/devis/client/:client', (req, res, next) => {
        if (!req.params.client) {
            return res.status(400).json({
                success: false,
                message: 'client._id not provided'
            });
        } else {
            // associe client to params
            // {} display all Devis informations
            model.Devis.findAll({ where: { client: req.params.client } })
                .then(data => {
                    res.status(200).json(data);
                })
                .catch(err => {
                    res.status(500).json({
                        success: false,
                        message: 'devis not find',
                        err: err
                    });
                });
        }
    });

    /**
     * GET ONE DEVIS
     */
    router.get('/devis/:id', (req, res, next) => {
        if (!req.params.id) {
            return res.status(400).json({
                success: false,
                message: 'id not provided'
            });
        } else {
            model.Devis.findById(req.params.id)
                .then(data => {
                    res.status(200).json(data);
                })
                .catch(err => {
                    res.status(500).json({
                        success: false,
                        message: 'devis not find',
                        err: err
                    });
                });
        }
    });

    /**
     * Check unicité Ref_devis
     * GET ONE Devis BY REF_DEVIS
     * Check ensuite si le devis fait partie de la liste des devis du client
     */
    router.get('/devis/client/:client/ref/:ref_devis', (req, res, next) => {
        if (!req.params.ref_devis) {
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
            model.Devis.findOne({ where: { ref_devis: req.params.ref_devis, client: req.params.client } })
                .then(devis => {
                    let statusVerifRef = false;
                    if (devis !== null) {
                        for (var dev in devis) {
                            if (devis.hasOwnProperty(dev)) {
                                if (devis[dev].client == req.params.client) {
                                    statusVerifRef = true;
                                }
                            }
                        }
                    }
                    if (statusVerifRef) {
                        return res.status(200).json({
                            success: true,
                            message: 'Devis with ref "' + req.params.ref_devis + '" already exists'
                        });
                    } else {
                        return res.status(200).json({
                            success: false,
                            message: 'Devis Global not found'
                        });
                    }
                })
                .catch(err => {
                    res.status(500).json({
                        success: false,
                        message: 'devis not find',
                        err: err
                    });
                });
        }
    });

    /**
     * SAVE DEVIS
     */
    router.post('/devis', (req, res, next) => {
        if (!req.body) {
            if (req.body.ref_devis === '') {
                return res.status(400).json({
                    success: false,
                    message: 'Ref Devis not provided'
                });
            } else {
                return res.status(400).json({
                    success: false,
                    message: 'data not provided'
                });
            }
        } else {
            model.Devis.create(req.body)
                .then(data => {
                    res.status(200).json({
                        success: true,
                        message: 'devis sauvé',
                        obj: data
                    });
                })
                .catch(err => {
                    res.status(500).json({
                        success: false,
                        message: 'erreur création devis',
                        err: err
                    });
                });
        }
    });

    /**
     * UPDATE DEVIS
     */
    router.put('/devis/:id', (req, res, next) => {
        if (!req.params.id) {
            return res.status(400).json({
                success: false,
                message: 'id not provided'
            });
        } else {
            model.Devis.update(req.body, { where: { id: req.params.id } })
                .then(data => {
                    res.status(200).json({
                        success: true,
                        message: 'devis modifié',
                        obj: data
                    });
                })
                .catch(err => {
                    res.status(500).json({
                        success: false,
                        message: 'erreur modification devis',
                        err: err
                    });
                });
        }
    });

    /**
     * REMOVE DEVIS
     */
    router.delete('/devis/:id', (req, res, next) => {
        if (!req.params.id) {
            return res.status(400).json({
                success: false,
                message: 'id not provided'
            });
        } else {
            model.Devis.destroy({ where: { id: req.params.id } })
                .then(resp => {
                    res.status(200).json({
                        success: true,
                        message: 'devis supprimé'
                    });
                })
                .catch(err => {
                    res.status(500).json({
                        success: false,
                        message: 'erreur suppression devis',
                        err: err
                    });
                });
        }
    });

    return router;
}