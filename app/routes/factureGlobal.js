const FactureGlobal = require('../models/FactureGlobal');

module.exports = (router) => {

    /**
     * GET ALL FactureGlobal
     */
    router.get('/facture-global', (req, res, next) => {
        FactureGlobal.find((err, data) => {
            if (err) return next(err);
            return res.json(data);
        });
    });

    /**
     * GET ALL FactureGlobal BY CLIENT
     */
    router.get('/facture-global/client/:client', (req, res, next) => {
        if (!req.params.client) {
            return res.json({
                success: false,
                message: 'client_id not provided'
            });
        } else {
            // associe client to params
            // {} display all FactureGlobal informations
            FactureGlobal.find({ 'client': req.params.client }, {}, (err, data) => {
                if (data) {
                    return res.json(data);
                } else {
                    return res.json({
                        success: false,
                        message: 'Facture Global not found',
                        err: err
                    });
                }
            });
        }
    });

    /**
     * GET All FactureGlobal by Devis
     */
    router.get('/facture-global/devis/:devis', (req, res, next) => {
        if (!req.params.devis) {
            return res.json({
                success: false,
                message: 'devis not provided'
            });
        } else {
            FactureGlobal.find({ 'devis': req.params.devis }, {}, (err, data) => {
                if (data) {
                    return res.json(data);
                } else {
                    return res.json({
                        success: false,
                        message: 'Facture Global not found',
                        err: err
                    });
                }
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
            return res.json({
                success: false,
                message: 'Ref not provided'
            });
        } else if (!req.params.client) {
            return res.json({
                success: false,
                message: 'id client not provided'
            });
        } else {
            // associe ref to params
            // {} display all FactureGlobal informations
            FactureGlobal.find({ 'ref_factureGlobal': req.params.ref_factureGlobal }, {}, (err, facture) => {
                if (err) {
                    return res.json({
                        success: false,
                        message: 'Facture global not found',
                        err: err
                    });
                }
                if (facture) {
                    let statusVerifRef = false;
                    for (var fact in facture) {
                        if (facture.hasOwnProperty(fact)) {
                            if (facture[fact].client == req.params.client) {
                                statusVerifRef = true;
                            }
                        }
                    }
                    if (statusVerifRef) {
                        return res.json({
                            success: true,
                            message: 'Facture global with ref "' + req.params.ref_factureGlobal + '" already exists'
                        });
                    } else {
                        return res.json({
                            success: false,
                            message: 'Facture Global not found'
                        });
                    }
                }
            });
        }
    });

    /**
     * GET ONE FactureGlobal
     */
    router.get('/facture-global/:id', (req, res, next) => {
        if (!req.params.id) {
            return res.json({
                success: false,
                message: 'id_fact not provided'
            });
        } else {
            FactureGlobal.findById(req.params.id, (err, data) => {
                if (err) {
                    return res.json({
                        success: false,
                        message: 'Facture global not found',
                        err: err
                    });
                } else {
                    return res.json(data);
                }
            });
        }
    });

    /**
     * SAVE FactureGlobal
     */
    router.post('/facture-global', (req, res, next) => {
        if (!req.body) {
            return res.json({
                success: false,
                message: 'Data not provided'
            });
        } else {
            FactureGlobal.create(req.body, (err, data) => {
                if (err) {
                    return res.json({
                        success: false,
                        message: 'Facture global not found',
                        err: err
                    });
                } else {
                    return res.json({
                        success: true,
                        obj: data,
                        message: 'Facture créée'
                    });
                }
            });
        }
    });

    /**
     * UPDATE FactureGlobal
     */
    router.put('/facture-global/:id', (req, res, next) => {
        if (!req.params.id) {
            return res.json({
                success: false,
                message: 'id_fact not provided'
            });
        } else {
            FactureGlobal.findByIdAndUpdate(req.params.id, req.body, (err, data) => {
                if (err) {
                    return res.json({
                        success: false,
                        message: 'Facture global not found',
                        err: err
                    });
                } else {
                    FactureGlobal.findById(req.params.id, (err, data) => {
                        return res.json({
                            success: true,
                            obj: data,
                            message: 'Facture modifiée'
                        });
                    });
                }
            });
        }
    });

    /**
     * REMOVE FactureGlobal
     */
    router.delete('/facture-global/:id', (req, res, next) => {
        if (!req.params.id) {
            return res.json({
                success: false,
                message: 'id_fact not provided'
            });
        } else {
            FactureGlobal.findByIdAndRemove(req.params.id, req.body, (err, data) => {
                if (err) {
                    return res.json({
                        success: false,
                        message: 'Facture global not found',
                        err: err
                    });
                } else {
                    return res.json({
                        success: true,
                        message: 'Facture supprimée'
                    });
                }
            });
        }
    });

    return router;
}