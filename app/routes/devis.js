const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Devis = require('../models/Devis');

// GET ALL DEVIS
router.get('/devis', (req, res, next) => {
    Devis.find((err, data) => {
        if (err) return next(err);
        res.json(data);
    });
});

//GET ALL DEVIS BY CLIENT
router.get('/devis/client/:client', (req, res, next) => {
    Devis.find({ 'client': req.params.client }, {}, (err, data) => {
        if (err) return next(err);
        res.json(data);
    });
});

// GET ONE DEVIS
router.get('/devis/:id', (req, res, next) => {
    Devis.findById(req.params.id, (err, data) => {
        if(err) return next(err);
        res.json(data);
    });
});
   
// SAVE DEVIS
router.post('/devis', (req, res, next) => {   
    Devis.create(req.body, (err, data) => {
        if(err) return next(err);
        res.json({ success: true, obj: data, msg: 'Devis created' });
    });
});

// UPDATE DEVIS
router.put('/devis/:id', (req, res, next) => {
    Devis.findByIdAndUpdate(req.params.id, req.body, (err, data) => {
        if(err) return next(err);
        Devis.findById(req.params.id, (err, data) => {
            res.json({ success: true, obj: data, msg: 'Devis updated' });
        });
    });
});

// REMOVE DEVIS
router.delete('/devis/:id', (req, res, next) => {
    Devis.findByIdAndRemove(req.params.id, req.body, (err, data) => {
        if(err) return next(err);
        if(data != null){
            res.json({ success: true, msg: 'Devis deleted' });
        } else {
            res.json({ success: false, msg: 'Error. Devis doesn\'t exist'});
        }
    });
});

module.exports = router;