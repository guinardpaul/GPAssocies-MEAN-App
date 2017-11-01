const Client = require('../models/Client');

module.exports = (router) => {

    /**
     * GET ALL CLIENT
     */
    router.get('/clients', (req, res, next) => {
        Client.find((err, data) => {
            if (err) return next(err);
            return res.status(200).json(data);
        });
    });

    /**
     * GET ONE CLIENT
     */
    router.get('/clients/:id', (req, res, next) => {
        if (!req.params.id) {
            return res.status(409).json({
                success: false,
                message: 'id not provided'
            });
        } else {
            Client.findById(req.params.id, (err, data) => {
                if (data) {
                    return res.status(200).json(data);
                } else {
                    return res.status(409).json({
                        success: false,
                        message: 'Client not found',
                        err: err
                    });
                }
            });
        }
    });

    /**
     * SAVE CLIENT
     */
    router.post('/clients', (req, res, next) => {
        if (!req.body) {
            return res.status(400).json({
                success: false,
                message: 'data not provided'
            });
        } else {
            Client.create(req.body, (err, data) => {
                if (err) {
                    if (err.code === 11000) {
                        return res.status(409).json({
                            success: false,
                            message: 'Email déjà utilisé'
                        });
                    } else if (err.errors.email) {
                        return res.status(409).json({
                            success: false,
                            message: err.errors.email.message
                        });
                    } else if (err.errors.nom) {
                        return res.status(409).json({
                            success: false,
                            message: err.errors.nom.message
                        });
                    } else if (err.errors.prenom) {
                        return res.status(409).json({
                            success: false,
                            message: err.errors.prenom.message
                        });
                    } else {
                        return res.status(500).json({
                            success: false,
                            message: 'Erreur création client',
                            err: err
                        });
                    }
                }
                return res.status(200).json({
                    success: true,
                    obj: data,
                    message: 'Client créé'
                });
            });
        }
    });

    /**
     * UPDATE CLIENT
     */
    router.put('/clients/:id', (req, res, next) => {
        if (!req.params.id) {
            return res.status(400).json({
                success: false,
                message: 'id not provided'
            });
        } else {
            Client.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, data) => {
                if (err) {
                    return res.status(500).json({
                        success: false,
                        message: 'Erreur modification client',
                        err: err
                    });
                    // }
                } else {
                    return res.status(200).json({
                        success: true,
                        obj: data,
                        message: 'Client modifié'
                    });
                }
            });
        }
    });

    /**
     * REMOVE CLIENT
     */
    router.delete('/clients/:id', (req, res, next) => {
        if (!req.params.id) {
            return res.status(400).json({
                success: false,
                message: 'id not provided'
            });
        } else {
            Client.findByIdAndRemove(req.params.id, req.body, (err, data) => {
                if (data) {
                    return res.status(200).json({
                        success: true,
                        message: 'Client supprimé'
                    });
                } else {
                    return res.status(500).json({
                        success: false,
                        message: 'Erreur suppression client',
                        err: err
                    });
                }
            });
        }
    });

    return router;
};