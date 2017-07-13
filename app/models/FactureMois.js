const mongoose = require('mongoose');
const FactureGlobal = require('./FactureGlobal');

const FactureMoisSchema = new mongoose.Schema({
    ref_factureMois: { type: String, required: true },
    date_creation: { type: Date, default: Date.now },
    montantHt: Number,
    tauxTva: Number,
    montantTtc: Number,
    factureGlobal: [{ type: mongoose.Schema.Types.ObjectId, ref: 'FactureGlobal', required: true }],
});

module.exports = mongoose.model('FactureMois', FactureMoisSchema);