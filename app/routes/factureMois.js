const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const FactureMois = require('../models/FactureMois');

/**
 * GET ALL FactureMois
 */
router.get('/facture-mois', (req, res, next) => {
    FactureMois.find((err, data) => {
        if (err) return next(err);
        res.json(data);
    });
});

/**
 * GET ALL FactureMois BY CLIENT
 */
router.get('/facture-mois/facture-global/:factureGlobal', (req, res, next) => {
    // associe client to params
    // {} display all FactureMois informations
    FactureMois.find({ 'factureGlobal': req.params.factureGlobal }, {}, (err, data) => {
        if (err) return next(err);
        res.json(data);
    });
});

/**
 * GET ONE FactureMois
 */
router.get('/facture-mois/:id', (req, res, next) => {
    FactureMois.findById(req.params.id, (err, data) => {
        if(err) return next(err);
        res.json(data);
    });
});
   
/**
 * SAVE FactureMois
 */
router.post('/facture-mois', (req, res, next) => {   
    FactureMois.create(req.body, (err, data) => {
        if(err) return next(err);
        res.json({ success: true, obj: data, msg: 'Facture Mois created' });
    });
});

/**
 * UPDATE FactureMois
 */
router.put('/facture-mois/:id', (req, res, next) => {
    FactureMois.findByIdAndUpdate(req.params.id, req.body, (err, data) => {
        if(err) return next(err);
        FactureMois.findById(req.params.id, (err, data) => {
            res.json({ success: true, obj: data, msg: 'Facture Mois updated' });
        });
    });
});

/**
 * REMOVE FactureMois
 */
router.delete('/facture-mois/:id', (req, res, next) => {
    FactureMois.findByIdAndRemove(req.params.id, req.body, (err, data) => {
        if(err) return next(err);
        if(data != null){
            res.json({ success: true, msg: 'Facture Mois deleted' });
        } else {
            res.json({ success: true, msg: 'Error. Facture Mois doesn\'t exist' });
        }
    });
});

module.exports = router;