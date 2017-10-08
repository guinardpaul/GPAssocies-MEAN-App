const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Client = require('./Client');
const Devis = require('./Devis');

const FactureGlobalSchema = new mongoose.Schema({
    status_factureGlobal: {
        type: Boolean,
        default: true
    },
    ref_factureGlobal: {
        type: String,
        required: true
    },
    date_creation: {
        type: Date,
        default: Date.now,
        required: true
    },
    montantHt: {
        type: Number,
        required: true
    },
    tauxTva: {
        type: Number,
        required: true
    },
    montantTtcTotal: {
        type: Number,
        required: true
    },
    montantTtcFacture: {
        type: Number,
        default: 0
    },
    montantTtcRegle: {
        type: Number,
        default: 0
    },
    client: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Client',
        required: true
    },
    devis: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Devis',
        required: true
    },
    valid: {
        type: Boolean,
        default: true
    },
    description: {
        type: String
    },
    updated_at: {
        type: Date
    }
});

module.exports = mongoose.model('FactureGlobal', FactureGlobalSchema);