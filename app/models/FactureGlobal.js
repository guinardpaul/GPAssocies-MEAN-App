const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Client = require('./Client');
const DetailsDevis = require('./DetailsDevis');

const FactureGlobalSchema = new mongoose.Schema({
    ref_factureGlobal: {
        type: String,
        required: true,
        unique: true
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
        required: true
    },
    montantTtcRegle: {
        type: Number,
        required: true
    },
    client: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Client',
        required: true
    },
});

module.exports = mongoose.model('FactureGlobal', FactureGlobalSchema);