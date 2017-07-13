const mongoose = require('mongoose');
const Devis = require('./Devis');

const DetailsDevisSchema = mongoose.Schema({
    montantHt: Number,
    tauxTva: Number,
    montantTtc: Number,
    devis: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Devis', required: true }],
});

module.exports = mongoose.model('DetailsDevis', DetailsDevisSchema);
