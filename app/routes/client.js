const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Client = require('../models/Client');

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
        if(err) return next(err);
        res.json(data);
    });
});

// SAVE CLIENT
router.post('/clients', (req, res, next) => {
    Client.create(req.body, (err, data) => {
        if(err) return next(err);
        res.json({ success: true, obj: data, msg: 'Client created' });
    });
});

// UPDATE CLIENT
router.put('/clients/:id', (req, res, next) => {
    Client.findByIdAndUpdate(req.params.id, req.body, (err, data) => {
        if(err) return next(err);
        Client.findById(req.params.id, (err, data) => {
            res.json({ success: true, obj: data, msg: 'Client updated' });
        });
    });
});

// REMOVE CLIENT
router.delete('/clients/:id', (req, res, next) => {
    Client.findByIdAndRemove(req.params.id, req.body, (err, data) => {
        if(err) return next(err);
        if(data != null){
            res.json({ success: true, msg: 'Client deleted'});
        } else {
            res.json({ success: false, msg: 'Error. Client doesn\'t exist' });
        }
    });
});

module.exports = router;