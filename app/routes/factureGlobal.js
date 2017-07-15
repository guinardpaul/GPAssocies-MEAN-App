const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const FactureGlobal = require('../models/FactureGlobal');

/**
 * GET ALL FactureGlobal
 */
router.get('/facture-global', (req, res, next) => {
    FactureGlobal.find((err, data) => {
        if (err) return next(err);
        res.json(data);
    });
});

/**
 * GET ALL FactureGlobal BY CLIENT
 */
router.get('/facture-global/client/:client', (req, res, next) => {
    // associe client to params
    // {} display all FactureGlobal informations
    FactureGlobal.find({ 'client': req.params.client }, {}, (err, data) => {
        if(data){
            res.json(data);
        } else {
            res.json({
                success: false,
                message: 'Facture Global not found'
            });
        }
    });
});

/**
 * GET ONE FactureGlobal
 */
router.get('/facture-global/:id', (req, res, next) => {
    FactureGlobal.findById(req.params.id, (err, data) => {
        if(data){
            res.json(data);
        } else {
            res.json({
                success: false,
                message: 'Facture Global not found'
            });
        }
    });
});
   
/**
 * SAVE FactureGlobal
 */
router.post('/facture-global', (req, res, next) => {   
    FactureGlobal.create(req.body, (err, data) => {
        console.log(err);
        if(err) return next(err);
        res.json({ 
            success: true, 
            obj: data, 
            msg: 'Facture Global created' 
        });
    });
});

/**
 * UPDATE FactureGlobal
 */
router.put('/facture-global/:id', (req, res, next) => {
    FactureGlobal.findByIdAndUpdate(req.params.id, req.body, (err, data) => {
        if(err) return next(err);
        FactureGlobal.findById(req.params.id, (err, data) => {
            res.json({ 
                success: true, 
                obj: data, 
                msg: 'Facture Global updated' 
            });
        });
    });
});

/**
 * REMOVE FactureGlobal
 */
router.delete('/facture-global/:id', (req, res, next) => {
    FactureGlobal.findByIdAndRemove(req.params.id, req.body, (err, data) => {
        if(err) return next(err);
        if(data != null){
            res.json({ success: true, msg: 'Facture Global deleted' });
        } else {
            res.json({ success: false, msg: 'Error. Facture Global doesn\'t exist' });
        }
    });
});

module.exports = router;