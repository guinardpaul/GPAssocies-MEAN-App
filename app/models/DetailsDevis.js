const mongoose = require('mongoose');
const Devis = require('./Devis');

const DetailsDevisSchema = mongoose.Schema({
    montantHt: {
        type: Number
    },
    tauxTva: {
        type: Number
    },
    montantTtc: {
        type: Number
    },
    devis: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Devis',
        required: true
    },
});

DetailsDevisSchema.pre('save', function (next) {
    next();
});

module.exports = mongoose.model('DetailsDevis', DetailsDevisSchema);
