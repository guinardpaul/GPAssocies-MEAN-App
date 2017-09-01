const Client = require('../models/Client');

module.exports = (router) => {

    /**
     * GET ALL CLIENT
     */
    router.get('/clients', (req, res, next) => {
        Client.find((err, data) => {
            if (err) return next(err);
            return res.json(data);
        });
    });

    /**
     * GET ONE CLIENT
     */
    router.get('/clients/:id', (req, res, next) => {
        if (!req.params.id) {
            return res.json({
                success: false,
                message: 'id not provided'
            });
        } else {
            Client.findById(req.params.id, (err, data) => {
                if (data) {
                    return res.json(data);
                } else {
                    return res.json({
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
            return res.json({
                success: false,
                message: 'data not provided'
            });
        } else {
            Client.create(req.body, (err, data) => {
                if (err) {
                    if (err.code === 11000) {
                        return res.json({
                            success: false,
                            message: 'Email déjà utilisé'
                        });
                    } else if (err.errors.email) {
                        return res.json({
                            success: false,
                            message: err.errors.email.message
                        });
                    } else if (err.errors.nom) {
                        return res.json({
                            success: false,
                            message: err.errors.nom.message
                        });
                    } else if (err.errors.prenom) {
                        return res.json({
                            success: false,
                            message: err.errors.prenom.message
                        });
                    } else {
                        console.log(err);
                        return res.json({
                            success: false,
                            message: 'Erreur création client',
                            err: err
                        });
                    }
                }
                return res.json({
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
            return res.json({
                success: false,
                message: 'id not provided'
            });
        } else {
            Client.findByIdAndUpdate(req.params.id, req.body, (err, data) => {
                if (err) {
                    /* if (err.errors.email) {
                        return res.json({
                            success: false,
                            message: err.errors.email.message
                        });
                    } else { */
                    return res.json({
                        success: false,
                        message: 'Erreur modification client',
                        err: err
                    });
                    // }
                } else {
                    Client.findById(req.params.id, (err, data) => {
                        return res.json({
                            success: true,
                            obj: data,
                            message: 'Client modifié'
                        });
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
            return res.json({
                success: false,
                message: 'id not provided'
            });
        } else {
            Client.findByIdAndRemove(req.params.id, req.body, (err, data) => {
                if (data) {
                    return res.json({
                        success: true,
                        message: 'Client supprimé'
                    });
                } else {
                    return res.json({
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