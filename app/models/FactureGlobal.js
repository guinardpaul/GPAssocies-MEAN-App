const mongoose = require('mongoose');
const Client = require('./Client');
const DetailsDevis = require('./DetailsDevis');

const FactureGlobalSchema = new mongoose.Schema({
    ref_factureGlobal: String,
    date_creation: { type: Date, default: Date.now },
    montantHt: Number,
    tauxTva: Number,
    montantTtc: Number,
    client: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Client', required: true }],
});

module.exports = mongoose.model('FactureGlobal', FactureGlobalSchema);