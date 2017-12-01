const model = require('../models');

module.exports = (router) => {

    /**
     * GET ALL CLIENT
     */
    router.get('/clients', (req, res, next) => {
        model.Client.findAll()
            .then((data) => {
                res.status(200).json(data);
            })
            .catch(err => {
                res.status(500).json({
                    success: false,
                    message: 'Erreur getting clients',
                    err: err
                });
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
            model.Client.findById(req.params.id)
                .then(data => {
                    return res.status(200).json(data);
                })
                .catch(err => {
                    res.status(500).json({
                        success: false,
                        message: 'Client not find',
                        err: err
                    });
                });
        }
    });

    /**
     * Vérif unicité numéro affaire
     */
    router.get('/clients/numAffaire/:affaire', (req, res, next) => {
        if (!req.params.affaire) {
            res.status(409).json({
                success: false,
                message: 'N° affaire not provided'
            });
        } else {
            model.Client.findOne({ where: { affaire: req.params.affaire } })
                .then(data => {
                    return res.status(200).json(data);
                })
                .catch(err => {
                    res.status(500).json({
                        success: false,
                        message: 'Client not find',
                        err: err
                    });
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
            model.Client.create(req.body)
                .then(data => {
                    return res.status(200).json({
                        success: true,
                        message: 'Client sauvé',
                        obj: data
                    });
                })
                .catch(err => {
                    res.status(500).json({
                        success: false,
                        message: 'Client non sauvé',
                        err: err
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
            model.Client.update(req.body, { where: { id: req.params.id } })
                .then(data => {
                    return res.status(200).json({
                        success: true,
                        message: 'Client modifié',
                        obj: data
                    });
                })
                .catch(err => {
                    res.status(500).json({
                        success: false,
                        message: 'Client non modifié',
                        err: err
                    });
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
            model.Client.destroy({ where: { id: req.params.id } })
                .then(data => {
                    return res.status(200).json({
                        success: true,
                        message: 'Client supprimé'
                    });
                })
                .catch(err => {
                    res.status(500).json({
                        success: false,
                        message: 'Erreur suppression client',
                        err: err
                    });
                });
        }
    });

    return router;
};