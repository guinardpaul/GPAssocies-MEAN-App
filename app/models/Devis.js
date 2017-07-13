const mongoose = require('mongoose');
const Client = require('./Client');
const DetailsDevis = require('./DetailsDevis');

const DevisSchema = new mongoose.Schema({
    ref_devis: { type: String, required: true },
    date_creation: { type: Date, default: Date.now },
    montantHt: Number,
    tauxTva: Number,
    montantTtc: Number,
    client: { type: mongoose.Schema.Types.ObjectId, ref: 'Client', required: true },
    //detailsDevis: { type: mongoose.Schema.Types.ObjectId, ref: 'DetailsDevis', required: true },
});

module.exports = mongoose.model('Devis', DevisSchema);
