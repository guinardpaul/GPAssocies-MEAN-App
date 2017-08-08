const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
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

module.exports = mongoose.model('DetailsDevis', DetailsDevisSchema);
