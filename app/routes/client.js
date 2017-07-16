const Client = require('../models/Client');

module.exports = (router) => {
    
// GET ALL CLIENT
router.get('/clients', (req, res, next) => {
    Client.find((err, data) => {
        if (err) return next(err);
        res.json(data);
    });
});

// GET ONE CLIENT
router.get('/clients/:id', (req, res, next) => {
    Client.findById(req.params.id, (err, data) => {
        if(data){
            res.json(data);
        } else {
            res.json({
                success: false,
                message: 'Client not found'
            });
        }
    });
});

// SAVE CLIENT
router.post('/clients', (req, res, next) => {
    let client = new Client({
        nom: req.body.nom,
        prenom: req.body.prenom,
        email: req.body.email
    });
    client.save((err) => {
   // Client.create(req.body, (err, data) => {
        if(err) {
            if (err.errors.nom) {
                res.json({
                    success: false,
                    message: err.errors.nom.properties.message
                });
            } else if (err.errors.prenom) {
                res.json({
                    success: false,
                    message: err.errors.prenom.properties.message
                });
            } else if (err.errors.email) {
                res.json({
                    success: false,
                    message: err.errors.email.properties.message
                });
            } else {
                console.log(err);
                res.json({
                    success: false,
                    message: 'Error trying to save Client'
                });
            }
        }
        res.json({ 
            success: true, 
            //obj: data, 
            msg: 'Client created'
        });
    });
});

// UPDATE CLIENT
router.put('/clients/:id', (req, res, next) => {
    Client.findByIdAndUpdate(req.params.id, req.body, (err, data) => {
        if(err) {
            if (err.errors.nom) {
                res.json({
                    success: false,
                    message: err.errors.nom.properties.message
                });
            } else if (err.errors.prenom) {
                res.json({
                    success: false,
                    message: err.errors.prenom.properties.message
                });
            } else if (err.errors.email) {
                res.json({
                    success: false,
                    message: err.errors.email.properties.message
                });
            } else {
                console.log(err);
                res.json({
                    success: false,
                    message: 'Error trying to update Client'
                });
            }
        }
        Client.findById(req.params.id, (err, data) => {
            res.json({
                success: true,
                obj: data,
                msg: 'Client updated'
            });
        });
    });
});

// REMOVE CLIENT
router.delete('/clients/:id', (req, res, next) => {
    Client.findByIdAndRemove(req.params.id, req.body, (err, data) => {
        if(data){
            res.json({ 
                success: true, 
                msg: 'Client deleted'
            });
        } else {
            res.json({ 
                success: false, 
                msg: 'Error. Client doesn\'t exist' 
            });
        }
    });
});

return router;
};